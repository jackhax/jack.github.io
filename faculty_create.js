var submit = document.getElementById("submit");
var post   = document.getElementById("post");
var input   = document.getElementById("alpha");

function dataInput()
{
	if(post.value.length>0 || input.value.length>0)
	{
		console.log(input.value);
		console.log(post.value);
		input.value="";
		post.value="";
	}	
}


submit.addEventListener("click",dataInput);