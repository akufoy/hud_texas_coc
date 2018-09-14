const width = 250,
    height = 250;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
const projection = d3.geo.albers().center([17.4, 22]);

const counties = svg.append("g").attr("class", "counties");
const coc = svg.append("g").attr("class", "coc");
const text_area = svg.append("g").attr("class", "text-area");

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
	    .text("340 miles (5.2 hours)");

	text_area.append("text").attr("class", "label-city").attr("transform", "translate(" + projection([-97.5247, 26.1285]) + ")")
	    .attr("dy", "-1.70em")
	    .text("McAllen:");

	
	setInterval(function() {
	    svg.append("circle")
		.attr("class", "ring")
		.attr("transform", "translate(" + projection([-97.7431, 30.2672]) + ")")
		.attr("r", 1)
		.style("stroke-width", 1)
		.style("stroke", "white")
		.transition()
		.ease("linear")
		.duration(6000)
		.style("stroke-opacity", 1e-6)
		.style("stroke-width", 1)
		.style("stroke", "brown")
		.attr("r", 15)
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
	.duration(15000)
	.attrTween("transform", delta(plane, route.node()))
	.remove();
}

function delta(plane, path) {
    var l = path.getTotalLength();
    var plane = plane;
    return function(i) {
	return function(t) {
            var p = path.getPointAtLength(t * l);

            var t2 = Math.min(t + 0.05, 1);
            var p2 = path.getPointAtLength(t2 * l);

            var x = p2.x - p.x;
            var y = p2.y - p.y;
            var r = 90 - Math.atan2(-y, x) * 180 / Math.PI;

            var s = Math.min(Math.sin(Math.PI * t) * 0.7, 0.3);

            return "translate(" + p.x + "," + p.y + ") scale(" + s + ") rotate(" + r + ")";
      }
    }
  }

function fly() {
    var plane = svg.append("path")
	.attr("class", "plane")
	.attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z");
    var route = svg.append("path")
	.datum({type: "LineString", coordinates: [[-97.7431, 30.2672], [-101.8552, 33.5779]]})
	.attr("class", "route")
	.attr("d", d3.geo.path().projection(projection));

    transition(plane, route);
}
fly();
setInterval(function() {fly();}, 15000)
createMap();
