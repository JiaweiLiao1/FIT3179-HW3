var spec = "js/choropleth.vg.json";
vegaEmbed("#choropleth", spec)
    .then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);