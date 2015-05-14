(function() {
  app.SideBar = Backbone.View.extend({

    events: {
      "submit" : "search"
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
    },
    search: function(e) {
      e.preventDefault();
      var repos = app.Repos.withOwner("blake41");
      repos.fetch();
      this.repos = repos;
    }

  });

})()