$("html").css(
  "background",
  "        --black: rgba(255, 255, 255, 1); --light--drop-menu-layer-bg: rgba(27, 27, 27, 1); --light--counter-bg: rgba(23, 24, 28, 1); --light--heading-back-text: rgba(37, 37, 37, 1); --light--paragraph-black: rgba(197, 207, 207, 1); --light--heading-black: rgba(224, 238, 238, 1); --light--body-bg: rgba(18, 19, 21, 1);"
);

$(document).on("click", ".menu-toggle-wrapper", function() {
    $(this).toggleClass("toggled");

    if(!$(this).hasClass("toggled")) {
        setTimeout(() => {
            $(".drop-menu").css("display","none")
        },1200)
    }
})


$(document).on("click", ".menu-toggle-wrapper", function() {
  $(this).toggleClass("overflow");
  if($(this).hasClass("overflow")) {
    $("html").css("overflow", "hidden")
  } else{
    $("html").css("overflow", "visible")

  }

  

})


if (window.screen.width <= 767) {

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.fade-up').each(function() {
        var elementTop = $(this).offset().top;
        var windowHeight = $(window).height();
  
        if (scrollTop + windowHeight > elementTop + 100) {
            $(this).addClass('visible');
  
        } else {
            $(this).removeClass('visible');
        }
    });
    
  });
}






i18next
  .use(i18nextHttpBackend)
.init({
  fallbackLng: 'en',
  debug: false,
  backend: {
    loadPath: '/locales/{{lng}}/translation.json' 
  }
}, function(err, t) {
  updateContent();
});

function updateContent() {
  document.documentElement.lang = i18next.language;

  const rtl = i18next.language === "ar";

  document.querySelectorAll('.rtl').forEach(elem => {
    elem.setAttribute("dir", rtl ? "rtl" : "ltr");
  });

document.querySelectorAll('.for--links').forEach(elem => {
  elem.classList.toggle("arabic-text", rtl);
});

const arabicAbout = document.querySelector("#arabic-about")
arabicAbout?.classList.toggle("arabic-about", rtl)

const titleWrapperAr = document.querySelector(".title-wrapper-ar")

titleWrapperAr?.classList.toggle("arabic-work-plan-margin", rtl)


    

  // Update translated text
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    elem.innerHTML = i18next.t(key);


  });

  document.querySelectorAll(".who-are-we-text").forEach(el => {
  el.classList.toggle("arabic-who-are-we", rtl);
      $(".title-wrapper").eq(0).toggleClass("arabic-title-wrapper-el-1", rtl)
      $(".title-wrapper").eq(1).toggleClass("arabic-title-wrapper-el-2", rtl)
  })

    document.querySelectorAll(".about-desc").forEach(el => {
      el?.classList.toggle("arabic-about-desc", rtl)
    })

    document.querySelectorAll(".about-title").forEach(el => {
      el.classList.toggle("arabic-text-height", rtl)
    }) 

    document.querySelectorAll(".work-content-wrapper").forEach(el => {
  el.classList.toggle("arabic-work-container", rtl);
  })

      document.querySelectorAll(".have--margin").forEach(el => {
  el.classList.toggle("arabic-buttons-wrapper-have--margin", rtl);
  })

  if(rtl) {
    $(".works-collection-item:nth-child(2n)").css("direction", "ltr")
    $(".right-to-left-arabic").css({
      direction: "rtl",
      marginRight: "auto",
      marginLeft: "unset",

    })
  } else {
        $(".works-collection-item:nth-child(2n)").css("direction", "rtl")
     $(".right-to-left-arabic").css({
      direction: "ltr",
      marginRight: "unset",
      marginLeft: "auto",

    })
  }

  const navBottom = document.querySelector(".nav-bottom");

  navBottom?.classList.toggle("arabic-nav-bottom",rtl)

  document.querySelectorAll(".loop-text").forEach(el => {
    el.classList.toggle("arabic-loop-text", rtl)
  })

    document.querySelectorAll(".loop-wrapper").forEach(el => {
    el.classList.toggle("arabic-loop-wrapper", rtl)
  })
      document.querySelectorAll(".text-line-block").forEach(el => {
    el.classList.toggle("arabic-text-line-block", rtl)
  })
        document.querySelectorAll(".drop-menu-links-wrapper").forEach(el => {
    el.classList.toggle("arabic-drop-menu-links-wrapper", rtl)
  })

  document.querySelectorAll(".about-details, .services-details").forEach(el => {
    el?.classList.toggle("arabic-text-align-right",rtl)
  })
  

  const partnerLove = document.querySelector(".partner-love");

  partnerLove?.classList.toggle("arabic-partner-love", rtl);

  const partnerLoveDesc = document.querySelector(".partner-love-desc")
  partnerLoveDesc?.classList.toggle("arabic-partner-love-desc", rtl)
  
  const worksSlogan = document.querySelector(".works-page-slogan");
  worksSlogan?.classList.toggle("arabic-works-page-slogan", rtl);

  document.querySelectorAll(".project-name")?.forEach(el => {
    el.classList.toggle("arabic-project-name",rtl)
  })

  document.querySelectorAll(".works-line-page")?.forEach(el => {
    el.classList.toggle("arabic-first-line", rtl);
  })

  document.querySelectorAll(".head-arabic")?.forEach(el => {
    el.classList.toggle("arabic-heading-text-animation-wrapper",rtl)
  })

   document.querySelector(".our-team")?.classList.toggle("arabic-our-team",rtl);
   document.querySelectorAll(".service-title").forEach(el => {
    el?.classList.toggle("arabic-service-title",rtl)
   })
   
const placeholders = {
  en: {
    "الإسم": "Your name",
    "البريد الإلكتروني": "Your email address",
    "رقم الهاتف": "Your phone number",
    "اكتب رسالتك...": "Write your message...",
  },
  ar: {
    "Your name": "الإسم",
    "Your email address": "البريد الإلكتروني",
    "Your phone number": "رقم الهاتف",
    "Write your message...": "اكتب رسالتك..."
  }
};

document.querySelectorAll(".contact-form-input").forEach(el => {
  const currentPlaceholder = el.getAttribute("placeholder");
  const newPlaceholder = rtl ? placeholders.ar[currentPlaceholder] : placeholders.en[currentPlaceholder];
  if (newPlaceholder) {
    el.setAttribute("placeholder", newPlaceholder);
  }
});

document.getElementById("submit")?.setAttribute("value", `${rtl ? "إرسال" : "Submit"}`)
 
}



function changeLang(lng) {
i18next.changeLanguage(lng, updateContent);

localStorage.setItem("lang", lng)
}




$(document).on("change", "#language-toggle", function() {
if ($(this).is(":checked")) {
    changeLang("ar")
  } else {
        changeLang("en")

  }})


  window.addEventListener("DOMContentLoaded", function() {
    const lang = localStorage.getItem("lang")
    changeLang(lang)

    if(lang === "ar") {
      $("#language-toggle").prop("checked", "checked")
    }
  })
