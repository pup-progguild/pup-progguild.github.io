(function () {
	$(function () {
		var $homeCalendar = $('.page-calendar.-home'),
			$eventsCalendar = $('.page-calendar.-events');
		
		$homeCalendar
			.each(function () {
				$(this).datepicker({
					dateFormat: 'yyyy-mm-dd',
					showMonthAfterYear: true,
					onSelect: function (date) {
						location.href = 'events.html';
					}
				});
			});
			
		$eventsCalendar
			.each(function () {
				$(this).datepicker({
					showMonthAfterYear: true,
					onSelect: function (date) {
						date = new Date(date);
						
						$('.day-events')
							.find('h2')
							.text(moment(date).format('YYYY-MM-DD'));
					}
				});
			})
	});
})();
