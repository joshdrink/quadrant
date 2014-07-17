// JoshDrink ---------------------------------------------------------

  // Quadrant Responsive Grid ----------------------------------------

  // Authored by: Josh Beveridge
  // 2014/07

  // Table of Contents -----------------------------------------------

    // Layouts

// **REQUIRES JQUERY** -----------------------------------------------

// Layouts -----------------------------------------------------------

  // Equalize --------------------------------------------------------

    function rowHeight(target) {

      var findHeight = $(target).height();
      var findPadding = parseInt(jQuery(target).css('padding-left'), 10);

      $(target).parent('.force-height').css('height', findHeight + (findPadding*2)+'px');

    }

    function equalize() {

      $('.find-height').each(function() {
        rowHeight(this);
      });

    }

    $(function() {
      setTimeout(equalize, 25);
      $(window).resize(equalize);
    });

  // Square ----------------------------------------------------------

    function square(target) {

      var boxwidth = $(target).width();
      var findPadding = parseInt(jQuery(target).css('padding-left'), 10);

      if(boxwidth > $(target).height()) {
        $(target).css('height', boxwidth + findPadding+'px');
      }

      if(boxwidth < $(target).height()) {
        $(target).css('height', boxwidth + findPadding+'px');
      }

    }

    function squareMe() {

      $('.col-square').each(function() {
        square(this);
      });

    }

    $(function() {
      setTimeout(squareMe, 20);
      $(window).resize(squareMe);
    });
