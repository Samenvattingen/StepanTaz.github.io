window.onload = mobile;
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
}
function openNav() {
    $("#navBar").css({
        "width": "250px",
        "font-size": "2vmax"
    });
    $("#navBarFull").css({
        "display": "block"
    });
    $(".closebtn").css({
        "display": "block"
    });
};
function closeNav() {
    $("#navBar").css({"width": "0"});
    $("#navBarFull").css({
        "display": "none"
    });
    $(".closebtn").css({
        "display": "none"
    });
    $(".tab").fadeOut(200);
    tabCheck = 0;
};
function openSumm(summ, mobileSumm) {
        if (isMobile.any()) {
            $("#pdf").attr("data", mobileSumm);
        }
        else {
            $("#pdf").attr("data", summ);
        }    
        closeNav();
        closeAll();
};
function home() {
    if (isMobile.any()) {
        $("#pdf").attr("data", "homeMobile.html");
    }
    else {
        $("#pdf").attr("data", "home.html");
    }
    closeNav();
    closeAll();
};
function show(vak) {
    $(vak).fadeIn(200);
};
function closeInner(vak) {
    $(vak).fadeOut(200);
};
function closeAll() {
        closeInner(document.querySelectorAll("#aard, #bio, #chem, #eng, #frans, #fys, #gesch, #ned, #wisk, #exam"));
}
window.onclick = function(event) {
    if (event.target == document.getElementById("aard")) {
        closeAll();
    }
    if (event.target == document.getElementById("bio")) {
        closeAll();
    }
    if (event.target == document.getElementById("chem")) {
        closeAll();
    }
    if (event.target == document.getElementById("eng")) {
        closeAll();
    }
    if (event.target == document.getElementById("frans")) {
        closeAll();
    }
    if (event.target == document.getElementById("fys")) {
        closeAll();
    }
    if (event.target == document.getElementById("gesch")) {
        closeAll();
    }
    if (event.target == document.getElementById("ned")) {
        closeAll();
    }
    if (event.target == document.getElementById("wisk")) {
        closeAll();
    }
  if (event.target == document.getElementById("exam")) {
        closeAll();
    }   
}
tabCheck = 0;
function navTab() {
    if (tabCheck == 0) {
        $(".tab").fadeIn(200);
        $(".closeTab").css({
            "display": "block"
        });
        tabCheck++;
    }
    else {
        $(".tab").fadeOut(200);
        $(".closeTab").css({
            "display": "none"
        });
        tabCheck--;
    }
}
function oud() {
    document.getElementById("a12").innerHTML = "Module 1 ^";
    $(".list2").css({
        "display": "block"
    });
     $(".list1").css({
        "display": "none"
    });
}
function nieuw () {
     document.getElementById("a12").innerHTML = "Module 2 ^";
      $(".list1").css({
        "display": "block"
    });
     $(".list2").css({
        "display": "none"
    });
}
function mobile() {
    if (isMobile.any()) {
        $(document).ready(function(){
            $(".popup_content").css({
                "width": "80%",
                "height": "80%",
                "font-size": "20px",
                "margin-top": "10%"
            });
            $(".navList").css({
                "font-size": "20px"
            });
            $(".popupContentInner").css({
                "width": "80%"
            });
            $("#pdf").attr("data", "homeMobile.html");
        });
    };
};
function isLandscape() {
    return (window.orientation === 90 || window.orientation === -90);
}
window.addEventListener("orientationchange", function() {
if (isMobile.any()) {
if (screen.height < screen.width){
    $(".popup_content").css({
        "margin": "3% auto"
    });
    $(".tab").css({
        
    });
    $(".a12").css({

    });
}
else {
    $(".popup_content").css({
        "margin": "12% auto"
    });
}
}
}, false);
