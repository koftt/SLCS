
window.onload = function(){
   document.getElementById("r").style.height = document.getElementById("l").clientHeight + 1 +"px";  
}

function dealOperation(id,dealmsg) {
	var desctext =$("#desc").val();
	if(dealmsg==1){
		layer.confirm('确认通过审核？', {
			btn : [ '确定', '取消' ]
		}, function() {
			$.ajax({
				url : "/account/account/Deal",
				type : "post",
				data : {
					'id' : id,
					'operationType' : dealmsg,
					'desctext' : desctext
				},
				success : function(r) {
					if (r.code == 0) {
						layer.msg(r.msg);
						parent.reLoad();
						var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
						parent.layer.close(index);
					} else {
						layer.msg(r.msg);
					}
				}
			});
		}) 
	}else{
		layer.confirm('审核不通过？', {
			btn : [ '确定', '取消' ]
		}, function() {
			$.ajax({
				url : "/account/account/Deal",
				type : "post",
				data : {
					'id' : id,
					'operationType' : dealmsg,
					'desctext' : desctext
				},
				success : function(r) {
					if (r.code == 0) {
						layer.msg(r.msg);
						parent.reLoad();
						var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
						parent.layer.close(index);
					} else {
						layer.msg(r.msg);
					}
				}
			});
		}) 
	}
	


}
 
 