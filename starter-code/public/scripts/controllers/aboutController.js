'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  }
  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:


  module.aboutController = aboutController;
})(window);
