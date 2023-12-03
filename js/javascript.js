function openNav() {
    document.getElementById("nav-links").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("nav-action").style.display = "none";
    document.getElementById("nav-logo").style.textAlign = "center";
    document.getElementById("nav-logo").style.marginRight = "50px";
  }

function closeNav() {
    document.getElementById("nav-links").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("nav-action").style.display = "block";
    document.getElementById("nav-logo").style.textAlign = "block";
  }