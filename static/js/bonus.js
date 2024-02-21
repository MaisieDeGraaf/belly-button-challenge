function gaugechart(selectedId, data) {
    let metadata = data.metadata.find(item => item.id === parseInt(selectedId));
    let bellybuttonwashes = metadata ? metadata.wfreq || 0 : 0; 

    let gaugeValue = bellybuttonwashes || 0;
    

    let gaugeData = [
        {
            type: "indicator",
            mode: "gauge",
            value: gaugeValue,
            gauge: {
                axis: { range: [null, 9],
                        tickvals: [],
                        ticktext: [] },
                bar: { color: "black", thickness: 0 },
                steps: [
                    { range: [0, 1], color: "beige"},
                    { range: [1, 2], color: "antiquewhite"},
                    { range: [2, 3], color: "blanchedalmond"},
                    { range: [3, 4], color: "khaki"},
                    { range: [4, 5], color: "lightgreen"},
                    { range: [5, 6], color: "limegreen"},
                    { range: [6, 7], color: "forestgreen"},
                    { range: [7, 8], color: "green"},
                    { range: [8, 9], color: "darkgreen"},
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: gaugeValue}
            }
        }
    ];
    let gaugeLayout = {
        title: {
            text: "Number of Belly Button Washes per Week",
            font: { size: 20 }
        },
        annotations: [
            { 
                text: '0-1', 
                x: 0.01, 
                y: 0.25, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '1-2', 
                x: 0.06, 
                y: 0.46, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '2-3', 
                x: 0.18, 
                y: 0.61, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '3-4', 
                x: 0.31, 
                y: 0.72, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '4-5', 
                x: 0.5, 
                y: 0.76, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '5-6', 
                x: 0.65, 
                y: 0.725, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '6-7', 
                x: 0.83, 
                y: 0.61, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '7-8', 
                x: 0.93, 
                y: 0.47, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '8-9', 
                x: 0.975, 
                y: 0.26, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
        ]
    };

    Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}

