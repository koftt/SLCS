(function($) {
	/**
	 * 将指定范围的表单数据序列化成json对象
	 */
	$.fn.serializeJson = function() {
		var serializeObj = {};
		var array = this.serializeArray();
		var str = this.serialize();
		$(array).each(
				function() {
					if (serializeObj[this.name]) {
						if ($.isArray(serializeObj[this.name])) {
							serializeObj[this.name].push(this.value);
						} else {
							serializeObj[this.name] = [
									serializeObj[this.name], this.value ];
						}
					} else {
						serializeObj[this.name] = this.value;
					}
				});
		return serializeObj;
	};
})(jQuery);

/**
 * 通用的格式化对象
 */
var fmt = {
	fmtDecimal : function(value, row, index) {
		return value ? value.toFixed(2) : '-';
	},
	fmtDate : function(value, row, index) {
		return value == '1900-01-01 00:00:00' ? '-' : value;
	},
	fmtImage : function(value, row, index) {
		var imgurl = row.certphotourl || "../img/null.jpg";
		return '<a href="#" mce_href="#" onclick="base.popupImage(\'' + imgurl
				+ '\')">点击查看</a> ';
	}
};

/**
 * 页面基础对象
 */
var base = (function() {

	// 显示错误信息
	var showErrorMsg = function(opt) {
		alert(opt.text);
		return false;
	};
	// 显示加载进度
	var showLoading = function() {
		$('#loading').show();
	};
	// 隐藏加载进度
	var hideLoading = function() {
		$('#loading').hide();
	};
	// 重新刷新列表数据
	var reload = function() {
		try {
			$('#exampleTable').bootstrapTable('refresh');
		} catch (ex) {
			window.location.href = window.location.href;
		}
	};
	// 发送ajax请求
	var sendAjax = function(opts) {
		var success = function(data, textStatus) {
			if (data.code == 202) {// 登录过期
				if (parent)
					parent.window.location = "/login?returnurl="
							+ baseDO.pageUrl;
				else
					window.location = "/login?returnurl=" + baseDO.pageUrl;
				return false;
			}
			if (data.code == -204) {// token过期
				$.cookie("token", null);
				doAjax(opts);
			}
			if (opts.success) { // 成功回调方法
				opts.success(data, textStatus);
				return false;
			}
			if (data.code != 0) {
				layer.msg(data.msg);
				return false;
			}
			reload();
		};
		var url = opts.url;
		// 如果url不是http 或者 / 开头，表明是当前控制器一个方法
		if (url.toLowerCase().indexOf('http:') != 0 && url.indexOf('/') != 0)
			opts.url = baseDO.prefixUrl + "/" + url;
		console.log(opts.url);
		var options = {
			type : "POST",
			dataType : 'json',
			timeout : 60000,
			beforeSend : function(xhr) {
				xhr.setRequestHeader('Authorization', 'bearer '
						+ $.cookie("token"));
				showLoading();
			},
			complete : function() {
				baseDO.isProcessing = false;
				hideLoading();
			},
			error : function(xhp, textStatus, errorThrown) {
				hideLoading();
				if (xhp.getAllResponseHeaders() || xhp.status != 0) {
					var detail = '', reuslt = {};
					try {
						result = eval("(" + xhp.responseText + ")");
						detail = result.exception ? result.exception.message
								: '服务后台出现错误!';
					} catch (ex) {
						detail = xhp.responseText;
					}
					if (xhp.status == 401) {
						base.showErrorMsg("您的登录已经超时或不具备访问该数据的权限！");
						if (parent)
							parent.window.location = "/login?returnurl="
									+ baseDO.pageUrl;
						else
							window.location = "/login?returnurl="
									+ baseDO.pageUrl;
						return false;
					}
					showErrorMsg({
						text : 'status:' + xhp.status + '<br/>error:'
								+ textStatus + '<br/>detail:' + detail
					});
				}
			}
		};
		$.extend(options, opts);
		options.success = success;
		$.ajax(options);
	};

	// 发送ajax请求（外部调用）
	var doAjax = function(opts) {

		var token = $.cookie("token");

		if (!!!token) {

			var date = new Date();
			date.setTime(date.getTime() + 18 * 60 * 1000);// 18分钟
			$.cookie("token", baseDO.apiToken, {
				expires : date
			});
			sendAjax(opts);

		} else {
			sendAjax(opts);
		}
	};

	/**
	 * 弹窗 action: add/edit 添加或编辑 args: 传递的参数 多个参数 用斜杠分开，跟controller的参数保持一致
	 * /id/name... options: 弹窗选型，如自定义弹窗内容，则给该参数赋值，如： { title: '', area:
	 * ['450px','300px'], content: url + args }
	 */
	var popupWindow = function(action, args, options) {
		var tmp = baseDO.pageTitle.split('|');
		var title = tmp.length > 1 ? tmp[1] : tmp[0];
		title = $.trim(title);
		if (!!!options)
			options = {};
		var areaOptions = {
			type : 2,
			maxmin : true,
			shadeClose : false, // 点击遮罩关闭层
			title : options.title
					|| (action.toLowerCase() == 'add' ? '添加' : '编辑') + title,
			area : options.area || baseDO.popupArea || [ '450px', '300px' ],
			content : options.url || baseDO.prefixUrl + '/deal'
					+ (args ? "/" + args : '')
		};
		//console.log(JSON.stringify(areaOptions.area));
		var index = layui.layer.open(areaOptions);
		//layui.layer.iframeAuto(index);
	};

	/**
	 * 获取查询条件 约定查询条件都在 class=‘query-inputs’ 的 div区域中
	 */
	var queryParams = function(params) {
		var json = getFilter();
		json["limit"] = params.limit;
		json["offset"] = params.offset;
		return json;
	};

	/**
	 * 执行命令操作
	 * 
	 * options: 命令参数（object） { cmd: "命令关键字", msg:"确认操作提示语", data:
	 * {},//要传递的数据，JSON格式 callback: function(){}//自定义命令方法 popupOptions:
	 * {},//弹窗选项，仅对需要弹窗的命令有效（如添加、编辑、审核等） }
	 */
	var doCommand = function(options) {
		if (!!!options) {
			showErrorMsg("无效的命令参数!");
			return false;
		}
		if (!!!options.cmd) {
			showErrorMsg("缺少必要的命令关键字!");
			return false;
		}
		var cmd = options.cmd.toLowerCase();

		switch (cmd) {
		case "search":
			reload();
			break;
		case "delete":
			layui.layer.confirm(options.msg, function(index) {
				doAjax({
					url : 'remove',
					data : options.data
				});
				layui.layer.close(index);
			});

			break;
		case "export":
			layui.layer.confirm(options.msg, function(index) {
				window.open(baseDO.prefixUrl + '/' + cmd + '?'
						+ $.param(options.data), '_blank');
				layui.layer.close(index);
			});
			break;
		case "add":
			popupWindow(cmd, options.data, options.popupOptions);
			break;
		case "edit":
			popupWindow(cmd, options.data, options.popupOptions);
			break;
		case "admin":// 审核更新某个或某几个字段
			layui.layer.confirm(options.msg, function(index) {
				doAjax({
					url : 'operation',
					data : options.data
				});
				layui.layer.close(index);
			});
			break;
		default:
			showErrorMsg("未识别的命令关键字[" + cmd + "]");
			break;

		}

	};

	/**
	 * 通用列表默认选项
	 */
	var defaultTableOptions = {
		method : 'get', // 服务器数据的请求方式 get or post
		url : baseDO.prefixUrl + "/list", // 服务器数据的加载地址
		iconSize : 'outline',
		toolbar : '#exampleToolbar',
		striped : true, // 设置为true会有隔行变色效果
		dataType : "json", // 服务器返回的数据类型
		idField : "ID", // 标识哪个字段为id主键
		pagination : true, // 设置为true会在底部显示分页条
		singleSelect : false, // 设置为true将禁止多选
		pageSize : 10, // 如果设置了分页，每页数据条数
		pageNumber : 1, // 如果设置了分布，首页页码
		pageList : [ 10, 20, 50, 100, 200, 500 ],
		showColumns : false, // 是否显示内容下拉框（选择显示的列）
		sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
		queryParams : queryParams, // 获取查询条件
		formatLoadingMessage : function() {
			return "请稍等，正在加载中...";
		},
		formatNoMatches : function() { // 没有匹配的结果
			return '无符合条件的记录';
		},
		onLoadError : function(data) {
			$('#exampleTable').bootstrapTable('removeAll');
		},
		onDblClickRow : function(row) { // 双击编辑
			if (!hasPermission("edit"))
				return false;
			popupWindow('edit', row.id);
		}
	};

	/**
	 * 初始化列表表格
	 */
	var initTable = function(tblOptions) {
		$.extend(tblOptions, defaultTableOptions);
		$('#exampleTable').bootstrapTable(tblOptions);
	};

	/**
	 * 弹窗显示指定url地址的图片
	 */
	var popupImage = function(url) {
		layer.open({
			type : 1,
			title : false, // 不显示标题
			area : [ '640px', '435px' ], // 宽高
			content : '<div style="padding:0px 0px;"><img src="' + url
					+ '"/></div>'
		});
	};

	/**
	 * 检查是否有指定权限 支持权限全限定名称和部分限定名称
	 */
	var hasPermission = function(permission) {
		if (permission.indexOf(":") != 0) // 全限定名称 如 "sys:user:add"
											// 表示是否具有系统的用户添加权限
			return $.inArray(permission, baseDO.permissionList) != -1;

		var regex = new RegExp("." + permission + "$");// 部分限定名称 如 ":edit"
														// 判断是否具有编辑权限

		var flag = false;
		$.each(baseDO.permissionList, function(i, v) {

			if (regex.test(v)) {
				flag = true;
				return false;
			}
		});
		return flag;
	};

	/**
	 * 初始化页面代码 isPopup: 是否弹窗 options:初始化参数
	 */
	var initPage = function(options, isPopup) {
		if (isPopup) {
			$.validator.setDefaults({
				submitHandler : function() {
					submitForm();
				}
			});
			$("#signupForm").validate(options);
			return false;
		}

		$('#btnExport').bind('click', function() {
			var data = getFilter() || {};
			console.log(JSON.stringify(data));
			doCommand({
				cmd : 'export',
				msg : '您确认要导出当前数据吗？',
				data : data
			});
		});

		initTable(options);
	};

	/**
	 * 获取搜索条件 约定 查询条件都放在 class= query-inputs 的容器里
	 */
	var getFilter = function() {
		var json = $('.query-inputs *').serializeJson();
		json['searchName'] = $("#searchName").val();
		return json;
	};

	/**
	 * 关闭弹窗
	 */
	var closeWindow = function() {
		if (parent) {
			if (parent.window.refreshDetail)
				parent.window.refreshDetail();
			else
			//parent.window.location.href = parent.window.location.href;
			//parent.layer.close(parent.layer.getFrameIndex(window.name));
            
			if (typeof parent.base === "undefined") {
				parent.reLoad();
			}else{
				parent.base.reload();
			}
			
            var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
            parent.layer.close(index);
		}
	};

	/**
	 * 提交表单（编辑、添加） submitData ,要提交的数据（JSON） saveNext ：
	 * true：保存并添加下一条；false：保存关闭窗口
	 */
	var submitForm = function( ) {
		if (baseDO.isProcessing) {
			showErrorMsg("正在提交数据，请勿重复提交！");
			return false;
		}
		baseDO.isProcessing = true;
		
		var postData = setFormData();
		
		var saveNext = baseDO.saveNext == true;

		doAjax({
			data : postData,
			url	:	'update',
			success : function(result) {
				if (result.code == 0) {
					layer.alert("数据保存成功！", function() {
						if (parent && !saveNext) {
							closeWindow();
						} else {
							window.location.href = window.location.href;
						}
					});
				} else {
					layer.alert('['+ result.code +']' + result.message);
				}
			}
		});

	};
	
	var setFormData = function(){
		return $('#signupForm').serialize();
	};

	// 导出的公共方法
	return {
		showErrorMsg : showErrorMsg,
		showLoading : showLoading,
		hideLoading : hideLoading,
		doAjax : doAjax,
		sendAjax : sendAjax,
		popupWindow : popupWindow,
		doCommand : doCommand,
		initTable : initTable,
		reload : reload,
		popupImage : popupImage,
		hasPermission : hasPermission,
		getFilter : getFilter,
		initPage : initPage,
		closeWindow : closeWindow,
		submitForm : submitForm,
		setFormData: setFormData
 	};
})();

