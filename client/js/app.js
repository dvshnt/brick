var app = app || {};

_.templateSettings = {
  interpolate: /\{(.+?)\}/g
};

app.Main = Backbone.view.extend({
  el: '#top',
  initialize: function(){

  },
})