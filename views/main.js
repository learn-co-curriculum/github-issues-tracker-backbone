

(function() {
  var Backbone = window.Backbone;
  var $ = window.jQuery;
  var _ = window._;
  var app = window.app;
  
  app.MainView = Backbone.View.extend({

    events: {

    },

    initialize: function() {
    },
    render: function() {
      var sidebar = this.sidebar = new app.SideBar();
      this.$el.append(sidebar.$el)
      $("#app-container").append(this.$el)
      return this
    }

  });

})()