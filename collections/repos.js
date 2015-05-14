(function () {
  'use strict';

  var app = window.app;
  var Backbone = window.Backbone;

  // var Repos = app.Repos || {};

  app.Repos = Backbone.Collection.extend(
    // instance methods
    {
      model: app.Repo,

    },
    // class methods
    {
      withOwner: function (login) {
        var repos = new app.Repos();
        repos.url = app.apiRoot + '/users/' + login + '/repos';
        return repos;
      }
    }
  );
})();