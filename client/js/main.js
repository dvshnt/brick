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
				size: 100,
				overflow: true,
				max: 5
			}),
			new b.Feed({
				title: 'recently announced',
				url: 'http://showgrid.com/i/recent/',
				mini_template: '#show_element-mini',
				size: 100,
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


	_toTop();	

	_app();
	// if(window.navigator.standalone==true){
	// 	_app();
	// }else{
	// 	_browser();
	// }


	function _toTop(){
		window.scroll(0,0)
		setTimeout(function(){ window.scroll(0,0) },50)		
	}


	function _app(){
		var spoof = $('#minimalui-spoof');
		spoof[0].style.display = 'none'
	}


	function _browser(){
		var spoof = $('#minimalui-spoof');
		main.el.dragger.allowEventDefault= true;
		main.el.dragger.allowNativeTouchScrolling= true;




		main.el.on('snap-bot',function(){

			spoof[0].style.display = 'none'
			
		});

		main.el.on('snap-top',function(){
			//console.log('SNAP TOP')
			spoof[0].style.display = 'initial'
			window.scrollTo(0,0)

			//console.log(window.scrollY)
			// TweenLite.to($(window),0.5,{
			// 	scrollTo:{
			// 		y:0
			// 	}
			// });
			
			
		});

		// $(window).on('touchmove',function(e){
		// 	if(spoof[0].style.display =='none'){
		// 		e.preventDefault();
		// 	}
		// });

		

		
		$(window).on('scroll',function(e){
			console.log(window.scrollY)
			if(window.scrollY>=10){
				main.el.slide(main.el.slides[1],1000);
				spoof[0].style.display = 'none'
			}
		})
		
		// main.el.v.throwvar = 10000
		// //WHEN DISPLAY IS VISIBLE.
		spoof.on('touchstart',function(e){
			window.scroll(0,0)
			main.el.dragger.enableTween(0.2);
			main.el.dragger.startDrag(e.originalEvent)
		}.bind(this));

		spoof.on('touchend',function(e){
			main.el.dragger.disableTween();
			main.el.dragger.endDrag(e.originalEvent)
		});
	}


	


});