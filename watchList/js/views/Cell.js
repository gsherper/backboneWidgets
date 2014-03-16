var Cell  = Backbone.View.extend({
  tagName: 'div',
  className: 'ccell',
  id: guidGenerator,
  template: _.template('<div class="symbol"><%= symbol %></div>'+
                       '<div class="currentPrice">$<%= currentPrice %></div>'+
                       '<div class="changeBlock">'+
                         '<div class="priceChange"><%= priceChange %></div>'+
                         '<div class="percentageChange"><%= percentageChange %>%</div>'+
                       '</div>'),
  initialize: function() {
    //this.model.bind('change:percentageChange', this.checkVis, this);
     this.model.set('divId', this.el.id);
  },
  bindIt: function() {  
    this.model.bind('change:percentageChange', this.render, this);
  },
  unbindIt: function() {
    this.model.unbind('change:percentageChange');
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    if (this.model.get('percentageChange') > 0) {
      $('.changeBlock', this.$el).removeClass('red').addClass('green');
    } else {
      $('.changeBlock', this.$el).removeClass('green').addClass('red');
    }
    return this;
  },
  checkVis: function() {
    if (!this.cell) {
      this.cell = $(this.$el[0]);
    }
    var elemTop = this.cell.offset().top;
    var elemBottom = elemTop + this.cell.height();
            if ((elemBottom <= $('#app').height()) &&  (elemTop  >= 0) ) {
    this.render();
  } else {
  }
  }
});
