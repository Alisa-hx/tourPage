$(function(){
	$(".footer > p").bind("click",function(){
			var curPage=1;
			$.ajax({
				url:'/project3/project/font.json',
				type:'get',
				dataType:'json',
				data:{"curPage":curPage},
				success: function(data){
					var tempData = {};
		            tempData.Returns= data.Returns;
		            var html = template('template', tempData);
		            document.getElementById('content').innerHTML += html;
		            curPage++;
				},
				error: function(){
					console.log('请求失败');
				}
			});
	});
})