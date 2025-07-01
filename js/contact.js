emailjs.init("****");
function restrictInput(a) {
  a.addEventListener("input", function () {
    a.value = a.value.replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "");
  });
}

$('#phone').on('input', function () {
    $(this).val($(this).val().replace(/\D/g, ''));
});

var nameInput = document.getElementById("name"),
  messageInput = document.getElementById("message");
  restrictInput(nameInput), restrictInput(messageInput);

const form = document.getElementById("contact");
form.addEventListener("submit", function (event) {
  sendEmail(event);
});


function sendEmail(event) {
  event.preventDefault();
  const response = grecaptcha.getResponse();
  if (response.length === 0) {
    const captchaMSG = `<p class="captcha-msg">*Please validate you are not a robot</p>`
    $(".g-recaptcha").after(captchaMSG)
    return false; 
  }
  const a = document.getElementById("contact");
  $("form").after(`
    <div class="prevent-user"></div>
    `),
    $("#submit").attr("disabled", !0),
    $("#submit").val("Sending.."),
    $("#submit").css("background", "#e56d13"),
    $(".captcha-msg").remove();
    emailjs.sendForm("***", "***", a).then(
      function (response) {
           $("#submit").attr("disabled", !1),
           $("#submit").val("Sent!"),
           $("#submit").css("background", "#2e9f0d"),
           $("#submit").css("opacity", "1");
           var msg = `<p class="success-msg">*An email has been successfully sent! We will contact you as soon as possible!</p>`
           $("form").after(msg)
           setTimeout(function () {
             $(".prevent-user").remove(),
               $("#submit").val("Submit"),
               $("#submit").css("background", "transparent"),
               $("#submit").css("opacity", "1"),
               grecaptcha.reset();
               a.reset();
           }, 3000);
      },
      function (error) {
        $("#submit").attr("disabled", !1),
        $("#submit").val("Erorr!"),
        $("#submit").css("background", "#ca1717"),
        $("#submit").css("opacity", "1"),
        setTimeout(function () {
          $(".prevent-user").remove(),
            $("#submit").val("Submit"),
            $("#submit").css("background", "transparent"),
            $("#submit").css("opacity", "1");
                    grecaptcha.reset();
        }, 3000);
         
      }
    );
}


  var onloadCallback = function() {
        grecaptcha.render('html_element', {
          'sitekey' : '****'
        });
      };