const width = 250,
    height = 250;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
const projection = d3.geo.albers().center([17.4, 22]);

const counties = svg.append("g").attr("class", "counties");
const coc = svg.append("g").attr("class", "coc");
const text_area = svg.append("g").attr("class", "text-area");
const car_group = svg.append("g").attr("class", "car-group");

function createMap() {

    d3.json("tx_counties_v2.geojson", function(error,data) {
	if (error) return console.error(error);
	console.log(data);
	counties.selectAll("path").data(data.features).enter().append('path')
	    .attr("class", "county")
	    .attr("d", d3.geo.path().projection(projection));
	
	svg.append("circle").attr("class", "dot")
	    .attr("transform", "translate(" + projection([-97.7431, 30.2672]) + ")")
	    .attr("r", 1);

	svg.append("circle").attr("class", "dot")
	    .attr("transform", "translate(" + projection([-101.8552, 33.5779]) + ")")
	    .attr("r", 1);

	svg.append("circle").attr("class", "dot")
	    .attr("transform", "translate(" + projection([-94.0477, 33.4251]) + ")")
	    .attr("r", 1);	

	svg.append("circle").attr("class", "dot")
	    .attr("transform", "translate(" + projection([-97.5247, 26.1285]) + ")")
	    .attr("r", 1);		

	text_area.append("rect").attr("x", projection([-97.7431, 30.2672])[0]).attr("y", projection([-97.7431, 30.2672])[1])
	    .attr("class", "austin-text-box")

	text_area.append("text").attr("class", "label-city").attr("transform", "translate(" + projection([-97.7431, 30.2672]) + ")")
	    .attr("dy", "-1.9em")
	    .text("Austin");

	
	text_area.append("rect").attr("x", projection([-101.8552, 33.5779])[0]).attr("y", projection([-101.8552, 33.5779])[1])
	    .attr("class", "text-box")

	text_area.append("rect").attr("x", projection([-94.0477, 33.4251])[0]).attr("y", projection([-94.0477, 33.4251])[1])
	    .attr("class", "text-box")

	text_area.append("rect").attr("x", projection([-97.5247, 26.1285])[0]).attr("y", projection([-97.5247, 26.1285])[1])
	    .attr("class", "text-box")

	
	text_area.append("text").attr("class", "place-label").attr("transform", "translate(" + projection([-101.8552, 33.5779]) + ")")
	    .attr("dy", "-0.70em")
	    .text("372 miles (5.8 hours)");

	text_area.append("text").attr("class", "label-city").attr("transform", "translate(" + projection([-101.8552, 33.5779]) + ")")
	    .attr("dy", "-1.70em")
	    .text("Lubbock:");

	text_area.append("text").attr("class", "place-label").attr("transform", "translate(" + projection([-94.0477, 33.4251]) + ")")
	    .attr("dy", "-0.70em")
	    .text("374 miles (5.7 hours)");

	text_area.append("text").attr("class", "label-city").attr("transform", "translate(" + projection([-94.0477, 33.4251]) + ")")
	    .attr("dy", "-1.70em")
	    .text("Texarkana:");

	text_area.append("text").attr("class", "place-label").attr("transform", "translate(" + projection([-97.5247, 26.1285]) + ")")
	    .attr("dy", "-0.70em")
	    .text("350 miles (5.2 hours)");

	text_area.append("text").attr("class", "label-city").attr("transform", "translate(" + projection([-97.5247, 26.1285]) + ")")
	    .attr("dy", "-1.70em")
	    .text("Brownsville:");

	
	setInterval(function() {
	    svg.append("circle")
		.attr("class", "ring")
		.attr("transform", "translate(" + projection([-97.7431, 30.2672]) + ")")
		.attr("r", 1)
		.style("stroke-width", 0.5)
		.style("stroke", "red")
		.transition()
		.ease("linear")
		.duration(1000)
		.style("stroke-opacity", 1e-6)
		.style("stroke-width", 0.5)
		.style("stroke", "brown")
		.attr("r", 2.5)
		.remove();
	}, 750);
    });

    d3.json("json/TX_503_subunits.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_500", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    
    d3.json("json/TX_701.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

        d3.json("json/TX_600.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_601.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

    d3.json("json/TX_603.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
   
        d3.json("json/TX_604.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

        d3.json("json/TX_611.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

        d3.json("json/TX_624.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

        d3.json("json/TX_700.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

        d3.json("json/TX_701.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

    
};


function transition(plane, route) {
    var l = route.node().getTotalLength();
    plane.transition()
	.duration(30000)
	.attrTween("transform", delta(plane, route.node()))
	.remove();
};

function delta(plane, path) {
    var l = path.getTotalLength();
    var plane = plane;
    return function(i) {
	return function(t) {
            var p = path.getPointAtLength(t * l);
	    var s = 0.09
            return "translate(" + (p.x)*0.97 + "," + (p.y)*0.95 + ") scale(" + s + ")";
      }
    }
};

function fly() {
    d3.json("decoded_polyline.geojson", function(error, data) {
	if (error) return console.error(error);

	var car = car_group.append("path")
	    .attr("class", "car-path")
	    .attr("d", "M19.097,54.071c-4.175,0-7.561,3.383-7.561,7.56c0,0.324,0.026,0.641,0.066,0.951c0.469,3.729,3.642,6.611,7.494,6.611    c3.959,0,7.202-3.042,7.53-6.916c0.018-0.214,0.033-0.428,0.033-0.646C26.66,57.454,23.275,54.071,19.097,54.071z M15.31,58.782    l1.543,1.543c-0.121,0.206-0.214,0.429-0.274,0.665h-2.174C14.518,60.165,14.833,59.415,15.31,58.782z M14.397,62.298h2.189    c0.062,0.233,0.153,0.454,0.274,0.656L15.314,64.5C14.838,63.871,14.513,63.119,14.397,62.298z M18.443,66.328    c-0.818-0.112-1.564-0.434-2.193-0.908l1.537-1.538c0.202,0.118,0.424,0.205,0.656,0.266V66.328z M18.443,59.116    c-0.238,0.062-0.461,0.157-0.668,0.279l-1.541-1.541c0.633-0.48,1.385-0.8,2.209-0.913V59.116z M19.752,56.941    c0.826,0.113,1.577,0.433,2.209,0.914l-1.54,1.54c-0.207-0.122-0.43-0.218-0.669-0.279V56.941z M19.752,66.328v-2.182    c0.233-0.061,0.454-0.147,0.657-0.268l1.538,1.54C21.317,65.894,20.572,66.214,19.752,66.328z M22.885,64.504l-1.551-1.551    c0.12-0.203,0.22-0.42,0.282-0.655h2.172C23.673,63.119,23.364,63.875,22.885,64.504z M21.617,60.99    c-0.06-0.236-0.153-0.459-0.274-0.665l1.543-1.543c0.478,0.633,0.792,1.383,0.905,2.208H21.617z")
	var car_2 = car_group.append("path")
	    .attr("class", "car-path")
	    .attr("d", "M83.965,54.071c-4.176,0-7.561,3.383-7.561,7.56c0,0.324,0.025,0.641,0.065,0.951c0.468,3.729,3.643,6.611,7.494,6.611    c3.958,0,7.201-3.042,7.53-6.916c0.018-0.214,0.031-0.428,0.031-0.646C91.526,57.454,88.142,54.071,83.965,54.071z M80.177,58.782    l1.543,1.543c-0.12,0.206-0.214,0.429-0.273,0.665h-2.175C79.385,60.165,79.7,59.415,80.177,58.782z M79.265,62.298h2.19    c0.062,0.233,0.152,0.454,0.272,0.656L80.182,64.5C79.705,63.871,79.38,63.119,79.265,62.298z M83.31,66.328    c-0.818-0.112-1.563-0.434-2.192-0.908l1.537-1.538c0.201,0.118,0.424,0.205,0.655,0.266V66.328z M83.31,59.116    c-0.237,0.062-0.461,0.157-0.669,0.279L81.1,57.854c0.634-0.48,1.385-0.8,2.209-0.913L83.31,59.116L83.31,59.116z M84.62,56.941    c0.824,0.113,1.576,0.433,2.209,0.914l-1.541,1.54c-0.207-0.122-0.431-0.218-0.668-0.279V56.941z M84.62,66.328v-2.182    c0.231-0.061,0.454-0.147,0.655-0.268l1.538,1.54C86.184,65.894,85.438,66.214,84.62,66.328z M87.752,64.504l-1.551-1.551    c0.12-0.203,0.22-0.42,0.281-0.655h2.174C88.54,63.119,88.23,63.875,87.752,64.504z M86.483,60.99    c-0.06-0.236-0.152-0.459-0.272-0.665l1.542-1.543c0.478,0.633,0.792,1.383,0.906,2.208H86.483z")

	var car_3 = car_group.append("path")
	    .attr("class", "car-path")
	    .attr("d", 
		  "M99.091,47.939c-0.056-1.67-0.516-3.301-1.339-4.754l-5.43-9.581c-0.89-1.569-2.521-2.573-4.322-2.664    c-9.1-0.456-37.002-1.618-45.786,0.744C36.272,33.283,21.278,43.14,21.278,43.14S4.781,45.695,1.634,53.219    c0,0-1.358,0.793-1.605,2.826c-0.127,1.046,0.183,2.634,0.525,3.965c0.375,1.456,1.582,2.552,3.067,2.783l7.16,1.122    c-0.107-0.391-0.196-0.788-0.248-1.198c-0.045-0.354-0.075-0.716-0.075-1.087c0-4.763,3.875-8.637,8.639-8.637    c4.765,0,8.64,3.874,8.64,8.637c0,0.249-0.016,0.493-0.036,0.735c-0.072,0.844-0.268,1.651-0.567,2.408l0.842,0.045l47.568-1.287    c-0.061-0.268-0.109-0.538-0.145-0.814c-0.046-0.354-0.074-0.716-0.074-1.087c0-4.763,3.875-8.637,8.638-8.637    c4.765,0,8.64,3.874,8.64,8.637c0,0.249-0.016,0.493-0.037,0.735c-0.013,0.16-0.041,0.315-0.062,0.473L96.609,62    c1.693-0.346,2.891-1.86,2.831-3.589L99.091,47.939z M71.715,32.71l1.093,10.911l-16.774,0.686V32.655    C60.938,32.542,66.536,32.593,71.715,32.71z M29.387,45.087l-1.659,0.093c-0.451,0.025-0.864-0.249-1.016-0.675    c-0.152-0.424-0.005-0.897,0.358-1.164c0.975-0.712,2.169-1.563,3.499-2.462v2.784C29.759,44.348,29.387,45.087,29.387,45.087z     M33.498,42.533c-0.105,0.004-0.191,0.03-0.291,0.04V39.15c3.382-2.144,7.215-4.273,10.511-5.34c1.5-0.485,4.236-0.795,7.636-0.98    v11.668l-14.412,0.589C36.942,45.087,36.442,42.423,33.498,42.533z M91.768,41.475c-0.503,0.874-1.419,1.429-2.426,1.471    L77.49,43.43l-1.062-10.594c4.898,0.149,8.99,0.333,11.063,0.445c0.959,0.051,1.824,0.604,2.271,1.454l2.057,3.903    C92.29,39.531,92.27,40.603,91.768,41.475z")
	
//	var plane = svg.append("path")
//	    .attr("class", "plane")
//	    .attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.8n5232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z");
	
 	var route = svg.append("path")
	    .datum({type: "LineString", coordinates: data.coordinates})
	    .attr("class", "driving-route")
	    .attr("d", d3.geo.path().projection(projection));

	transition(car, route);
	transition(car_2, route);
	transition(car_3, route);	
    })
};

// code for animating route for driving directions
// function drive() {
//    d3.json("decoded_polyline.geojson", function(error, data) {
//	if (error) return console.error(error);
	
//	console.log(data)
//	var route = svg.append("path")
//	    .datum({type: "LineString", coordinates: data.coordinates})
//	    .attr("class", "driving-route")
//	    .attr("d", d3.geo.path().projection(projection));	
//    })

//};

// drive();
fly();
setInterval(function() {fly();}, 30000)
createMap();
