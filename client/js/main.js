var main;
$(window).on('load',function(){
	main = new b.Main();

	var shows_section = new b.Section({
		el: '#shows',
		title: 'Shows',
		feeds: [
			new b.Feed({
				title: 'recently announced',
				url: 'http://showgrid.com/i/recent/',
				mini: '#show_element-mini',
			}),
			new b.Feed({
				title: 'on sale',
				url: 'http://showgrid.com/i/onsale/',
				mini_template: '#show_element-mini',
			}),
			new b.Feed({
				title: 'recommended shows',
				url: 'http://showgrid.com/i/recommended/',
				mini_template: '#show_promo_element-mini', //c
			})
		]
	});

	main.add(shows_section);

	main.render();
});