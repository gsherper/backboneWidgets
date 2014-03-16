var Cells  = Backbone.View.extend({
  tagName: 'div',
  className: 'pcell',
  id: guidGenerator(),
  initialize: function(options) {
    console.log('init pcell');
    this.collection.bind('add', this.renderNewCell, this);
    this.collection.bind('remove', this.removeCell, this);
    this.collection.bind('reset', this.clear, this);
    this.cellIds = [];
    this.parentContainer = options.parentContainer;
  },
  clear: function() {
    this.$el.html('');
    this.parentContainer.target.html(this.$el);
    this.cellIds = [];
  },
  removeCell: function(model) {
    $('#'+model.get('divId')).remove();
    //need to remove from this.cellIds - todo
  },
  renderNewCell: function() {
    var cellModel = this.collection.get(arguments[0].cid);
    var cell  = new Cell({ model: cellModel });
    this.$el.append(cell.render().el);
    this.cellIds.push(cell);
    if (this.cellIds.length <= 18) {
      cell.bindIt();
    }
  },
  unbindAllCells: function() {
    _.each(this.cellIds, function(v,i) {
      v.unbindIt();
    });
  },
  render: function() {
    //this.$el.html(this.template);
    this.collection.each(function(cellModel){
       var cell  = new Cell({ model: cellModel });
       this.$el.append(cell.render().el);
       this.cellIds.push(cell);
    }, this);
  //  $('#app').html(this.$el);
    return this;
  }
});
