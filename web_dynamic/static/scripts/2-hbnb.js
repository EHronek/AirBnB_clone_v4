$(document).ready(function () {
    $.ajax('http://0.0.0.0:5001/api/v1/status').done(function(data) {
		if (data.status === "OK") {
		  $('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	});

    const selectedAmenities = {};

    $('input[type="checkbox"]').change(function () {
        let amenityId = $(this).attr('data-id');
        let amenityName = $(this).attr('data-name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        let amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList || '\u00A0');
    });
});

