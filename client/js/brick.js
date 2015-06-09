var b = b || {};
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

/*

Private class for b.Main

*/


/*

Brick Main module initializes everything including the cover.

*/
b.Main = function(opt){
	this.$el = $('#main');
	this.$sections_wrapper = $('#sections');
	//this.cover = new b._Cover();
	this.sections =  [];

	this.add =  function(section){
		this.sections.push(section);	
	};


	this.render =  function(){
		this.$sections_wrapper.html('');
		this.sections.forEach(function(section,i){

			this.$sections_wrapper.append(section.$el);
			section.render();
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

	this.$el = $(this.template({
		section_title: this.title,
	}));

	this.$feed_content = this.$el.find('.section_content');

	
};


b.Section.prototype = {
	render : function(){
		console.log(this.$el)
		for(var i =0;i<this.feeds.length;i++){
			
			$(this.$feed_content[0].children[0]).append(this.feeds[i].$el);


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


	this.mini_template = _.template($(opt.mini_template).html());
	this.template = _.template($('#feed-template').html());


	this.$el = $(this.template());
	this.$minis = this.$el.find('.mini-element-wrapper');
	
	console.log(this.$el)

	$.getJSON(this.url).done(this.parse.bind(this));
};



b.Feed.prototype = {

	parse: function(data){
		console.log(data);
		this.elements = data;
		this.render();
	},

	render: function(){
		this.$el.find('.mini-element-wrapper').html('');
		this.elements.forEach(function(item,i){
			if(item.banner != null){
				item.banner = "http://showgrid.com" + item.banner
			}
			console.log(this.mini_template(item))
			if(i>=3) return;
			this.$minis[i].innerHTML = this.mini_template(item);
		}.bind(this));

		return this;
	}
};