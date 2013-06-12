
(function($){
	$.fn.kscroller = function(settings){
		var plugin = new $.kscroller(this, settings);
		$(this).data('kscroller', plugin);
	}

	$.kscroller = function(el, options){
		if(el === null || el === undefined || el.length === 0){
			console.error("Unable to initialize plugin for undefined elements")
			return;
		}
		this.settings = $.extend(this.sttings, options||{})
	}
	$.kscroller.fn = $.kscroller.prototype;
	$.kscroller.fn.extend = $.kscroller.extend  = $.extend;
	$.kscroller.fn.extend({
		init: function(el, settings){
			var _self = this, thumb ="<div class='thumb'></div>" ,
				track ="<div class='track'></div>",
				button="<div class='button'></div>"
			$(el).each(function(item){
				_self.registerEvents(thumb, track, button);
			});
		},
		registerEvents:function(thumb, track, button){
			$(track).bind('mouseup',this.mouseUp)
				.bind('mousedown',this.mouseDown);
			$(thumb).bind('dragstart',this.dragStart)
				.bind('dragend',this.dragEnd).bind('drag',this.drag);

		},
		mouseUp: function(e){},
		mouseDown: function(e){},
		drag: function(e){},
		dragStart: function(e){},
		dragEnd: function(e){}

	});
	$.kscroller.builtinTypes = ['default','gnome','windows','facebook','thin','custom'];
	$.kscroller.directions = ['horizontal', 'vertical', 'both'];
	$.kscroller.positions = {
		'X' : 0,
		'Y' : 0,
		'offsetX' : 0,
		'offsetY' : 0
	};
	$.kscroller.settings = {
		'type': 'default',
		'roundedCorner' : 'default',
		'trackWidth' : 'default',
		'trackColor' : 'default',
		'thumbWidth' : 'default',
		'thumbColor' : 'default',
		'button': 'default',
		'direction' : 'default',
		'trackBorder' : 'default',
		'trackBorderWidth': 'default',
		'trackBorderColor' : 'default'
	};
})(JQuery)