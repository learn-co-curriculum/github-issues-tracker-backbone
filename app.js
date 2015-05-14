(function () {
  'use strict';

  var $ = window.jQuery;
  var Backbone = window.Backbone;

  // Define the global namespace for the app.
  var app = window.app = {

    // Define the base for GitHub's API endpoints.
    apiRoot: 'https://api.github.com',

    // Set up initial view, load initial data, etc...
    init: function () {
      this.mainView = new app.MainView();
      this.mainView.render();
      // app.router = new app.Router({
      //   mainView: this.mainView
      // });
      Backbone.history.start();
    }
  };

  // Run the `init` function once the DOM is ready, unless this is run from the
  // test runner.
})();
