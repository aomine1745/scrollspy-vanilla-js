//Variables
var nav = document.getElementById('nav'),
navH;

// ScrollSpy
var navLinks = document.querySelectorAll('nav div ul li a'),
sections = document.querySelectorAll('section'),
currentScrollPos, targetClass;

window.onload = ()=>{
	navH = nav.offsetHeight;
}

// Document Scroll
document.onscroll = () => {
	currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop;
	sections.forEach((e) => {
		if (e.offsetTop < (currentScrollPos + navH) && (currentScrollPos + navH) < (e.offsetTop + e.offsetHeight)) {
			targetClass = '.' + e.id + '-marker';
			for(let i of navLinks){
				if (i.classList.contains('active')) {
					i.classList.remove('active');
				}
			}
			document.querySelector(targetClass).classList.add('active');
		}
	});
	
	// Cambiar color
	if(currentScrollPos > navH){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
}


