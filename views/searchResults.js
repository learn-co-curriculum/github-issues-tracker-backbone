(function() {
  app.SearchResults = Backbone.View.extend({

    events: {
    },

    initialize: function() {
      this.render();
    },

    template: function() {
      var template = _.template($("#searchResultTemplate").html());
      return template({repos: this.collection});
    },
    render: function() {
      this.$el.append(this.template())
      return this
    },

  });

})()