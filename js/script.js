$(document).ready(function(){
	$("form").submit(function(e){
	 	e.preventDefault()
	 	var sum = 0 
	 	$(".number").each(function(){
			sum += Number($(this).val())
		})
	console.log(sum)
	})
})
