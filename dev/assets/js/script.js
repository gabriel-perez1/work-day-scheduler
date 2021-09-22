var initCalendar = function () {
	$('#calendar').fullcalendar({
		initialView: 'timeGridDay',
		editable: true,
		events: events(),
	});
}

var getCalendar = function() {
	$calendar = $('#calendar');
}

var editCalendar = function () {
	$calendar.fullcalendar('option', {
		selectable: true,
		selectHelper: true,
		select: function (start, end) {
			newEvent(start);
		},
		eventClick: function(calEvent) {
			editEvent(calEvent);
		},
	});
}

var newEvent = function(start) {

}