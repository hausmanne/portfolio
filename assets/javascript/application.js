function googleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-159516284-2');
}

function stickyNav() {
    var yourNavigation = $(".navbar");
    stickyDiv = "sticky";
    yourHeader = $('#home').height();

    $(window).scroll(function() {
    if( $(this).scrollTop() > yourHeader ) {
        yourNavigation.addClass(stickyDiv);
    } else {
        yourNavigation.removeClass(stickyDiv);
    }
    });
}

function respNavbar() {
    var x = document.getElementById("navbar__links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function noBurgerMenu() {
    document.getElementsByClassName("burgerMenu").style.display = "none";
}

function xburgerMenu(x) {
    x.classList.toggle("change");
  }