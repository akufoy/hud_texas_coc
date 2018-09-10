const width = 250,
    height = 250;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
const projection = d3.geo.albers().center([17.4, 22]);

const counties = svg.append("g").attr("class", "counties");
const coc = svg.append("g").attr("class", "coc");

function createMap() {

    d3.json("TX_counties.json", function(error,data) {
	if (error) return console.error(error);
	console.log(data);
	counties.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "county").attr("d", d3.geo.path().projection(projection));
	counties.append("path").datum(topojson.mesh(data, data.objects.subunits, function(a,b) { return a !== b;})).attr("d", d3.geo.path().projection(projection)).attr("class", "county-boundary");
    });

    d3.json("json/TX_701.json", function(error, data) {
	if (error) return console.error(error);
	console.log(data);

	coc.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("class", "coc").attr("d", d3.geo.path().projection(projection));
    });


};
createMap();
