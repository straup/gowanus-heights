function gh_init(){

	var map = L.map('map');

	var bbox = canal['features'][0]['bbox'];
	console.log(bbox);

	var extent = [
 		[ bbox[1], bbox[0] ],
		[ bbox[3], bbox[2] ]
	];

	map.fitBounds(extent);
	// map.setMaxBounds(extent);

	// var toner = 'http://tile.stamen.com/toner-background/{z}/{x}/{y}.jpg';
	var toner = 'http://tile.stamen.com/toner/{z}/{x}/{y}.jpg';

	var base = L.tileLayer(toner, {
	    attribution: 'chicken chicken chicken',
	    maxZoom: 18
	});

	base.addTo(map);

	var c = L.geoJson(canal);
	c.addTo(map);

}
