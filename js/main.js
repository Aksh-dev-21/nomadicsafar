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

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
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
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });


  // Testimonials carousel
  $(document).ready(function() {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        autoplayTimeout: 3000, // set to 3 seconds for smoother transitions
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    });
  })(jQuery);

//   $(".testimonial-carousel").owlCarousel({
//     autoplay: true,
//     center: true,
//     margin: 24,
//     dots: true,
//     loop: true,
//     nav: false,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       768: {
//         items: 2
//       },
//       992: {
//         items: 3
//       }
//     }
//   });

// })(jQuery);


//   function downloadPDF(event, fileIdentifier) {
//     event.preventDefault(); // Prevent page reload

//     const link = document.createElement('a');

//     if(fileIdentifier == "kashmir"){
//         link.href = 'assets/test.pdf';  // Path to the PDF file
//         link.download = 'kashmir.pdf'; // Optional: default name of the downloaded file
//     }else{
//         link.href = 'assets/test.pdf';  // Path to the PDF file
//         link.download = 'text.pdf'; // Optional: default name of the downloaded file
//     }
//     link.click(); // Trigger download
//   }

function redirectToInstagram() {
  const username = "nomadicsafar"; // Replace with actual Instagram username
  const url = `https://instagram.com/${username}`;
  window.open(url, '_blank');
}


function redirectToFacebook() {
  const username = "nomadicsafar"; // Replace with the actual Facebook username or page ID
  const url = `https://facebook.com/${username}`;
  window.open(url, '_blank');
}

function redirectToWhatsApp() {
  var phoneNumber = '918454088171'; // Replace with the actual phone number
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
window.addEventListener('scroll', function () {
  const textContainer = document.querySelector('.text-container');

  if (isElementInView(textContainer)) {
    const texts = document.querySelectorAll('.text');
    texts.forEach((text, index) => {
      text.style.animation = `slideDown 0.5s ease-out forwards ${0.2 * index}s`;  // Stagger animations
    });
  }
});


// condition dialog
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('termsModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const triggers = document.querySelectorAll('.terms-trigger');

  // Open modal on any trigger click
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('show');
      document.body.classList.add('modal-open');
    });
  });

  // Close modal
  cancelBtn.addEventListener('click', function () {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
  });
});

// More package details
function showDialog(title, imageSrc, description,whytrival, price, departures, choose,ideal, travel,stay,meals,additional,activities, exclusions) {
  document.getElementById('dialog-title').innerText = title;
  document.getElementById('dialog-image').src = imageSrc;

  // Helper to set a <ul> with string or dot-separated items
  function populateList(id, value) {
    const ul = document.getElementById(id);
    ul.innerHTML = '';
    const items = value.split('|');
    items.forEach(item => {
      const trimmed = item.trim();
      if (trimmed) {
        const li = document.createElement('li');
        li.innerText = trimmed;
        ul.appendChild(li);
      }
    });
  }

  // Set all list-based content
  populateList('dialog-description', description);
  populateList('dialog-why-travel', whytrival);
  populateList('dialog-price', price);
  populateList('dialog-departures', departures);
  populateList('dialog-choose', choose);
  populateList('dialog-ideal', ideal);
  populateList('dialog-travel', travel);
  populateList('dialog-stay', stay);
  populateList('dialog-meals', meals);
  populateList('dialog-additional', additional);
  populateList('dialog-activities', activities);
  populateList('dialog-exclusions', exclusions);

  // Show dialog
  document.getElementById('infoDialog').classList.add('show');
  document.body.classList.add('modal-open');

  // Scroll to top
  setTimeout(() => {
    const scrollArea = document.getElementById('dialog-scrollable');
    if (scrollArea) scrollArea.scrollTop = 0;
  }, 0);
}



function closeDialog() {
  document.getElementById('infoDialog').classList.remove('show');
  document.body.classList.remove('modal-open'); // ✅ Re-enable scroll
}

// Nav click issue fixed
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' from all links
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Add 'active' to the clicked link
    this.classList.add('active');
  });
});