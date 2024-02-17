let samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init() {
    d3.json(samples).then(data => {
        console.log(data); 

        let dropdown = d3.select("#selDataset");
        data.names.forEach(name => {
            dropdown.append("option").text(name).property("value", name);
        });
        optionChanged(data.names[0]);
    });
}

function optionChanged(selectedId) {
    d3.json(samples).then(data => {
        console.log(data); 

        let sample = data.samples.find(sample => sample.id === selectedId);
        let sampleValues = sample.sample_values.slice(0, 10).reverse();
        let otuIds = sample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        let otuLabels = sample.otu_labels.slice(0, 10).reverse();

        let barData = {
            x: sampleValues,
            y: otuIds, 
            text: otuLabels,
            type: "bar",
            orientation: "h"
        };

        let bubbleData = {
            x: sample.otu_ids,
            y: sample.sample_values,
            mode: 'markers',
            marker: {
                size: sample.sample_values,
                color: sample.otu_ids,
                colorscale: 'Earth'
            },
            text: sample.otu_labels
        };

        Plotly.newPlot('bar', [barData]);
        Plotly.newPlot('bubble', [bubbleData], { xaxis: { title: 'OTU ID' } });
    });
}

init();
