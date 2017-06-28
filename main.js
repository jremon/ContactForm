var show=1;
$(document).on("click",".btn",function(){
        	$("#right").append("<div class=\"postit\"><span>"+$("#first_name").val()+" "+$("#last_name").val()+"</span><p id=\""+myindex+"\">Click for description!</p></div>");	
			  myindex++;
			 arr.push($("#description").val());
			 
			  });
			  
	$(document).on("click",".postit",function(e){

			if(show==1){
        	//$(".postit p").html(arr[$(this).attr("id")]);	
			show=0;
			for(var i=0;i<=arr.length-1;i++){
		
			document.getElementById(i).innerHTML=arr[i];
			
			}
			
			}else{
			show=1;
			for(var i=0;i<=arr.length-1;i++){
			
			document.getElementById(i).innerHTML="Click for description!";
			
			}
			
			}
			   });
			   		   
			   