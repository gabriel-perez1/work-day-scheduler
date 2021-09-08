document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'timeGridDay'
	});
  
	calendar.render();
  });