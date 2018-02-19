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
		document.getElementById("navBar").style.width = "250px";
};
function closeNav() {
		document.getElementById("navBar").style.width = "0";
};
function summ_aard() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_aard.pdf');
			closeNav();
			closeAard();
			if (isMobile.any()) {
				window.open("summ_aard.pdf");
			}		
};
function summ_bio() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_bio.pdf');
			closeNav();
			closeBio();
			if (isMobile.any()) {
				window.open("summ_bio.pdf");
			}		
};
function summ_chem_atom() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_chem_atom.pdf');
			closeNav();
			closeChem();
			if (isMobile.any()) {
				window.open("summ_chem_atom.pdf");
			}		
};
function summ_chem_even() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_chem_even.pdf');
			closeNav();
			closeChem();
			if (isMobile.any()) {
				window.open("summ_chem_even.pdf");
			}		
};
function summ_eng_u3_4() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_eng_u3_4.pdf');
			closeNav();
			closeEng();
			if (isMobile.any()) {
				window.open("summ_eng_u3_4.pdf");
			}		
};
function summ_frans_pronom() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_frans_pronom.pdf');
			closeNav();
			closeFrans();
			if (isMobile.any()) {
				window.open("summ_frans_pronom.pdf");
			}	
};
function summ_fys() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_fys.pdf');
			closeNav();
			closeFys();
			if (isMobile.any()) {
				window.open("summ_fys.pdf");
			}		
};
function summ_strijd() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_strijd.pdf');
			closeNav();
			closeGesch();
			if (isMobile.any()) {
				window.open("summ_strijd.pdf");
			}		
};
function summ_wisk_complex() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_wisk_complex.pdf');
			closeNav();
			closeWisk();
			if (isMobile.any()) {
				window.open("summ_wisk_complex.pdf");
			}		
};
function summ_wisk_funct() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_wisk_funct.pdf');
			closeNav();
			closeWisk();
			if (isMobile.any()) {
				window.open("summ_wisk_funct.pdf");
			}		
};
function summ_wisk_gon() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'summ_wisk_gon.pdf');
			closeNav();
			closeWisk();
			if (isMobile.any()) {
				window.open("summ_wisk_gon.pdf");
			}		
};
function home() {
	objData.setAttribute('data', 'home.html');
	closeNav();
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

