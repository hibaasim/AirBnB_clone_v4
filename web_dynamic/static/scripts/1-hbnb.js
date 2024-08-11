$(document).ready(option);

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
		
