var CellsContainer  = Backbone.View.extend({
  tagName: 'div',
  className: 'cellsContainer',
  id: guidGenerator,
  initialize: function(options) {
    console.log('init market monitor');
    this.target = $(options.target);
    this.collection = new CellCollection();
    this.render();
    var context = this;
    this.target.scroll(function() { context.detectScroll(); });
  },
  detectScroll: function() {
    var start = this.target.scrollTop() / 29;
    var range = start + 20; 
    if (range > this.cellsCollectionView.cellIds.length) {
      var diff = range - this.cellsCollectionView.cellIds.length;
      range = this.cellsCollectionView.cellIds.length;
      start -= diff;
    }
    var viewable = this.cellsCollectionView.cellIds.slice(start, range);
    this.cellsCollectionView.unbindAllCells();
    _.each(viewable, function(v, i) {
      v.bindIt();
    });
  },
  render: function() {
    this.cellsCollectionView = new Cells({collection: this.collection, parentContainer: this});
    this.$el.html(this.cellsCollectionView.render().el);
    this.target.html(this.$el);
    return this;
  },
  add: function(model) {
    this.collection.add(model);
  }
});
