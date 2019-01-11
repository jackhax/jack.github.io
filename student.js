var input = document.getElementById("studentName");
var button = document.getElementById("button");
var ol = document.getElementById("list");

function dataInput()
{
	if(input.value.length>0)
		{
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ol.appendChild(li);
			input.value ="";
		}
	else
		window.alert("Nothing Entered");	
}

button.addEventListener("click",dataInput);

