var app = {

	switchState: false,

	/* ------------------------------------------------------- */

	init: function() {

		app.loadProducts();

	},

	/* ------------------------------------------------------- */

	hideItems: function() {

		let $items = $('.flex-row'); 
		($items.hasClass('hide')) ? $items.removeClass('hide') : $items.addClass('hide');

	},

	/* ------------------------------------------------------- */

	sideBarColor: function() {

		let $aside = $('aside'); 
		($aside.hasClass('active')) ? $aside.removeClass('active') : $aside.addClass('active');

	},

	/* ------------------------------------------------------- */

	addText: function() {

		let $aside = $('aside'); 
		($aside.children('p').length > 0) ? $aside.empty() : $aside.append('<p>Hola Mundo</p>');
	
	},

	/* ------------------------------------------------------- */

	menuProductos: function(num) {
		
 		var $menu = $('.menu ul');

 		$menu.empty();

		(app.switchState == true) ? app.jsArray() : app.phpArray();

 		($menu.hasClass('active') || num == 0)? $menu.removeClass('active'): $menu.addClass('active');
 		
	},

	/* ------------------------------------------------------- */

	phpArray: function() {
		
		$.get("./app.php", function(data){ app.createMenu(JSON.parse(data));});

	},

	/* ------------------------------------------------------- */

	jsArray: function() {

		let JSON = 
		    {
		       submenu: 
		          [
		             {titulo: 'Ropa', url: '/ropa.html'},
		             {titulo: 'Electronica', url: '/electronica.html'},
		             {titulo: 'Higiene', url: '/higiene.html'},
		             {titulo: 'Alimentos', url: '/alimentos.html'},
		             {titulo: 'Otros', url: '/otros.html'}
		          ]
		    };

		app.createMenu(JSON.submenu);

	},

	/* ------------------------------------------------------- */

	createMenu: function(json) {

		let menuItems = '';

		$(json).each(function(index,item){
			menuItems += `<li><a href="${item.url}">${item.titulo}</a></li>`;			
		});


		$('.menu ul').append(menuItems);

	},

	/* ------------------------------------------------------- */

	loadProducts:function() {
	  	
		let $menuItems = $('.menu ul');
	  	app.switchState = $(this).is(':checked');
	  	app.menuProductos(0);

	}

};


/* ------------------------------------------------------- */


app.init();

$('.inicio').on('click', app.hideItems);
$('.nosotros').on('click', app.addText);
$('#togBtn').on('click', app.loadProducts);
$('.productos').on('click', app.menuProductos);
$('.compras').mouseover(app.sideBarColor).mouseout(app.sideBarColor);


