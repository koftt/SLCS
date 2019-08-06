$().ready(function() {
    validateRule();
});

$.validator.setDefaults({
    submitHandler : function() {
        save();
    }
});


function save() {
    $.ajax({
        cache : true,
        type : "POST",
        url : "/ICSys/Setting/update",
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
	        	maxAmount : {
	        		digits : true
	        	},
	        	merchantCode : {
	        		required : true,
	        		maxlength : 4
	        	},
	        	m1KeyType : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	jtKeyType : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	zjKeyType : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	slKeyType : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	m1CardNOLength : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	jtCardNOLength : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	zjCardNOLength : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	},
	        	slCardNOLength : {
	        		digits : true,
	        		max : 99,
	        		min : 1
	        	}
	        },
	        messages : {
	        	maxAmount : {
					digits : icon + "只能输入正整数"
				},
				merchantCode : {
	        		required : icon + "不能为空",
	        		maxlength : '字符不能大于4个'
	        	},
	        	m1KeyType : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	jtKeyType : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	zjKeyType : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	slKeyType : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	m1CardNOLength : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	jtCardNOLength : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	zjCardNOLength : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	},
	        	slCardNOLength : {
	        		digits : icon + "只能输入正整数",
	        		max : icon + "只能输入1~99之间的数值",
	        		min : icon + "只能输入1~99之间的数值"
	        	}
	        }
	    })
}
