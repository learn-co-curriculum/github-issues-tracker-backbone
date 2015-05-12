var DocumentRow = Backbone.View.extend({

  events: {
    
  },

  initialize: function() {
    // this.listenTo(this.model, "change", this.render);
    this.render();
  },

  template: function() {
    return $("#js-sidebar-template").html();
  }
  ,
  render: function() {
    this.$el.append(this.template()); 
  }

});