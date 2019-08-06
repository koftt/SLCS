$().ready(function() {
	validateRule();
});

$.validator.setDefaults({
	submitHandler : function() {
		save();
	}
});

$("#merchantcode").bind("change",function () {   
	$("#cardTypeID").val("");
});

function save() {
	$.ajax({
		cache : true,
		type : "POST",
		url : "/account/cardType/save",
		data : $('#signupForm').serialize(),// 你的formid
		async : false,
		error : function(request) {
			parent.layer.alert("Connection error");
		},
		success : function(data) {
			if (data.code == 0) {
				parent.layer.msg("操作成功");
				parent.reLoad();
				var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
				parent.layer.close(index);

			} else {
				parent.layer.alert(data.msg)
			}

		}
	});

}
function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#signupForm").validate({
		rules : {
			minBalance : {
				required : true,
				min:0,
				maxlength:7
			},
			cardtypename : {
				required : true,
				maxlength:10
			},
			merchantcode : {
				required : true,
			},
			subCardTypeID : {
				required : true,
			},
			times : {
				digits : true
			},
			cardTypeID : {
				required : true,
				digits : true,
				remote : {
					url : "/account/cardType/existence", // 后台处理程序
					type : "post", // 数据发送方式
					dataType : "json", // 接受数据格式
					data : { // 要传递的数据
						cardTypeID : function() {
							return $("#cardTypeID").val();
						},
						merchantcode : function() {
							return $("#merchantcode").val();
						}
					}
				}
			}
		},
		messages : {
			minBalance : {
				required : icon + "只能输入数字，且不能小于零"
			},
			cardtypename : {
				required : icon + "请输入卡类型名称"
			},
			merchantcode : {
				required : icon + "请选择商户"
			},
			subCardTypeID : {
				required : icon + "请选择次卡类型"
			},
			times : {
				digits : icon + "只能输入正整数"
			},
			cardTypeID : {
				required : icon + "卡类型ID不能为空",
				digits : icon + "只能输入正整数",
				remote : icon + "卡类型编号已经存在!"
			}
		}
	})
}