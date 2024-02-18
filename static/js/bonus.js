function gaugechart(selectedId, data) {
    let metadata = data.metadata.find(item => item.id === parseInt(selectedId));
    let bellybuttonwashes = metadata ? metadata.wfreq || 0 : 0; 
    let gaugedata = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: bellybuttonwashes,
            gauge: {
                axis: { range: [null, 9]},
                bar: { color: "black", thickness: 0 },
                steps: [
                    { range: [0, 1], color: "antiquewhite" },
                    { range: [1, 2], color: "beige" },
                    { range: [2, 3], color: "blanchedalmond" },
                    { range: [3, 4], color: "khaki" },
                    { range: [4, 5], color: "limegreen" },
                    { range: [5, 6], color: "olive" },
                    { range: [6, 7], color: "green" },
                    { range: [7, 8], color: "forestgreen" },
                    { range: [8, 9], color: "darkgreen" },
                ],
            }
        }
    ];
    let gaugelayout = {
        text: ['0-1', '1-2', '2-3', '3-4',
            '4-5', '5-6', '6-7', '7-8', '8-9'],
        textinfo: 'text',
        textposition:'inside',    
        'shapes': [
            {
                'type': 'path',
                'path': 'M 0.235 0.5 L 0.24 0.65 L 0.245 0.5 Z',
                'fillcolor': 'rgba(44, 160, 101, 0.5)',
                'line': {
                    'width': 0.5
                },
                'xref': 'paper',
                'yref': 'paper'
            }
        ]
    }

    Plotly.newPlot('gauge', gaugedata, gaugelayout);
}