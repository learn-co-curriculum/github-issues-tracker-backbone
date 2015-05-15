(function() {
  app.SideBar = Backbone.View.extend({

    id: "sidebar",

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
      var user = $("#js-repo-search-input").val()
      var repos = app.Repos.withOwner(user);
      repos.fetch().done(function() {
        var searchResults = new app.SearchResults({collection: repos});
        searchResults.render();
        $("#sidebar").append(searchResults.$el)
      });
    }

  });

})()