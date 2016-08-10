var data = [
  {country:"USA", gold:10, silver:20},
  {country:"China", gold:20, silver:100},
  {country:"India", gold:200, silver:50},
  {country:"Russia", gold:25, silver:80},
  {country:"Germany", gold:10, silver:200},
  {country:"UK", gold:150, silver:75},
  {country:"France", gold:10, silver:70},
  {country:"UAE", gold:30, silver:150},
  {country:"Canada", gold:100, silver:15}
]

var svg = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)
            .attr("padding",200)
            .style("background","grey")

var xscale = d3.scale.linear()
                      .domain([0, 100])
                      .range([0, 400]);

var yscale = d3.scale.linear()
                      .domain([0, 100])
                      .range([0, 400]);

//Define X axis
var xaxis = d3.svg.axis()
          .scale(xscale)
          .orient("bottom")
          .ticks(5);
//Define Y axis
var yaxis = d3.svg.axis()
          .scale(yscale)
          .orient("left")
          .ticks(5);
//Create X axis
svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (height - padding) + ")")
  .call(xaxis)

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate("+padding+",0)")
  .call(yaxis)
//Create Y axis


// svg.selectAll("circle")
//    .data(data).enter()
//    .append("circle")
//    .attr("cx", function(d) {return d.gold})
//    .attr("cy", function(d) {return d.silver})
//    .attr("r", function(d) {
//      return Math.sqrt(d.gold*d.gold+d.silver*d.silver)/20
//    })
//    .attr("fill", function(d) {
//      return "rgb("+d.gold+","+d.silver+",0)"
//    })

// svg.selectAll("text")
//   .data(data).enter()
//   .append("text")
//   .attr("x", function(d) {return d.gold+10})
//   .attr("y", function(d) {return d.silver+4})
//   .text(function(d) {return d.country})
//   .attr("font-size", "10px")
