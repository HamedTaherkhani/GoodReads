chart = {
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(yAxis);
  
    svg.append("g")
        .call(grid);
  
    const circle = svg.append("g")
        .attr("stroke", "black")
      .selectAll("circle")
      .data(dataAt(1800), d => d.name)
      .join("circle")
        .sort((a, b) => d3.descending(a.population, b.population))
        .attr("cx", d => x(d.income))
        .attr("cy", d => y(d.lifeExpectancy))
        .attr("r", d => radius(d.population))
        .attr("fill", d => color(d.region))
        .call(circle => circle.append("title")
          .text(d => [d.name, d.region].join("\n")));
  
    return Object.assign(svg.node(), {
      update(data) {
        circle.data(data, d => d.name)
            .sort((a, b) => d3.descending(a.population, b.population))
            .attr("cx", d => x(d.income))
            .attr("cy", d => y(d.lifeExpectancy))
            .attr("r", d => radius(d.population));
      }
    });
  }