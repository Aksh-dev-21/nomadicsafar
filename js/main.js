(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


  function downloadPDF(event, fileIdentifier) {
    event.preventDefault(); // Prevent page reload
    
    const link = document.createElement('a');

    if(fileIdentifier == "kashmir"){
        link.href = 'assets/test.pdf';  // Path to the PDF file
        link.download = 'kashmir.pdf'; // Optional: default name of the downloaded file
    }else{
        link.href = 'assets/test.pdf';  // Path to the PDF file
        link.download = 'text.pdf'; // Optional: default name of the downloaded file
    }
    link.click(); // Trigger download
  }

  function redirectToInstagram() {
    window.open("https://www.instagram.com", "_blank"); // Opens Instagram in a new tab
  }


  function redirectToFacebook() {
    window.open("https://www.facebook.com", "_blank"); // Opens facebook in a new tab
  }

  function redirectToWhatsApp() {
    var phoneNumber = '9768575182'; // Replace with the actual phone number
    var message = 'Hello, I would like to get more information.'; // Optional: Pre-filled message
    
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    window.open(url, '_blank'); // Opens facebook in a new tab
  }

  /*New code*/

  // Function to check if the element is in the viewport
  function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Add event listener to trigger animation on scroll
  window.addEventListener('scroll', function() {
    const textContainer = document.querySelector('.text-container');
    
    if (isElementInView(textContainer)) {
      const texts = document.querySelectorAll('.text');
      texts.forEach((text, index) => {
        text.style.animation = `slideDown 0.5s ease-out forwards ${0.2 * index}s`;  // Stagger animations
      });
    }
  });

  