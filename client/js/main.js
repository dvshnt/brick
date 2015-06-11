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
				mini_template: '#show_element-mini',
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

	var shows_section2 = new b.Section({
		el: '#shows',
		title: 'Shows',
		feeds: [
			new b.Feed({
				title: 'recently announced',
				url: 'http://showgrid.com/i/recent/',
				mini_template: '#show_element-mini',
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
	main.add(shows_section2);
	
	main.render();
	console.log($('.section_content'))
	$('.section_content').each(function(i,el){
		console.log(el)
		el.on('drag-overflow-up',function(){
			console.log('OVERFLOW UP')
			$('body')[0].style.overflowY = 'visible'
		}.bind(el));

		el.on('drag-start',function(){
			$('body')[0].style.overflowY = 'hidden'
		}.bind(el));
	})
	 $('#main')[0].render();
	//setTimeout(main.render.bind(main), 10);
});