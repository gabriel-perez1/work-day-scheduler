document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'timeGrid',
		dayCount: 1,

		header: {
			center: 'addEventButton'
		},
		
		customButtons: {
			addEventButton: {
				text: 'Add Task',
				click: function() {
					var dateStr = prompt('Enter a date in YYYY-MM-DD format');
					var date = moment(dateStr);

					if (date.isValid()) {
						$('#calendar').FullCalendar('renderEvent', {
						title: 'dynamic event',
						start: date,
						allDay: true
						});
						alert('Great. Now, update your database...');
					} else {
						alert('Invalid date.');
					}
				}
			}
		}
	});
  
	calendar.render();
  });