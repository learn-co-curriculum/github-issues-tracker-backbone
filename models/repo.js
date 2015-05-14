(function () {
  'use strict';

  var _ = window._;
  var app = window.app;
  var Backbone = window.Backbone;

  // var Repo = app.Repo = app.Repo || {};

  app.Repo = Backbone.Model.extend({
    initialize: function () {
      
    }

    // url: function () {
    //   return app.apiRoot + '/repos/' + this.get('full_name');
    // },

    // urlRoot: function () {
    //   return app.apiRoot + '/users/' + this.get('owner').login + '/repos';
    // },

    // toBoard: function () {
    //   var attrs = _.pick(this.attributes, 'id', 'name');
    //   attrs.owner = {login: this.get('owner').login};
    //   return attrs;
    // }
  });
})();
