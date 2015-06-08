var app = app || {};

_.templateSettings = {
  interpolate: /\{(.+?)\}/g
};






var app = app || {};


app.Main = Backbone.View.extend({
	el:'#main',
	initialize: function(){

	},
	render: function(){

	}
});





var SubSection = Backbone.View.extend({
	initialize: function(){

	}
});


var Event = Backbone.Model.extend({

});





var Cover = Backbone.View.extend({
	el: '#cover',
	initialize: function(){

	},
	render: function(){

	}
});




var Section = Backbone.View.extend({
	
	initialize: function(){
		this.sections.forEach(function(section,i){
			
		})
	},
	render: function(){
		this.el.append(new app.)
	}
});




var Element = Backbone.View.extend({
	initialize: function(){

	}
})



app.Show = Backbone.Model.extend({

});