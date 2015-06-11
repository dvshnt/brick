var main;

var scroll = true;

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
				mini_template: '#show_sale_element-mini',
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



	// var e = document.createEvent('UIEvents');
	// e.initUIEvent('scroll',false,true,window);

	scroll = true



	$('body').on('touchmove',function(e){
		if(scroll == false){
			console.log('touch move prevented')
			e.preventDefault();
		}
	});

	window.onscroll = function(){
		// console.log(window.scrollY,$('body')[0].clientHeight)
		if(window.scrollY >= $('body')[0].clientHeight-1){
			scroll = false;
			console.log('DISABLE NATIVE SCROLLING')
			enable();
			// $('.section_content').each(function(i,el){
			// 	el.dragger.enable();
			// })
		}
	}

	$('.section_content').each(function(i,el){
		el.on('snap-top',function(){
			console.log('ENABLE NATIVE SCROLLING')
			disable();
		}.bind(el));
	}.bind(this));



	function disable(){
		$('#sections')[0].dragger.disable();
		$('.section_content').each(function(i,el){
			el.dragger.disable();
		});
		scroll = true;
	}

	function enable(){
		$('#sections')[0].dragger.enable();
		$('.section_content').each(function(i,el){
			el.dragger.enable();
		});
		scroll = false;
	}


	




	$('#main')[0].render();
	
});