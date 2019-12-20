/*

	*Function scrollFix()
  * Scroll menu will fix on the top 

  */
 // for menu scroll
 window.onscroll = function () {scrollFix()};

 var fixHeader = document.getElementById('nav-bar');
 var isSticky = fixHeader.offsetTop;

 function scrollFix(){
 	if (window.pageYOffset > isSticky){
 		fixHeader.classList.add("fix");
 	}
 	else{
 		fixHeader.classList.remove("fix");
 	}
 }