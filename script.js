debugger;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function openNav() {
		document.getElementById("navBar").style.width = "350px";
};
function closeNav() {
		document.getElementById("navBar").style.width = "0";
};
function changeAard() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_aard.pdf');
			window.open("");
			if (isMobile.any()) {
				window.open("");
			}		
};
function changeBio() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_bio.pdf');
			if (isMobile.any()) {
				window.open("");
			}		
};
function changeChem() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_chem.pdf');
			if (isMobile.any()) {
				window.open("");
			}		
};
function changeEng() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_eng.pdf');
			if (isMobile.any()) {
				window.open("");
			}		
};
function changeFrans() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_frans.pdf');
			if (isMobile.any()) {
				window.open("");
			}	
};
function changeFys() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_fys.pdf');
			if (isMobile.any()) {
				window.open("");
			}		
};
function changeGesch() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_gesch.pdf');
			if (isMobile.any()) {
				window.open("");
			}		
};
function changeWisk() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_wisk.pdf');
			if (isMobile.any()) {
				window.open("");
			}		
};
function home() {
	objData.setAttribute('data', 'home.html');
}
function aard() {
	document.getElementById('aard').style.display = "block";
}
function bio() {
	document.getElementById('bio').style.display = "block";
}
function eng() {
	document.getElementById('eng').style.display = "block";
}
function chem() {
	document.getElementById('chem').style.display = "block";
}
function frans() {
	document.getElementById('frans').style.display = "block";
}
function fys() {
	document.getElementById('fys').style.display = "block";
}
function gesch() {
	document.getElementById('gesch').style.display = "block";
}
function wisk() {
	document.getElementById('wisk').style.display = "block";
}
function closeAard() {
	document.getElementById('aard').style.display = "none";
}
function closeBio() {
	document.getElementById('bio').style.display = "none";
}
function closeChem() {
	document.getElementById('chem').style.display = "none";
}
function closeEng() {
	document.getElementById('eng').style.display = "none";
}
function closeFys() {
	document.getElementById('fys').style.display = "none";
}
function closeFrans() {
	document.getElementById('frans').style.display = "none";
}
function closeGesch() {
	document.getElementById('gesch').style.display = "none";
}
function closeWisk() {
	document.getElementById('wisk').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popupWisk')) {
        document.getElementById('popupWisk').style.display = "none";
    }
}
