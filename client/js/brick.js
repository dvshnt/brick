var b = b || {};
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
/*

Private class for b.Main

*/


/*

Brick Main module initializes everything including the cover.

*/
b.Main = function(opt){

	this.$el = $('#main');
	this.el = this.$el[0];
	this.$sections_wrapper = $($('#sections')[0].innerNode);
	//this.cover = new b._Cover();
	this.sections =  [];

	this.add =  function(section){
		this.sections.push(section);	
	};


	this.render =  function(){
		this.$sections_wrapper.html('');
		this.sections.forEach(function(section,i){
			
			this.$sections_wrapper.append(section.$el);
			
			if(isSafari){

				setTimeout(section.render.bind(section), 0);
			}else{
				section.render();
			}
			
			
			
			
		}.bind(this));

		return this;
	}

	return this;
}







/*

A brick section is a container for Feeds and a Breadcrumb to display feeds

*/
b.Section = function(opt){
	this.template = _.template($('#section-template').html()),
	this.title = opt.title;
	this.feeds = opt.feeds;

	this.$el = $(this.template());
};



b.Section.prototype = {
	render : function(){
		this.$section_content = this.$el.find('._intui_el');
		
		for(var i =0;i<this.feeds.length;i++){
			this.$section_content.append(this.feeds[i].$el);
			this.feeds[i].get();
		}
		
		
		
		return this;
	}
};







/*

A brick Feed is a container for elements and is part of the sections, a Feed has a url to fetch THREE elements from 
the server.

*/
b.Feed = function(opt){
	this.title = opt.title;

	this.url = opt.url;
	this.elements = [];
	this.size = opt.size || 50;

	this.mini_template = _.template($(opt.mini_template).html());
	this.template = _.template($('#feed-template').html());


	this.$el = $(this.template({
		feed_title: this.title
	}));
};



b.Feed.prototype = {
	get: function(){
		$.getJSON(this.url).done(this.parse.bind(this));
	},
	parse: function(data){
		
		this.elements = data;
		this.render();
		setTimeout(this.$el[0].renderall.bind(this.$el[0]), 0);
	},

	render: function(){
		this.$container = this.$el.find('.feed-container ._intui_el');
		this.$container.html('');
		this.elements.forEach(function(item,i){
			if(item.banner != null){
				item.banner = "http://showgrid.com" + item.banner
			}
			item.size = this.size;
			item.bg = i%2 == 0 ? '#304744' : '#1A2625';
			
			if(i>=5) return;
			this.$container.append(this.mini_template(item));

			
		}.bind(this));

		return this;
	}
};