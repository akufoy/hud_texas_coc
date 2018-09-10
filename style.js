const width = 250,
    height = 250;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
const projection = d3.geo.albers().center([17.4, 22]);

function createMap() { 
    d3.json("json/TX_503_subunits.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_500", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_600.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_601.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_603.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_604.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_607.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_611.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_624.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_700.json", function(error, data) {
	if (error) return console.error(error);
	// console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_701.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });
    d3.json("data/TX_counties.json", function(error,data) {
	if (error) return console.error(error);
	console.log(data);
	// svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });

};
createMap();
