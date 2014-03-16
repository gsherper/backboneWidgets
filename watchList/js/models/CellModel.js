var CellModel = Backbone.Model.extend({
  defaults: { 
    symbol: '',
    currentPrice: '',
    openPrice: '',
    priceChange: '',
    percentageChange: ''
  },
  set: function(attributes, options) {
    if (typeof attributes == 'object') {
      if (typeof attributes.currentPrice != 'undefined') {
        try {
          attributes.currentPrice = attributes.currentPrice.toFixed(2);     
        } catch(e) { }
      }
    } else  if (attributes === 'currentPrice') {
      options = options.toFixed(2);
    }

    Backbone.Model.prototype.set.apply(this, arguments);
    if (attributes === 'currentPrice' || typeof attributes.currentPrice != 'undefined') {
      (function($) {
        var currentPrice = $.get('currentPrice');
        var openPrice = $.get('openPrice'); 
        $.set('priceChange', (currentPrice - openPrice).toFixed(2));
        var percentageDiff = (currentPrice - openPrice) / openPrice * 100;
        if (!isNaN(percentageDiff) && isFinite(percentageDiff))
          $.set('percentageChange', percentageDiff.toFixed(2));
      })(this)
    }
  }
});
