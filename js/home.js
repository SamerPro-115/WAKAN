



if (window.innerWidth > 768) {
    const navbar = $(".navbar");
    const bottomNavbar = $(".nav-bottom");
    const footer = $(".footer-bottom"); 
    
    const scrollHeightThreshold = 150; 
    
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      const footerTop = footer.offset().top; 
      const viewportHeight = window.innerHeight; 
  
      if (currentScrollPos > scrollHeightThreshold && currentScrollPos + viewportHeight < footerTop) {
        navbar.fadeOut(500);
        bottomNavbar.fadeIn(500).css({opacity: "1", display: "flex"});

        

      } else {
        navbar.fadeIn(500);
        bottomNavbar.fadeOut(500);
      }
  
      if (currentScrollPos + viewportHeight >= footerTop) {
        bottomNavbar.fadeOut(500);
      }

      
    
    
    };


  
    



    $(document).on("click", ".menu-toggle-wrapper", function() {
      $(this).toggleClass("clicked")
      const scrollPosition = window.scrollY;
      if($(this).hasClass("clicked")) {
        "bottom","83%"

        bottomNavbar.css({
          transition: "1s",
          bottom:"83%"
        })
  
      } else {
        bottomNavbar.css({
          bottom:"0%",
        })

        setTimeout(() => {
          bottomNavbar.css({
            transition:"unset",
          })
        },1000)
      }
     
  
    })

      
  }
  





document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const buttons = document.querySelectorAll(".nav-btn");
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute("id");
      }
    });
  
    buttons.forEach((button) => {
      button.classList.remove("active");
      if (button.dataset.target === currentSection) {
        button.classList.add("active");
      }
    });
  });
  
  // Smooth scrolling on button click
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
  
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  