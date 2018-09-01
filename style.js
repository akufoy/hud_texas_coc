var width = 1200,
    height = 800;
var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
var projection = d3.geo.albersUsa();

function createMap() { 
    d3.json("json/TX_503_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_500", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_600.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_601_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_603_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_604_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_607_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_611_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_624_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_700_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
    d3.json("json/TX_701_subunits.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
    });
};
createMap();
