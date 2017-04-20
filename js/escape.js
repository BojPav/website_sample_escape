$( document ).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function() {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});

var $document = $(document),
	$element = $('.navbar'),
	navbarDefault = 'navbar-default';
	navbarTransparent = 'my-navbar';

	fadeInDown = 'fadeInDown';

$document.scroll(function() {
	if ($document.scrollTop() >= 100) {
		// user scroller more than 100 pixels;	
		$element.addClass(navbarDefault);
		$element.removeClass(navbarTransparent);
		
		$element.addClass(fadeInDown);
	}	else {
		$element.addClass(navbarTransparent);
		$element.removeClass(navbarDefault);
		
		$element.removeClass(fadeInDown);
	}
});