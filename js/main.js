var interns = document.querySelectorAll(".intern-box");
var internMenu = document.querySelector(".intern-menu");
var internBody = document.querySelector(".intern-body");
var reportersBox = document.getElementById("reporters-box");
var visualsBox = document.getElementById("visuals-box");
var socialBox = document.getElementById("social-box");
var multiplatformBox = document.getElementById("mpe-box");
var editorialBox = document.getElementById("editorial-box");
var reporters = document.getElementById("reporters");
var visuals = document.getElementById("visuals");
var social = document.getElementById("social");
var mpe = document.getElementById("mpe");
var editorial = document.getElementById("editorial");
var bars = document.querySelectorAll(".second");
var biosBlock = document.querySelector(".bios-block");
var returnTop = document.querySelectorAll(".pg-helper");

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > getPosition(internMenu) - 6) {
		document.getElementById("hiddeninterns").classList.add("show");
		updateBar();
	}
	else {
		document.getElementById("hiddeninterns").classList.remove("show");
		for (var i = 0; i < bars.length; i++) {
			bars[i].classList.remove("active");
		}
	}
	if (getPosition(internMenu) <= 0) {
		internMenu.classList.add("sticky");
	}
	if (internMenu.clientHeight + getPosition(internMenu) > getPosition(internBody) + internBody.clientHeight) {
		internMenu.classList.add("hideMenu");
	}
	else {
		internMenu.classList.remove("hideMenu");
	}
	// if (getPosition(biosBlock) > 0) {
	// 	if (returnTop.classList.contains("hideReturn") == true) { 
	// 		returnTop.classList.remove("hideReturn");
	// 	}
	// }
	// else {
	// 	returnTop.classList.add("hideReturn");
	// }
})

for (var i = 0; i < bars.length; i++) {
	bars[i].addEventListener("click", function() {
		var click = this.id + "-box";
		scrollTo(document.body, document.getElementById(click).offsetTop, 600);
	});
}

for (var i = 0; i < interns.length; i++) {
	interns[i].addEventListener("click", function() {
		var click = this.id + "-bio";
		console.log(click);
		scrollTo(document.body, document.getElementById(click).offsetTop, 600);
	});
}

for (var i = 0; i < returnTop.length; i++) {
	returnTop[i].addEventListener("click", function() {
		scrollTo(document.body, 0, 600);
	})
}

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

function updateBar() {
	var bars = document.querySelectorAll(".second");
	for (var i = 0; i < bars.length; i++) {
		bars[i].classList.remove("active");
	}
	if ((getPosition(reportersBox) <= 0) && (getPosition(reportersBox) > 0-reportersBox.clientHeight)) {
		reporters.classList.add("active");
	}
	else if ((getPosition(visualsBox) <= 0) && (getPosition(visualsBox) > 0-visualsBox.clientHeight)) {
		visuals.classList.add("active");
	}
	else if ((getPosition(socialBox) <= 0) && (getPosition(socialBox) > 0-socialBox.clientHeight)) {
		social.classList.add("active");
	}
	else if ((getPosition(multiplatformBox) <= 0) && (getPosition(multiplatformBox) > 0-multiplatformBox.clientHeight)) {
		mpe.classList.add("active");
	}
	else if ((getPosition(editorialBox) <= 0) && (getPosition(editorialBox) > 0-editorialBox.clientHeight)) {
		editorial.classList.add("active");
	}
}

// https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
function scrollTo(element, to, duration) {
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    if (duration <= 0) {
    	console.log(duration + " " + difference + " " + perTick);
    	return;
    }

// perTick is sometimes returning infinity, which breaks it? Idk if that's right

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}