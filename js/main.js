(function($){
	/*
	* Method: ready
	* Param: void
	* Summary: Wait until jquery fires event doc ready then attach click listener and run loop method
	*/
	$(document).ready(function(){
		$(".a").css("display","none");
		$(".f").css("display","none");
		$(".c").css("display","none");
		$(document).on("click",".floatingBtn",function(){
			var $this = $(this);
			$("#splash").css("display","none");
			$("#page-content").css("display","block");
			console.log("click");
			return false;
		});
		animMod(1500);
	});
	/*
	* Method: animMod
	* Param: int
	* Summary: Takes in ms int and fades out based on value then switches image src call as well calling loop method
	*/
	function animMod(time){
		$(".animBlock").fadeOut(time,function(){
			var $this = $(this);
			$this.attr("src","../img/LogoRed.png");
			$this.fadeIn(500);
			animDef(time);
		});
	}
	/*
	* Method animDef
	* Param: int
	* Summary: Takes in ms int and fades out based on value then switches image src call as well calling loop method
	*/
	function animDef(time){
		$(".animBlock").fadeOut(time,function(){
			var $this = $(this);
			$this.attr("src","../img/LogoGlass.png");
			$this.fadeIn(500);
			animMod(time);
		});
	}
	
	return{};
})(jQuery);