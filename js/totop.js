$(window).scroll(function(){$(window).scrollTop()>.5*$(window).height()?$("#rocket").addClass("show"):$("#rocket").removeClass("show")}),$("#rocket").click(function(){return $("#rocket").addClass("launch"),$("html, body").animate({scrollTop:0},1e3,function(){$("#rocket").removeClass("show launch")}),!1}),$("#homelogo").click(function(){return $("html, body").animate({scrollTop:$(window).height()},1e3,null),!1});