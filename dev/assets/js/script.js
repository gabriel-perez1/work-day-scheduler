document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'timeGrid',
		dayCount: 1
	});
  
	calendar.render();
  });