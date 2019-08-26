// 隐藏登陆提示框
function hiddenFunction(){
	var ele = document.getElementById("login");
	ele.style.display = "none";
}
// 显示登陆提示框
function showFunction(){
	var ele = document.getElementById("login");
	ele.style.display = "block";
}


function jumpToLogin(){
	window.location.href = "login.html";
}
function jumpToDetail(){
	window.location.href = "detail.html";
}