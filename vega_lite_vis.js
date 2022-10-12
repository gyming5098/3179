var vega1 = "map.vg.json";
var vega2 = "piechart.vg.json";
var vega3 = "table_plot.vg.json"

vegaEmbed("#worldmap_plot", vega1).then(function(result) {
}).catch(console.error);

vegaEmbed("#chart1_plot", vega2).then(function(result) {
}).catch(console.error);

vegaEmbed("#chart2_plot", vega3).then(function(result) {
}).catch(console.error);