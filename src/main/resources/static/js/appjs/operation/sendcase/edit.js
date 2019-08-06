var input_content;
var html;
/*var obj = [[${disSettingDeta}]]*/
$().ready(function() {
    validateRule();

	var aryList=[];
	$.each(obj11,function(i,item){

		if(item['discountAmountUnit']!="%"){
		
			 html+=['<tr>',
				'<td><input type=\"text\" value=\"'+item['fromAmount']+'\" id=\"fromAmount\" name=\"!fromAmount\">','</td>',
	            '<td><input type=\"text\" value=\"'+item['toAmount']+'\" id=\"toAmount\" name=\"toAmount\">','</td>',
	            '<td><input type=\"text\" value="'+item['discountAmount']+'\" id=\"discountAmount\" name=\"discountAmount\">','</td>',
	             '<td style="display: none"><input type=\"text\" value=\"'+item['pid']+'\" id=\"pid\" name=\"pid\">','</td>',
	            '<td><a href=\'#\' onclick=\'deleteItem(this,\"'+item['pid']+'\");\'>删除</a></td>',
	            '<tr>'
	
			].join('');
		}else{
			 html+=['<tr>',
					'<td><input type=\"text\" value=\"'+item['fromAmount']+'\" id=\"fromAmount\" name=\"!fromAmount\">','</td>',
		            '<td><input type=\"text\" value=\"'+item['toAmount']+'\" id=\"toAmount\" name=\"toAmount\">','</td>',
		            '<td><input type=\"text\" value="'+item['discountAmount']+''+item['discountAmountUnit']+'" id=\"discountAmount\" name=\"discountAmount\">','</td>',
		             '<td style="display: none"><input type=\"text\" value=\"'+item['pid']+'\" id=\"pid\" name=\"pid\">','</td>',
		            '<td><a href=\'#\' onclick=\'deleteItem(this,\"'+item['pid']+'\");\'>删除</a></td>',
		            '<tr>'

				].join('');
		}
		
		
		aryList.push(html)
	});
    $("table").append(html);

});



$.validator.setDefaults({
    submitHandler : function() {
        edit();
    }
});


function addBtn(){
    // 获取form的值
    var fromAmount = $("input[name='fromAmount']").val();
    var toAmount = $("input[name='toAmount']").val();
    var discountAmount = $("input[name='discountAmount']").val();

    // 在table 中生成tr 
    var tr = $("<tr><<td><input type='text' name='!fromAmount'/></td><td><input type='text' name='toAmount'/></td><td><input type='text' name='discountAmount'/></td><td style=\"display: none\"><input type='text' name='pid'/></td><td><a href='#' onclick='deleteItem(this);'>删除</a></td></tr>");
    $("table").append(tr);

    input_content += $("input[name='fromAmount']").val();+"&"+$("input[name='toAmount']").val()+"&"+$("input[name='discountAmount']").val()
    // form重置，清除刚才表单填写的内容
    //$("form")[0].reset();
}

//删除
/*function deleteItem(a,pid){
	alert(pid);
    // 删除 a 元素所在行 
    $(a).parents("tr").remove();
}*/

function deleteItem(a,pid) {
	layer.confirm('确定要删除选中的方案？', {
		btn : [ '确定', '取消' ]
	}, function() {
		$.ajax({
			url : "/operation/sendcase/remove2",
			type : "post",
			data : {
				'pid' : pid
			},
			success : function(r) {
				if (r.code == 0) {
					layer.msg(r.msg);
					$(a).parents("tr").remove();
				} else {
					layer.msg(r.msg);
				}
			}
		});
	})
}

function edit() {
    //var discountname = $("input[name='discountname']").val()
    //var discountdesc = $("input[name='discountdesc']").val()
    //alert(input_content);
    var content = $('#signupForm').serialize();

    content = decodeURIComponent(content,true);

    $.ajax({
        cache : true,
        type : "POST",
        url : "/operation/sendcase/update",
        data : {content:content},// 你的formid
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
            discountname : {
                required : true
            },
            discountdesc : {
                required : true
            },
            effectivedatetime : {
                required : true
            },
            expireddatetime : {
                required : true
            },
            merchantCode : {
                required : true
            }

        },
        messages : {
            discountname : {
                required : icon + "请输入方案名称"
            },
            discountdesc : {
                required : icon + "请输入方案描述"
            },
            effectivedatetime : {
                required : icon + "请选择方案开始时间"
            },
            expireddatetime : {
                required : icon + "请选择方案结束时间"
            },
            merchantCode : {
                required : icon + "请选择商户"
            }
        }
    })
}


layui.use(['laydate'], function(){
    var laydate = layui.laydate;

    //日期
    laydate.render({
        elem: '#effectiveDateTime'
    });
    laydate.render({
        elem: '#expiredDateTime'
    });

});