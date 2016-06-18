	$.fn.setPointer = function(iframe_id,content_id,border_detail,font_size,border_darius,padding,color,number){
		var pointer1 = iframe_id + "_pointer";
		var pointer2 = pointer1.substring(1);
		this.css("position","relative");
		if(pointer1.substring(0,1)=="#"){
			this.append("<div id='"+ pointer2 +"'>"+number+"</div>");
		}
		else this.append("<div class='"+pointer2+"'>"+number+"</div>");
		$(pointer1).css({
			"border": border_detail,
			"position":"absolute",
			"font-size": font_size,
			"border-radius": border_darius,
			"padding": padding,
			"font-weight":"bold",
			"color": color,
		});
		$(iframe_id).load(function() {
			var content = $(iframe_id).contents().find(content_id).offset();
			var contentheight = $(iframe_id).contents().find(content_id).height();
			var contentwidth = $(iframe_id).contents().find(content_id).width();
			$(pointer1).css({
				"width": contentwidth + 5,
				"height": contentheight +5,
				"top": content.top,
				"left": content.left,
			});
		});
		$(window).resize(function(){
			var content = $(iframe_id).contents().find(content_id).offset();
			var contentheight = $(iframe_id).contents().find(content_id).height();
			var contentwidth = $(iframe_id).contents().find(content_id).width();
			$(pointer1).css({
				"width": contentwidth +5,
				"height":contentheight +5,
				"top": content.top,
				"left": content.left,
		});
		});
	}