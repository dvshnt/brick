(function(){
	app.cover = new Cover({

	})
	app.shows = new Section({
		el: '#shows',
		sub_sections: [
			new SubSection({
				title: 'recently announced',
				url: 'http://showgrid.com/i/recat/',
			}),
			new Subsection({
				title: 'on sale',
				url: 'http://showgird.com/i/onsale/',
			}),
			new SubSection({
				title: 'recommended shows',
				url: 'http://recommended.com/i/recommended',
			})
		]
	});
})(app);