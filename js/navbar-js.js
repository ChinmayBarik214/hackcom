window.onload = function() {
    var menuTog = document.getElementById('menuToggle');
    var navBar = document.getElementById('navBar');
  
    if (menuTog !== null) {
      menuTog.addEventListener('click', togNav);
    }
  
    if (navBar !== null) {
      window.addEventListener('scroll', fixNav);
    }
  };
  
  function fixNav() {
    var head = document.getElementById('head');
    var pushBack = document.getElementById('pushBack');
    var headBot;
    
    if (head !== null) {
      headBot = head.getBoundingClientRect().bottom;
    }
  
    if (pushBack !== null) {
      if (headBot > 0) {
        navBar.style.position = 'static';
        pushBack.style.height = '0em';
      } else {
        navBar.style.position = 'fixed';
        pushBack.style.height = '3em';
      }
    }
  }
  
  function togNav() {
    var navMenu = document.getElementById('menu');
  
    if (navMenu !== null) {
      if (navMenu.className === "showing") {
        navMenu.className = "";
      } else {
        navMenu.className = "showing";
      }
    }
  }