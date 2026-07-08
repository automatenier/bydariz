    jQuery(document).ready(function($){
		$(".sub-menu").addClass("dealer__clear");
		$(".icon__menu").on("click", function(){
			$("body").toggleClass("op__menu");
			$(".click__menu").toggleClass("op__icon");
		});
		$(".sos__agent").on("click", function(){
			$("body").toggleClass("op__contact");
		});
		$(".dealer__pricelist").on("click", function(){
			$(".pricelist").toggleClass("op__pricelist");
			$(".model__rightside").removeClass("op__rightside");
		});
		$(".cl__pricelist").on("click", function(){
			$(".pricelist").removeClass("op__pricelist");
		});
		$(".dealer__agent").on("click", function(){
			$(".model__rightside").addClass("op__rightside");
			$(".pricelist").removeClass("op__pricelist");
		});
		$(".cl__rightmodel").on("click", function(){
			$(".model__rightside").removeClass("op__rightside");
		});
		$(".openshow").on("click", function(){
			$("body").toggleClass("op__showmenu");
		});
		$(".close__popup").on("click", function(){
			$("body").toggleClass("op__popup");
		});
		
		
    });
	 
	function resize() {
        if ( jQuery(window).width() < 983 ) { 
	    	jQuery(".dealer__menu .navmenu .dd, .main__menu .navmenu .dd").addClass("accord").removeClass("desktop"); 
		} else { 
	    	jQuery(".dealer__menu .navmenu .dd, .main__menu .navmenu .dd").removeClass("accord").addClass("desktop");
		}
    }
	
    (console.log = function () {}),
	
    jQuery.noConflict(),
    jQuery("document").ready(function (e) {
            
            e(".navmenu > ul > li:has(ul),.navmenu > ul > li > ul > li:has(ul),.navmenu > ul > li > ul > li > ul > li:has(ul)").addClass("has-sub"),
            e(".navmenu > ul > li > a").on("click", function () {
                var l = e(this).next();
                return (
                    e(".navmenu li").removeClass("active"),
                    e(this).closest("li").addClass("active"),
                    l.is("ul") && l.is(":visible") && (e(this).closest("li").removeClass("active"), l.slideUp("slow")),
                    l.is("ul") && !l.is(":visible") && (e(".navmenu ul ul:visible").slideUp("slow"), l.slideDown("slow")),
                    !l.is("ul")
                );
            }),
            e(".navmenu > ul > li > ul > li > a").on("click", function () {
                var l = e(this).next();
                return (
                    e(".navmenu li ul li").removeClass("active"),
                    e(this).closest("li").addClass("active"),
                    l.is("ul") && l.is(":visible") && (e(this).closest("li").removeClass("active"), l.slideUp("slow")),
                    l.is("ul") && !l.is(":visible") && (e(".navmenu ul ul ul:visible").slideUp("slow"), l.slideDown("slow")),
                    !l.is("ul")
                );
            }),
            e(".navmenu > ul > li > ul > li > ul > li > a").on("click", function () {
                var l = e(this).next();
                return (
                    e(".navmenu li ul li ul li").removeClass("active"),
                    e(this).closest("li").addClass("active"),
                    l.is("ul") && l.is(":visible") && (e(this).closest("li").removeClass("active"), l.slideUp("slow")),
                    l.is("ul") && !l.is(":visible") && (e(".navmenu ul ul ul ul:visible").slideUp("slow"), l.slideDown("slow")),
                    !l.is("ul")
                );
            });
    });
	
    jQuery(document).ready(function (e) {
        e(window).on("resize", resize), resize();
    });
	
	