$(document).ready(option);

const HOST = '0.0.0.0';

function option(){
	const wanted_amenity = {}

	$('.amenities .popover input').change(function() {
		if ($(this).is(':checked')){
			wanted_amenity[$(this).attr('data-name')] = $(this).attr('data-id');
		}else if ($(this).is(':not(:checked)')){
			delete wanted_amenity[$(this).attr('data-name')];
		}
		const name = Object.keys(wanted_amenities);
		$('.amenities h4').text(name.sort().join(", "));
	});
}
  apiStatus();
}

function apiStatus () {
  const API_URL = `http://${HOST}:5001/api/v1/status/`;
  $.get(API_URL, (data, textStatus) => {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}		
