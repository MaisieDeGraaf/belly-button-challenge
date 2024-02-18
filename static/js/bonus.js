function gaugechart(selectedId, data) {
    let metadata = data.metadata.find(item => item.id === parseInt(selectedId));
    let bellybuttonwashes = metadata ? metadata.wfreq || 0 : 0; 
    let gaugedata = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            type: "indicator",
            mode: "gauge+number",
            value: bellybuttonwashes
        }
    ];
    Plotly.newPlot('gauge', gaugedata)
}
