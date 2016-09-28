/**
* @package      Website Universitas KH. A. Wahab Hasbullah
* @version      Beta
* @author       Fika Ridaul Maulayya
* @copyright    Copyright © 2015 Pondok Kode - Web Project Development.
* @link         http://pondokkode.com
*/

/* MENU */
    
$(document).ready(function(){
	var $menu_select = $("<select />");	
	$("<option />", {"selected": "selected", "value": "", "text": "Top Menu"}).appendTo($menu_select);
	$menu_select.appendTo("#main-menu");
	$("#main-menu ul li a").each(function(){
		var menu_url = $(this).attr("href");
		var menu_text = $(this).text();
		if ($(this).parents("li").length == 2) { menu_text = '- ' + menu_text; }
		if ($(this).parents("li").length == 3) { menu_text = "-- " + menu_text; }
		if ($(this).parents("li").length > 3) { menu_text = "--- " + menu_text; }
		$("<option />", {"value": menu_url, "text": menu_text}).appendTo($menu_select)
	})

	field_id = "#main-menu select";
	$(field_id).change(function()
	{
	   value = $(this).attr('value');
	   window.location = value;	
	});	
});

$(document).ready(function(){
	var $menu_select2 = $("<select />");	
	$("<option />", {"selected": "selected", "value": "", "text": "Bottom Menu"}).appendTo($menu_select2);
	$menu_select2.appendTo(".pagination");
	$(".pagination ul li a").each(function(){
		var menu_url = $(this).attr("href");
		var menu_text = $(this).text();
		if ($(this).parents("li").length == 2) { menu_text = '- ' + menu_text; }
		if ($(this).parents("li").length == 3) { menu_text = "-- " + menu_text; }
		if ($(this).parents("li").length > 3) { menu_text = "--- " + menu_text; }
		$("<option />", {"value": menu_url, "text": menu_text}).appendTo($menu_select2)
	})

	field_id = ".pagination select";
	$(field_id).change(function()
	{
	   value = $(this).attr('value');
	   window.location = value;	
	});	
});
/* END MENU */

/* FLEXSLIDER */
$(window).load(function(){
	  $('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
		  $('body').removeClass('loading');
		}
	  });
	  
	  $('.flexslider2').flexslider({
		animation: "fade",
		easing: "easeInOutQuad",
		animationSpeed: 500,
		 controlNav: false, 
		start: function(slider){
		  $('body').removeClass('loading');
		}
	  });
	  
	  $('.portfolio-detail').flexslider({
		animation: "slide",
		 controlNav: false, 
		start: function(slider){
		  $('body').removeClass('loading');
		}
	  });
	  
 });   
/* END FLEXSLIDER */