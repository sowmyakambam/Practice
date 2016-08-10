var svg=d3.select("body")
			.append("svg")
			.attr("width",500)
			.attr("height",50)
			

var radius=[10,20,30]
var circles=svg.selectAll("circle")
			.data(radius)
			.enter()
			.append("circle")
			.attr("fill", "red")
			.attr("cx", function(d) { return 10*d})
       		.attr("cy", 25)
       		.attr("r", 10)
			
