var main;


window.addEventListener('DOMContentLoaded',function(){
	main = new b.Main();

	var shows_section = new b.Section({
		el: '#shows',
		title: 'Shows',
		feeds: [new b.Feed({
				title: 'recommended shows',
				url: 'http://showgrid.com/i/recommended/',
				mini_template: '#show_promo_element-mini',
				size: 50,
				overflow: false,
				max: 3
			}),
			new b.Feed({
				title: 'on sale',
				url: 'http://showgrid.com/i/onsale/',
				mini_template: '#show_sale_element-mini',
				size: 34,
				overflow: true,
				max: 5
			}),
			new b.Feed({
				title: 'recently announced',
				url: 'http://showgrid.com/i/recent/',
				mini_template: '#show_element-mini',
				size: 34,
				overflow: true,
				max: 5
			})]
	});

	// var shows_section2 = new b.Section({
	// 	el: '#shows',
	// 	title: 'Shows',
	// 	feeds: [
	// 		new b.Feed({
	// 			title: 'recently announced',
	// 			url: 'http://showgrid.com/i/recent/',
	// 			mini_template: '#show_element-mini',
	// 		}),
	// 		new b.Feed({
	// 			title: 'on sale',
	// 			url: 'http://showgrid.com/i/onsale/',
	// 			mini_template: '#show_element-mini',
	// 		}),
	// 		new b.Feed({
	// 			title: 'recommended shows',
	// 			url: 'http://showgrid.com/i/recommended/',
	// 			mini_template: '#show_promo_element-mini', //c
	// 		})
	// 	]
	// });


	main.add(shows_section);

	//main.add(shows_section2);

	main.render();

			//main.el.edgeResistance = 1;
			main.el.dragger.allowEventDefault= true;
			main.el.dragger.allowNativeTouchScrolling= true;
			//main.el.dragger.throwResistance = 0



	var spoof = $('#minimalui-spoof');



	main.el.on('snap-bot',function(){

		spoof[0].style.display = 'none'
		
	});

	main.el.on('snap-top',function(){
		window.scroll(0,0)
		
		spoof[0].style.display = 'initial'
		
	});

	$(window).on('touchmove',function(e){
		if(spoof[0].style.display =='none'){
			e.preventDefault();
		}
	});

	setTimeout(function(){
		window.scroll(0,0)
	}, 1)
	



	//WHEN DISPLAY IS VISIBLE.
	spoof.on('touchstart',function(e){
		main.el.dragger.startDrag(e.originalEvent)
	}.bind(this));

	
	
	

	$(window).on('touchmove',function(e){
		main.el.dragger.drag(e.originalEvent)
	});
	spoof.on('touchend',function(e){
		main.el.dragger.endDrag(e.originalEvent)
	});
});