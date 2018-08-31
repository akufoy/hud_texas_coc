var width = 600,
    height = 500;
var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
var projection = d3.geo.albersUsa();
d3.json("TX_503.json", function(error, data) {
    if (error) return console.error(error);
    console.log(data);

    svg.append("path").datum(topojson.feature(data, data.objects.subunits)).attr("d", d3.geo.path().projection(projection));
});
