$(".element").hover(function(){
	secondClass="."+this.className.split(" ")[1];
	if(this.id!="empty"){$(".element").addClass("opa");
	$(secondClass).removeClass("opa");
	$(secondClass).addClass("onTop")
	}
	},function(){
		$(".element").removeClass("opa");
		$(secondClass).removeClass("onTop")});
