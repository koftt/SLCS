var prefix = "/operation/dailySummaryBase"
$(function() {
	var Id = '';
	load(Id);
});

function load(Id) {
	$('#exampleTable')
		.bootstrapTable(
			{
				method : 'get', // 服务器数据的请求方式 get or post
				url : prefix + "/api/list", // 服务器数据的加载地址
				// showRefresh : true,
				// showToggle : true,
				// showColumns : true,
				iconSize : 'outline',
				toolbar : '#exampleToolbar',
				striped : true, // 设置为true会有隔行变色效果
				dataType : "json", // 服务器返回的数据类型
				pagination : true, // 设置为true会在底部显示分页条
				// queryParamsType : "limit",
				// //设置为limit则会发送符合RESTFull格式的参数
				singleSelect : false, // 设置为true将禁止多选
				// contentType : "application/x-www-form-urlencoded",
				// //发送到服务器的数据编码类型
				pageSize : 100000, // 如果设置了分页，每页数据条数
				pageNumber : 1, // 如果设置了分布，首页页码
				// search : true, // 是否显示搜索框
				showColumns : false, // 是否显示内容下拉框（选择显示的列）
				sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者
				// "server"
				queryParams : function(params) {
					return {
						// 说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
						limit : params.limit,
						offset : params.offset,

						sdate : $('#sdate').val(),
						edate : $('#edate').val(),
						merchantCode:$('#merchantCode').val(),
						sharePay:$('#sharePay').val()
 
					};
				},
				rowStyle: function(row,index){
					return  index == 0 ?  { classes:'danger'} : {};

				},
				// //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
				// queryParamsType = 'limit' ,返回参数必须包含
				// limit, offset, search, sort, order 否则, 需要包含:
				// pageSize, pageNumber, searchText, sortName,
				// sortOrder.
				// 返回false将会终止请求
				columns : [
							{
								field : 'txnDate',
								title : '交易日期',
								align:'center'
							},
							{
								field : 'shortName',
								title : '商户名称',
								align:'center'
							},
							{
								field : 'payMethodId',
								title : '充值方式',
								formatter : function(value, row, index) {
									if(value==0 || value==null)
										return "微信";
									if(value==1)
										return "支付宝";
								}
							},
							{
								field : 'settlementAmount',
								title : '日结金额',
								align:'right',
								formatter : function(value, row, index) {	
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'enterAmount',
								title : '入账金额',
								align:'right',
								formatter : function(value, row, index) {
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'totalServicefee',
								title : '总手续费',
								align:'right',
								formatter : function(value, row, index) {
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'pappayAmount',
								title : '免密金额',
								align:'right',
								formatter : function(value, row, index) {
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'pappayNum',
								title : '免密笔数',
								align:'center'
							},
							{
								field : 'pappayFee',
								title : '免密服务费',
								align:'right',
								formatter : function(value, row, index) {
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'topupAmount',
								title : '充值金额',
								align:'right',
								formatter : function(value, row, index) {
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'topupNum',
								title : '充值笔数',
								align:'center'
							},
							{
								field : 'refundAmount',
								title : '账户退款金额',
								align:'right',
								formatter : function(value, row, index) {									
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'refundNum',
								title : '账户退款笔数',
								align : 'center'
							},
							{
								field : 'refundServiceFee',
								title : '退款服务费',
								align:'right',
								formatter : function(value, row, index) {
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							
							{
								field : 'iCRefundAmount',
								title : 'IC退款金额',
								align:'right',
								formatter : function(value, row, index) {									
									if(value!=null){
										return value.toFixed(2);
									}
								}
							},
							{
								field : 'iCRefundNum',
								title : 'IC退款笔数',
								align : 'center'
							},
							
							{
								field : 'unPaidNum',
								title : '待补扣笔数	',
								align : 'center'
							},
							{
								field : 'unPaidAmount',
								title : '待补扣金额',
								align : 'center'
							},
/*							{
								field : 'delayPaidNum',
								title : '已补扣笔数',
								align : 'center'
							},
							{
								field : 'delayPaidAmount',
								title : '已补扣金额',
								align : 'center'
							},*/

							{
								field : 'summaryDateTime',
								title : '日结日期',
								align:'center'/*,
								cellStyle:formatTableUnit,
								formatter :paramsMatter*/
							},							
							{
								field : 'sharePay',
								title : '入账账户 ',
								align:'center' 
							}
							,							
							{
								field : 'payFee',
								title : '充值手续费',
								align:'right',
								formatter : function(value, row, index) {	
									if(value!=null){
										return value.toFixed(2);
									}
								} 
							}

			 
							]
			});
}
function reLoad() {
	$('#exampleTable').bootstrapTable('refresh');
	
/*	var data = $('#exampleTable').bootstrapTable('getData');

	
	$('#exampleTable').bootstrapTable('prepend',data[3]);*/
}

//表格超出宽度鼠标悬停显示td内容
function paramsMatter(value,row,index, field) {	
	var span=document.createElement('span');
	span.setAttribute('title',value);
	span.innerHTML = value;
	return span.outerHTML;
}
//td宽度以及内容超过宽度隐藏
function formatTableUnit(value, row, index) {
	return {
		css: {
		"white-space": 'nowrap',
		"text-overflow": 'ellipsis',
		"overflow": 'hidden',
		"max-width":'100px'
		}
	}
}


function excel(){
	layer.confirm('确定导出吗?', {
		  btn: ['是','否']
	}, function(){
		layer.closeAll('dialog');
		//window.location.href= prefix + '/expexcel?auditRemark=' + $('#searchName').val() + '&sdate=' + $('#sdate').val() + '&edate=' + $('#edate').val() + '&rechargetype=' + $('#rechargetype').val() + '&checktype=' + $('#checktype').val() + '&merchantCode=' + $('#merchantCode').val() + '&sharePay=' + $('#sharePay').val();
		window.location.href= '/ureport/excel?_u=file:DailysummaryBase.ureport.xml&auditRemark=' + $('#searchName').val() + '&sdate=' + $('#sdate').val() + '&edate=' + $('#edate').val() + '&rechargetype=' + $('#rechargetype').val() + '&checktype=' + $('#checktype').val() + '&merchantCode=' + $('#merchantCode').val() + '&sharePay=' + $('#sharePay').val();
	}, function(){
	});
}

function print(){
	var p = "/ureport" 
    var p2 = "&_t=1"
	window.open(p + '/preview?_u=file:DailysummaryBase.ureport.xml&auditRemark=' + $('#searchName').val() + '&sdate=' + $('#sdate').val() + '&edate=' + $('#edate').val() + '&rechargetype=' + $('#rechargetype').val() + '&checktype=' + $('#checktype').val() + '&merchantCode=' + $('#merchantCode').val() + '&sharePay=' + $('#sharePay').val()+p2);  
}