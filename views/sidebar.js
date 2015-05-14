(function() {
  app.SideBar = Backbone.View.extend({

    events: {

    },

    initialize: function() {
      this.render();
    },

    template: function() {
      return $("#js-sidebar-template").html();
    },
    render: function() {
      this.$el.append(this.template())
      return this
    }

  });

})()