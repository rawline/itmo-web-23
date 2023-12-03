document.addEventListener("DOMContentLoaded", function() {
    var startTime = performance.now();
  
    window.addEventListener("load", function() {
      var endTime = performance.now();
      var loadTime = (endTime - startTime) / 1000;
  
      var loadSpeedElement = document.querySelector(".footer__load-speed");
      if (loadSpeedElement) {
        loadSpeedElement.textContent = "Время загрузки страницы: " + loadTime.toFixed(3) + " с";
      }
    });
  });

  

  document.addEventListener("DOMContentLoaded", function() {
    var currentPage = location.href;

    let links = document.querySelectorAll(".header__link");
    links.forEach(item => {
      if (item.href === currentPage) {
        item.className = "header__link__active";
      }
    });
  });