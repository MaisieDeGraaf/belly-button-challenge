function gaugechart(selectedId, data) {
    let metadata = data.metadata.find(item => item.id === parseInt(selectedId));
    let bellybuttonwashes = metadata ? metadata.wfreq || 0 : 0; 
    let angle = (bellybuttonwashes / 9) * 180;
    let radians = angle * Math.PI / 180; 

    let x = 0.5 + 0.2 * Math.cos(radians);
    let y = 0.5 + 0.2 * Math.sin(radians);


    let gaugedata = [
        {
            type: "indicator",
            mode: "gauge",
            value: bellybuttonwashes,
            gauge: {
                axis: { range: [null, 9] },
                bar: { color: "black", thickness: 0 },
                steps: [
                    { range: [0, 1], color: "antiquewhite", text: "0-1" },
                    { range: [1, 2], color: "beige", text: "1-2" },
                    { range: [2, 3], color: "blanchedalmond", text: "2-3" },
                    { range: [3, 4], color: "khaki", text: "3-4" },
                    { range: [4, 5], color: "limegreen", text: "4-5" },
                    { range: [5, 6], color: "olive", text: "5-6" },
                    { range: [6, 7], color: "green", text: "6-7" },
                    { range: [7, 8], color: "forestgreen", text: "7-8" },
                    { range: [8, 9], color: "darkgreen", text: "8-9" },
                ],
                // Display numeric values inside sections
                textinfo: "text",
                // Adjust text position inside sections
                textposition: "inside"
            }
        }
    ];
    let gaugeLayout = {
        shapes: [
            {
                type: 'path',
                path: 'M 0.5,0.3 L ' + x + ',' + y + ' Z', 
                fillcolor: 'rgba(44, 160, 101, 0.5)',
                line: { width: 0.7 },
                xref: 'paper',
                yref: 'paper'
            }
        ],
        annotations: [
            { 
                text: '0-1', 
                x: 0.05, 
                y: 0.3, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '1-2', 
                x: 0.05, 
                y: 0.45, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '2-3', 
                x: 0.06, 
                y: 0.5, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '3-4', 
                x: 0.07, 
                y: 0.55, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '4-5', 
                x: 0.08, 
                y: 0.6, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '5-6', 
                x: 0.09, 
                y: 0.65, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '6-7', 
                x: 0.1, 
                y: 0.7, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '7-8', 
                x: 0.15, 
                y: 0.8, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
            { 
                text: '8-9', 
                x: 0.2, 
                y: 0.9, 
                showarrow: false, 
                font: { size: 14, color: 'black' } 
            },
        ]
    };
    Plotly.newPlot('gauge', gaugedata, gaugeLayout);
}


