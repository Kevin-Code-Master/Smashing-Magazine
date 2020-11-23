// Hover effect on the pop ups

document.getElementById('article-1').addEventListener('mouseover', myFunction);
document.getElementById('article-1').addEventListener('mouseleave', myLeaveFunction);
// for the second pop up
document.getElementById('article-2').addEventListener('mouseover', myFunction1);
document.getElementById('article-2').addEventListener('mouseleave', myLeaveFunction1);
// for the third pop
document.getElementById('article-3').addEventListener('mouseover', myFunction2);
document.getElementById('article-3').addEventListener('mouseleave', myLeaveFunction2);

function myFunction(){
	document.getElementById('arrow-container').style.backgroundColor = "blue";
	document.getElementById('main').style.color = "#ba3125";
	document.getElementById('arrow-right').style.color = "red";
}

function myLeaveFunction(){
	document.getElementById('arrow-container').style.backgroundColor = "initial";
	document.getElementById('main').style.color = "initial";
	document.getElementById('arrow-right').style.color = "white";
}

function myFunction1(){
	document.getElementById('arrow-container-2').style.backgroundColor = "blue";
	document.getElementById('main2').style.color = "#ba3125";
	document.getElementById('arrow-right').style.color = "red";
}

function myLeaveFunction1(){
	document.getElementById('arrow-container-2').style.backgroundColor = "initial";
	document.getElementById('main2').style.color = "initial";
	document.getElementById('arrow-right').style.color = "white";
}

function myFunction2(){
	document.getElementById('arrow-container-3').style.backgroundColor = "blue";
	document.getElementById('main3').style.color = "#ba3125";
	document.getElementById('arrow-right').style.color = "red";
}

function myLeaveFunction2(){
	document.getElementById('arrow-container-3').style.backgroundColor = "initial";
	document.getElementById('main3').style.color = "initial";
	document.getElementById('arrow-right').style.color = "white";
}
