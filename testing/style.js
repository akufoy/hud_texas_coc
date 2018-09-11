const width = 250,
    height = 250;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
const projection = d3.geo.albers().center([17.4, 22]);

const counties = svg.append("g").attr("class", "counties");
const coc = svg.append("g").attr("class", "coc");

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

	setInterval(function() {
	    svg.append("circle")
		.attr("class", "ring")
		.attr("transform", "translate(" + projection([-97.7431, 30.2672]) + ")")
		.attr("r", 1)
		.style("stroke-width", 1)
		.style("stroke", "red")
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
createMap();
