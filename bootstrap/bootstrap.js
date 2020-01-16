/*进度条页面动画*/
var progressBar = document.getElementById('progressBar')
var progress = document.getElementById('progress')
for(let i =0;i<3;i++){
	setTimeout(function(){
		progressBar.style.width = 50*i + '%'
	},1000*i)
}
progressBar.style.height = 5+'px';
progress.style.height = 5+'px';

/*vue项目链接*/
function vueCheek(){

	var projectDetails = document.getElementById('projectDetails')
	 console.log("vueCheek")
	 var p = new Promise(function(resolve, reject){
	            projectDetails.innerHTML = '';
	 		   resolve();
	     });
	 p.then(function(){
	    var ifram = document.createElement('iframe');
	    ifram.src = '../projects/routers.html';
	    ifram.style.margin = "0";
	    ifram.style.padding = "0"
	    ifram.style.border = "0"
	    ifram.style.width = "100%";
	    ifram.style.height = "100%"
	    projectDetails.appendChild(ifram);
	    console.log('ok')
	 });
}
/**/
function shoppingCheek(){
	window.location.href = 'https://github.com/linyuan1105/cartvue'
	 // var projectDetails = document.getElementById('projectDetails')
	 console.log("shoppingCheek")
}
function oppoCheek(){
	var projectDetails = document.getElementById('projectDetails')
	 console.log("vueCheek")
	 var p = new Promise(function(resolve, reject){
	            projectDetails.innerHTML = '';
	 		   resolve();
	     });
	 p.then(function(){
	    var xmlhttp;
	    if (window.XMLHttpRequest)
	      {// code for IE7+, Firefox, Chrome, Opera, Safari
	      xmlhttp=new XMLHttpRequest();
	      }
	    else
	      {// code for IE6, IE5
	      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	      }
		  xmlhttp.open("GET","../projects/oppo.html",true);
		  xmlhttp.send();
	    xmlhttp.onreadystatechange=function()
	      {
	      if (xmlhttp.readyState==4 && xmlhttp.status==200)
	        {
	        projectDetails.innerHTML=xmlhttp.responseText;
	        }
	      }
	    console.log('ok')
	 });
}
