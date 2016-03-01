// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
	function initialize() {
		var centerPoint = new google.maps.LatLng(35.225568, -80.841439)
		var sblvd = new google.maps.LatLng(35.1070819, -80.8983751)
		var sharon = new google.maps.LatLng(35.1121522, -80.8676883)
		var arrow = new google.maps.LatLng(35.1235661, -80.8667733)
		var arch = new google.maps.LatLng(35.1594812, -80.8673833)
		var tyvola = new google.maps.LatLng(35.1634573, -80.873114)
		var wood = new google.maps.LatLng(35.1725575, -80.8740138)
		var scaley = new google.maps.LatLng(35.2017399, -80.8635492)
		var newbern = new google.maps.LatLng(35.19689, -80.8682291)
		var eastwest = new google.maps.LatLng(35.2127243,-80.8588194)
		var bland = new google.maps.LatLng(35.2152922, -80.857174)
		var carson = new google.maps.LatLng(35.2156912, -80.8554)
		var stone = new google.maps.LatLng(35.219556, -80.8483812)
		var third = new google.maps.LatLng(35.219556, -80.8483812)
		var ctc = new google.maps.LatLng(35.2200601, -80.8476357)
		var seventh = new google.maps.LatLng(35.2242816, -80.8423395)

		var mapOptions = {
			center: centerPoint,
			zoom: 11,
			scrollwheel: false
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var marker = new google.maps.Marker( {
			position: centerPoint,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_sblvd = new google.maps.Marker ( {
			position: sblvd,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_sharon = new google.maps.Marker ({
			position: sharon,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_arrow = new google.maps.Marker ({
			position: arrow,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_arch = new google.maps.Marker ({
			position: arch,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_tyvola = new google.maps.Marker ({
			position: tyvola,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_wood = new google.maps.Marker ({
			position: wood,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_scaley = new google.maps.Marker ({
			position: scaley,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_newbern = new google.maps.Marker ({
			position: newbern,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_eastwest = new google.maps.Marker ({
			position: eastwest,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_bland = new google.maps.Marker ({
			position: bland,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_carson = new google.maps.Marker ({
			position: carson,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_stone = new google.maps.Marker ({
			position: stone,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_third = new google.maps.Marker ({
			position: third,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_ctc = new google.maps.Marker ({
			position: ctc,
			map: map,
			animation: google.maps.Animation.DROP
		})
		var marker_seventh = new google.maps.Marker ({
			position: seventh,
			map: map,
			animation: google.maps.Animation.DROP
		})
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});

