$(document).ready(function(){
	$("#batTeam").css("display","grid");

	$("#batTeam div").click(function(){
		// console.log($(this).attr("value"))
		$("#batTeamForm")[0].value = $(this).attr("value")
		$("#batTeam").fadeOut(500,function(){
			$("#bowlTeam").css("display","grid");
		});
	})

	$("#bowlTeam div").click(function(){
		// console.log($(this).attr("value"))
		$("#bowlTeamForm")[0].value = $(this).attr("value")
		$("#bowlTeam").fadeOut(300,function(){
			$("#innings").css("display","grid");
		});
	})

	$("#innings div").click(function(){
		// console.log($(this).attr("value"))
		$("#inningsForm")[0].value = $(this).attr("value")
		$("#innings").fadeOut(300,function(){
			$("#venue").css("display","grid");		
		});
	})

	$("#venue div").click(function(){
		// console.log($(this).attr("value"))
		$("#venueForm")[0].value = $(this).attr("value")
		$("#venue").fadeOut(300,function(){
			$("#batsman").css("display","grid");		
		});
	})

	$("#batsman div").click(function(){
		// $("#bat_multiselect")[0][$(this)[0].value].selected = true;
		if($(this).css('border')=='2px solid rgb(255, 0, 0)'){
			$(this).css("border","none");
			// $("#batsman div:hover").css("border","2px solid grey");
			// $(this).toggleClass('bat');
		}
		else{
			if($('#bat_multiselect')[0].value==false){
				$('#bat_multiselect')[0].value =$(this).attr("value");
			}
			else{
				$('#bat_multiselect')[0].value =$('#bat_multiselect')[0].value +','+ $(this).attr("value");
			}
			$(this).css("border","2px solid red");
		}

	})
	$("#bat_complete").click(function(){
		$("#batsman").fadeOut(300,function(){
			$("#bowlers").css("display","grid");			
		});
	})

	$("#bowlers div").click(function(){
		// $("#bat_multiselect")[0][$(this)[0].value].selected = true;
		if($(this).css('border')=='2px solid rgb(255, 0, 0)'){
			$(this).css("border","none");
			// $("#batsman div:hover").css("border","2px solid grey");
			// $(this).toggleClass('bat');
		}
		else{
			if($('#bowl_multiselect')[0].value==false){
				$('#bowl_multiselect')[0].value =$(this).attr("value");
			}
			else{
				$('#bowl_multiselect')[0].value =$('#bowl_multiselect')[0].value +','+ $(this).attr("value");
			}
			$(this).css("border","2px solid red");
		}

	})
	$("#bowl_complete").click(function(){
		$("#bowlers").fadeOut(300,function(){
			// $("#bowlers").fadeIn();			
			// $("#bowl_multiselect").fadeIn();			
		});
	})
	
});

