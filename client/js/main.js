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


	// var e = document.createEvent('UIEvents');
	// e.initUIEvent('scroll',false,true,window);
	window.addEventListener('scroll',function(e){
		console.log(e)
	});
// window.addEventListener('scroll',function(e){
// 	console.log(e)
// });

// document.getElementById('main').dragger.addEventListener('drag',function(e){
// 	//console.log(this.pointerEvent);
// 	document.dispatchEvent(this.pointerEvent);
// }.bind(document.getElementById('main').dragger));
//var e = new document.defaultView.CustomEvent('scroll');



});