/**
 * 字符串格式化 "{0}/{1}/.../{N}".format(arg0,arg1,...,argN);
 */
String.prototype.format = function(args) {
	var result = this;
	if (arguments.length > 0) {
		if (arguments.length == 1 && typeof (args) == "object") {
			for ( var key in args) {
				if (args[key] != undefined) {
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
		} else {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] != undefined) {
					var reg = new RegExp("({)" + i + "(})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
	}
	return result;
}

var util = (function() {
	// 浮点数加法运算
	var floatAdd = function(arg1, arg2) {
		var r1, r2, m;
		try {
			r1 = arg1.toString().split(".")[1].length
		} catch (e) {
			r1 = 0
		}
		try {
			r2 = arg2.toString().split(".")[1].length
		} catch (e) {
			r2 = 0
		}

		m = Math.pow(10, Math.max(r1, r2));

		return (arg1 * m + arg2 * m) / m;
	};

	// 浮点数减法运算
	var floatSub = function(arg1, arg2) {
		var r1, r2, m, n;
		try {
			r1 = arg1.toString().split(".")[1].length
		} catch (e) {
			r1 = 0
		}
		try {
			r2 = arg2.toString().split(".")[1].length
		} catch (e) {
			r2 = 0
		}

		m = Math.pow(10, Math.max(r1, r2));
		// 动态控制精度长度
		n = Math.max(r1, r2);

		return ((arg1 * m - arg2 * m) / m).toFixed(n);
	};

	// 浮点数乘法运算
	var floatMul = function(arg1, arg2) {
		var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length
		} catch (e) {
		}
		try {
			m += s2.split(".")[1].length
		} catch (e) {
		}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", ""))
				/ Math.pow(10, m);
	};

	// 浮点数除法运算
	var floatDiv = function(arg1, arg2) {
		var t1 = 0, t2 = 0, r1, r2;
		try {
			t1 = arg1.toString().split(".")[1].length
		} catch (e) {
		}
		try {
			t2 = arg2.toString().split(".")[1].length
		} catch (e) {
		}
		with (Math) {
			r1 = Number(arg1.toString().replace(".", ""));
			r2 = Number(arg2.toString().replace(".", ""));
			return (r1 / r2) * pow(10, t2 - t1);
		}
	};

	var filterArray = function(aryObj, pk, values) {
		if (!$.isArray(values))
			values = (values + '').split(',');

		var aryFilter = $.grep(aryObj, function(item) {
			return $.inArray(item[pk] + '', values) != -1;
		});

		return aryFilter || null;
	}

	var doFillSelect = function(slt, aryData, selectedId, tipText) {
		var html = $.map(
				aryData,
				function(item, j) {
					return "<option value='" + item.value + "'>" + item.text
							+ "</option>";
				}).join('');
		if (tipText == undefined)
			tipText = '请选择';
		if (tipText !== false)
			html = '<option value=" ">' + tipText + '</option>' + html;

		slt.html(html).val(selectedId);

	};

	return {
		doFillSelect:doFillSelect,
		filterArray:filterArray,
		floatDiv:floatDiv,
		floatMul:floatMul,
		floatSub:floatSub,
		floatAdd:floatAdd
	}
})();

var icon = "<i class='fa fa-times-circle'></i> ";
// 允许跨域访问
jQuery.support.cors = true;
