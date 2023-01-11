// Bouton CV
const text = document.querySelector('.text-box p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 13.2}deg)">${char}</span>`
).join("");

"use strict";

//Scroll back to top
(function($) { "use strict";
		
	$(document).ready(function(){"use strict";
	
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 50;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
	});
	
})(jQuery);

/* ========================= # début navbar ========================= */

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

// <!-- Active link navbar -->
const li=document.querySelectorAll(".navlinks");
const sec=document.querySelectorAll(".section");

function activeMenu (){
	let len=sec.length;
	while(--len && window.scrollY + 97 < sec[len].offsetTop){}
	li.forEach(ltx => ltx.classList.remove("active"));
	li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Cacher le up quanq on ouvre la modale
$(".toggle1").click(function(){
	$("#up").hide()
});
$(".toggle2").click(function(){
	$("#up").show()
});

// Animation texte/img
var animjs1 = {
    distance: '100%',
    origin: 'top',
    // delay: 700,
    duration: 700,
	easing: 'ease',
    reset: true
};
ScrollReveal().reveal('.animjs1', animjs1);

var animjs3 = {
    distance: '50%',
    origin: 'bottom',
    // delay: 700,
    duration: 700,
	easing: 'ease'
};
ScrollReveal().reveal('.animjs3', animjs3);