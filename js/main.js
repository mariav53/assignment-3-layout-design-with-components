var container = document.querySelector('.container');
var btnMenu = document.querySelector('.btnMenu');
var btnCloseMenu = document.querySelector('.close_button');
var nav = document.querySelector('.sideMenu');
var menu = document.querySelector('.menu'); //ul menu

// function to open side menu
function openNav() {
	container.classList.add('container--menu-visible');
};
// functions to close side menu
function closeNav() {
	container.classList.remove('container--menu-visible');
};
btnMenu.addEventListener('click', openNav);
btnCloseMenu.addEventListener('click', closeNav);
nav.addEventListener('click', closeNav);
menu.addEventListener('click', closeNav);

// //function to close side menu when click outside menu
 window.addEventListener('mouseup', function(event){
 	var menuItem = document.querySelector('.menu_item');
 	if (event.target != menuItem){
 		closeNav();
     }
 });

 /*ajax request Reasons opcion 1*/
//  function getReasons(){
// 	var response = request.responseText;
// 	var reason = JSON.parse(response).reasons;
//
// 	var listHTML = '';
// 	for (var i = 0; i < reason.length; i++) {
// 		listHTML += '<div class="reasons_item"><h3 class="reason_subtitle">'+ reason[i].title + '</h3><p class="reason_text">' + reason[i].description +'</p></div>';
// 	}
// 	var div =document.querySelector('.reasons_container');
// 	div.innerHTML += listHTML;
// }
// var btnReasons = document.querySelector('.btn--reasons');
// btnReasons.addEventListener('click', myAjax);
//
// function myAjax () {
// 	request = new XMLHttpRequest();
// 	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh');
// 	request.addEventListener('load', getReasons);
// 	request.send();
// }

/*OPCION 2 PROBANDO PROMESAS Y DOM AVANZADO*/
function getReasons(){
  fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')

  .then(function(response){
    return response.json();
    })

  .then(function(json){
    var reason = json.reasons;

    var listHTML = '';
    for (var i = 0; i < reason.length; i++) {
      var newReasons = '<div class="reasons_item"><h3 class="reason_subtitle">'+ reason[i].title +     '</h3><p class="reason_text">' + reason[i].description +'</p></div>';
      listHTML+= newReasons;
      }
  var div =document.querySelector('.reasons_container');
	div.insertAdjacentHTML('beforeend', listHTML);
  });
};

var btnReasons = document.querySelector('.btn--reasons');
btnReasons.addEventListener('click', getReasons);

/*function smooth scroll*/
(function() {
	console.log(window.innerHeight);
if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
		var smoothScroll = function (anchor, duration) {
			var startLocation = window.pageYOffset;
			var endLocation = anchor.offsetTop;
			var distance = endLocation - startLocation;
			var increments = distance/(duration/16);
			var stopAnimation;
			var animateScroll = function () {
				window.scrollBy(0, increments);
				stopAnimation();
			};
			if ( increments >= 0 ) {
				stopAnimation = function () {
					var travelled = window.pageYOffset;
					if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
						clearInterval(runAnimation);
					}
				};
			} else {
				stopAnimation = function () {
					var travelled = window.pageYOffset;
					if ( travelled <= (endLocation ||0) ) {
						clearInterval(runAnimation);
					}
				};
			}
			var runAnimation = setInterval(animateScroll, 16);
		};
		var scrollToggle = document.querySelectorAll('.scroll');
		[].forEach.call(scrollToggle, function (toggle) {
			toggle.addEventListener('click', function(e) {
				e.preventDefault();
				var dataID = toggle.getAttribute('href');
				var dataTarget = document.querySelector(dataID);
				var dataSpeed = toggle.getAttribute('data-speed');
				if (dataTarget) {
					smoothScroll(dataTarget, dataSpeed ||800);
				}
			}, false);
		});
	}
})();
