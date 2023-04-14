const countryData = {
    'france': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'France Net Position',
                data: [-1032616, -2173991, -3556872, 12794082.7585471, 2636671.46914662, -7022815.82307428, -2161027.1277204, 1786163.14746351]
            },
            {
                name: 'Belgium',
                data: [534610, 534610, 711012, 711012, 711012, null, null, null],
                color: colors[5]
            },
            {
                name: 'Germany',
                data: [null, null, null, 16350954.7585471, 6193543.46914663, null, 4861788.69535389, 4861788.69535389],
                color: colors[6]
            },
            {
                name: 'Great Britain',
                data: [431376, 420021, 359823, 359823, 359823, null, null, null],
                color: colors[1]
            },
            {
                name: 'Italy',
                data: [171577, 171577, 163857, 163857, 163857, 929.031520371994, 929.031520371994, 929.031520371994],
                color: colors[2]
            },
            {
                name: 'Russia',
                data: [955157, 955157, 1165720, 1165720, 1165720, 298385.867286656, 298385.867286656, 298385.867286656],
                color: colors[3]
            },
            {
                name: 'United States',
                data: [382719, 382719, null, null, null, null, null, null],
                color: colors[4]
            },
            {
                name: 'Others',
                data: [672798, 966737, 1063332, 1063332, 1063332, 123775.584098792, 123775.584098792, 95880.8171665968],
                color: colors[7]
            },
            {
                name: 'Great Britain',
                data: [-2114228, -2505211, -2927604, -2927604, -2927604, -3513339.588, -3513339.588, -1458229.3316149],
                color: colors[1],
                showInLegend: false
            },
            {
                name: 'Italy',
                data: [-96625, -96624, -96624, -96624, -96624, null, null, null],
                color: colors[2],
                showInLegend: false
            },
            {
                name: 'United States',
                data: [-1970000, -2997477, -3990658, -3990658, -3990658, -3932566.60441361, -3932566.60441361, -2012591.9502992],
                color: colors[4],
                showInLegend: false
            },
            {
                name: 'Others',
                data: [null, -5500, -5730, -5730, -5730, null, null, null],
                color: colors[7],
                showInLegend: false
            }

        ]
    },
    'great_britain': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'Great Britain Net Position',
                data: [3225417, 3502376, 4681930, 11599641.6286161, 7302275.31386973, 4604300.82821969, 6498048.20787438, 5098542.73849907]
            },

            {
                name: 'Belgium',
                data: [422269, 482249, 43794, 43794, 43794, 43807.4093836948, 43807.4093836948, 43807.4093836948],
                color: colors[5]
            },
            {
                name: 'France',
                data: [2114228, 2505211, 2927604, 2927604, 2927604, 3513339.588, 3513339.588, 1458229.3316149],
                color: colors[0]
            },
            {
                name: 'Germany',
                data: [null, null, null, 6917711.62861608, 2620345.31386973, null, 1893747.37965469, 1893747.37965469],
                color: colors[6]
            },
            {
                name: 'Italy',
                data: [2007322, 2225562, 2568591, 2568591, 2568591, 1277325, 1277325, 1057948.94084922],
                color: colors[2]
            },
            {
                name: 'Russia',
                data: [3737005, 3737005, 4321976, 4321976, 4321976, 4545441.55200671, 4545441.55200671, 4545441.55200671],
                color: colors[3]
            },
            {
                name: 'United States',
                data: [-3696000, -4277000, -4661000, -4661000, -4661000, -4453086.29035332, -4453086.29035332, -3414619.62114571],
                color: colors[4]
            },
            {
                name: 'Others',
                data: [1026666, 941926, 1309457, 1309457, 1309457, 1049448.37270435, 1049448.37270435, 814736.799762119],
                color: colors[7]
            },
            {
                name: 'France',
                data: [-431376, -420021, -359823, -359823, -359823, null, null, null],
                color: colors[0],
                showInLegend: false
            },
            {
                name: 'Italy',
                data: [-152314, -133788, -133788, -133788, -133788, -106814.803521744, -106814.803521744, -35589.0536265579],
                color: colors[2],
                showInLegend: false
            },
            {
                name: 'Russia',
                data: [-1265160, -1265160, -1265160, -1265160, -1265160, -1265160, -1265160, -1265160],
                color: colors[3],
                showInLegend: false
            },
            {
                name: 'Others',
                data: [-537223, -293608, -69721, -69721, -69721, null, null, null],
                color: colors[7],
                showInLegend: false
            }

        ]
    },
    'italy': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'Italy Net Position',
                data: [-2945795, -3644493, -4357539, -1213124.62335633, -3166472.94824103, -3168785.49376834, -2057782.90200861, -423992.119907002]
            },

            {
                name: 'France',
                data: [96625, 96624, 96624, 96624, 96624, null, null, null],
                color: colors[0]
            },
            {
                name: 'Germany',
                data: [null, null, null, 3144414.37664367, 1191066.05175897, null, 1111002.59175973, 1111002.59175973],
                color: colors[6]
            },
            {
                name: 'Great Britain',
                data: [152314, 133788, 133788, 133788, 133788, 106814.803521744, 106814.803521744, 35589.0536265579],
                color: colors[1]
            },
            {
                name: 'Russia',
                data: [6972, 7209, 7209, 7209, 7209, null, null, null],
                color: colors[3]
            },
            {
                name: 'United States',
                data: [8369, 2750, null, 2750, null, null, null, null],
                color: colors[4]
            },
            {
                name: 'Others',
                data: [null, 149617, 152367, 149617, 152367, 29681.3660098334, 29681.3660098334, 13435.2250638411],
                color: colors[7]
            },
            {
                name: 'France',
                data: [-171577, -171577, -163857, -163857, -163857, -929.031520371994, -929.031520371994, -929.031520371994],
                color: colors[0],
                showInLegend: false
            },
            {
                name: 'Great Britain',
                data: [-2007322, -2225562, -2568591, -2568591, -2568591, -1277325, -1277325, -1057948.94084922],
                color: colors[1],
                showInLegend: false
            },
            {
                name: 'United States',
                data: [-1031000, -1631338, -2015079, -2015079, -2015079, -2027027.67084651, -2027027.67084651, -525141.022220528],
                color: colors[4],
                showInLegend: false
            },
            {
                name: 'Others',
                data: [-176, -6004, null, null, null, null, null, null],
                color: colors[7],
                showInLegend: false
            }

        ]
    },
    'russia': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'Russia Net Position',
                data: [-3621704, -3621940, -4471703, -4471703, -4471703, -3847776.88302779, -3847776.88302779, -3847776.88302779]
            },
            {
                name: 'France',
                data: [-955157, -955157, -1165720, -1165720, -1165720, -298385.867286656, -298385.867286656, -298385.867286656],
                color: colors[0]
            },
            {
                name: 'Great Britain',
                data: [1265160, 1265160, 1265160, 1265160, 1265160, 1265160, 1265160, 1265160],
                color: colors[1]
            },
            {
                name: 'Great Britain',
                data: [-3737005, -3737005, -4321976, -4321976, -4321976, -4545441.55200671, -4545441.55200671, -4545441.55200671],
                color: colors[1],
                showInLegend: false
            },
            {
                name: 'Italy',
                data: [-6972, -7209, -7209, -7209, -7209, null, null, null],
                color: colors[2]
            },
            {
                name: 'United States',
                data: [-187730, -187729, -241903, -241903, -241903, -269109.463734421, -269109.463734421, -269109.463734421],
                color: colors[4]
            },
            {
                name: 'Others',
                data: [null, null, -55, -55, -55, null, null, null],
                color: colors[7]
            }

        ]
    },
    'united_states': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'United States Net Position',
                data: [6686027, 9195351, 11861010, 12150923, 12153673, 11969403.8952624, 12148681.8952624, 7261142.3518695]
            },

            {
                name: 'Belgium',
                data: [171780, 349214, 454463, 454463, 454463, 411013.073140984, 411013.073140984, 223658.383199299],
                color: colors[5]
            },
            {
                name: 'France',
                data: [1970000, 2997477, 3990658, 3990658, 3990658, 3932566.60441361, 3932566.60441361, 2012591.9502992],
                color: colors[0]
            },
            {
                name: 'Germany',
                data: [null, null, null, 292663, 292663, null, 179278, 179278],
                color: colors[6]
            },
            {
                name: 'Great Britain',
                data: [3696000, 4277000, 4661000, 4661000, 4661000, 4453086.29035332, 4453086.29035332, 3414619.62114571],
                color: colors[1]
            },
            {
                name: 'Italy',
                data: [1031000, 1631338, 2015079, 2015079, 2015079, 2027027.67084651, 2027027.67084651, 525141.022220528],
                color: colors[2]
            },
            {
                name: 'Russia',
                data: [187730, 187729, 241903, 241903, 241903, 269109.463734421, 269109.463734421, 269109.463734421],
                color: colors[3]
            },
            {
                name: 'Others',
                data: [20605, 138062, 497907, 497907, 497907, 876600.792773564, 876600.792773564, 636743.911270343],
                color: colors[7]
            },
            {
                name: 'France',
                data: [-382719, -382719, null, null, null, null, null, null],
                color: colors[0],
                showInLegend: false
            },
            {
                name: 'Italy',
                data: [-8369, -2750, null, -2750, null, null, null, null],
                color: colors[2],
                showInLegend: false
            },

        ]
    },
    'germany': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'Germany Net Position',
                data: [null, null, null, -34881221.1430804, -13394389.5693486, null, -9360540.45813165, -9360540.45813165]
            },
            {
                name: 'Belgium',
                data: [null, null, null, -2515531.50131494, -952852.841407173, null, -587886.381827191, -587886.381827191],
                color: colors[5]
            },
            {
                name: 'France',
                data: [null, null, null, -16350954.7585471, -6193543.46914663, null, -4861788.69535389, -4861788.69535389],
                color: colors[0]
            },
            {
                name: 'Great Britain',
                data: [null, null, null, -6917711.62861608, -2620345.31386973, null, -1893747.37965469, -1893747.37965469],
                color: colors[1]
            },
            {
                name: 'Italy',
                data: [null, null, null, -3144414.37664367, -1191066.05175897, null, -1111002.59175973, -1111002.59175973],
                color: colors[2]
            },
            {
                name: 'United States',
                data: [null, null, null, -292663, -292663, null, -179278, -179278],
                color: colors[4]
            },
            {
                name: 'Others',
                data: [null, null, null, -5659945.87795861, -2143918.89316614, null, -726837.409536151, -726837.409536151],
                color: colors[7]
            }
        ]
    },
    'belgium': {
        'series': [{
                type: 'scatter',
                zIndex: 10,
                marker: {
                    symbol: 'diamond'
                },
                color: '#00171f',
                name: 'Belgium Net Position',
                data: [-1128659, -1372306, -1215560, 1299971.50131494, -262707.158592827, -467279.033426078, 120607.348401113, 307962.038342798]
            },
            {
                name: 'France',
                data: [-534610, -534610, -711012, -711012, -711012, null, null, null],
                color: colors[0]
            },
            {
                name: 'Germany',
                data: [null, null, null, 2515531.50131494, 952852.841407173, null, 587886.381827191, 587886.381827191],
                color: colors[6]
            },
            {
                name: 'Great Britain',
                data: [-422269, -482249, -43794, -43794, -43794, -43807.4093836948, -43807.4093836948, -43807.4093836948],
                color: colors[1]
            },
            {
                name: 'United States',
                data: [-171780, -349214, -454463, -454463, -454463, -411013.073140984, -411013.073140984, -223658.383199299],
                color: colors[4]
            },
            {
                name: 'Others',
                data: [null, -6233, -6291, -6291, -6291, -12458.5509013988, -12458.5509013988, -12458.5509013988],
                color: colors[7]
            }
        ]
    }
};

const flowData = {
    "nodes": [{
            node: 0,
            'name': 'Belgium',
            'color': 'darkgrey',
            'tooltipText': 0
        },
        {
            node: 1,
            'name': 'France',
            'color': '#FFD166',
            'tooltipText': 0
        },
        {
            node: 2,
            'name': 'Great Britain',
            'color': '#07beb8',
            'tooltipText': 0
        },
        {
            node: 3,
            'name': 'Italy',
            'color': 'lightblue',
            'tooltipText': 0
        },
        {
            node: 4,
            'name': 'Russia',
            'color': '#afe3c0',
            'tooltipText': 0
        },
        {
            node: 5,
            'name': 'United States',
            'color': '#427aa1',
            'tooltipText': 0
        },
        {
            node: 6,
            'name': 'Others',
            'color': 'lightgrey',
            'tooltipText': 0
        },
        {
            node: 7,
            'name': 'Belgium',
            'color': 'darkgrey',
            'xPos': 1,
            'tooltipText': 1
        },
        {
            node: 8,
            'name': 'France',
            'color': '#FFD166',
            'tooltipText': 1
        },
        {
            node: 9,
            'name': 'Great Britain',
            'color': '#07beb8',
            'tooltipText': 1
        },
        {
            node: 10,
            'name': 'Italy',
            'color': 'lightblue',
            'tooltipText': 1
        },
        {
            node: 11,
            'name': 'Russia',
            'color': '#afe3c0',
            'tooltipText': 1
        },
        {
            node: 12,
            'name': 'United States',
            'color': '#427aa1',
            'tooltipText': 1
        },
        {
            node: 13,
            'name': 'Others',
            'color': 'lightgrey',
            'tooltipText': 1
        },

        {
            node: 14,
            'name': 'France',
            'color': '#FFD166',
            'tooltipText': 2
        },
        {
            node: 15,
            'name': 'Great Britain',
            'color': '#07beb8',
            'tooltipText': 2
        },
        {
            node: 16,
            'name': 'Italy',
            'color': 'lightblue',
            'tooltipText': 2
        },
        {
            node: 17,
            'name': 'Russia',
            'color': '#afe3c0',
            'tooltipText': 2
        },
        {
            node: 18,
            'name': 'United States',
            'color': '#427aa1',
            'tooltipText': 2
        },
        {
            node: 19,
            'name': 'Others',
            'color': 'lightgrey',
            'tooltipText': 2
        }
    ],
    "links": [{
            'source': 0,
            'target': 8,
            'value': 534610,
            'color': '#FFD166'
        },
        {
            'source': 2,
            'target': 8,
            'value': 431376,
            'color': '#FFD166'
        },
        {
            'source': 3,
            'target': 8,
            'value': 171577,
            'color': '#FFD166'
        },
        {
            'source': 4,
            'target': 8,
            'value': 955157,
            'color': '#FFD166'
        },
        {
            'source': 5,
            'target': 8,
            'value': 382719,
            'color': '#FFD166'
        },
        {
            'source': 6,
            'target': 8,
            'value': 672798,
            'color': '#FFD166'
        },

        {
            'source': 0,
            'target': 9,
            'value': 422269,
            'color': '#07beb8'
        },
        {
            'source': 1,
            'target': 9,
            'value': 2114228,
            'color': '#07beb8'
        },
        {
            'source': 3,
            'target': 9,
            'value': 2007322,
            'color': '#07beb8'
        },
        {
            'source': 4,
            'target': 9,
            'value': 3737005,
            'color': '#07beb8'
        },
        {
            'source': 6,
            'target': 9,
            'value': 1026666,
            'color': '#07beb8'
        },

        {
            'source': 1,
            'target': 10,
            'value': 96625,
            'color': 'lightblue'
        },
        {
            'source': 2,
            'target': 10,
            'value': 152314,
            'color': 'lightblue'
        },
        {
            'source': 4,
            'target': 10,
            'value': 6972,
            'color': 'lightblue'
        },
        {
            'source': 5,
            'target': 10,
            'value': 8369,
            'color': 'lightblue'
        },

        {
            'source': 2,
            'target': 11,
            'value': 1265160,
            'color': '#afe3c0'
        },

        {
            'source': 0,
            'target': 12,
            'value': 171780,
            'color': '#427aa1'
        },
        {
            'source': 1,
            'target': 12,
            'value': 1970000,
            'color': '#427aa1'
        },
        {
            'source': 2,
            'target': 12,
            'value': 3696000,
            'color': '#427aa1'
        },
        {
            'source': 3,
            'target': 12,
            'value': 1031000,
            'color': '#427aa1'
        },
        {
            'source': 4,
            'target': 12,
            'value': 187730,
            'color': '#427aa1'
        },
        {
            'source': 6,
            'target': 12,
            'value': 20605,
            'color': '#427aa1'
        },

        {
            'source': 2,
            'target': 13,
            'value': 537223,
            'color': 'lightgrey'
        },
        {
            'source': 3,
            'target': 13,
            'value': 176,
            'color': 'lightgrey'
        },
        {
            'source': 6,
            'target': 13,
            'value': 36,
            'color': 'lightgrey'
        },

        {
            'source': 7,
            'target': 14,
            'value': 534610,
            'color': 'darkgrey'
        },
        {
            'source': 7,
            'target': 15,
            'value': 422269,
            'color': 'darkgrey'
        },
        {
            'source': 7,
            'target': 18,
            'value': 171780,
            'color': 'darkgrey'
        },

        {
            'source': 8,
            'target': 15,
            'value': 2114228,
            'color': '#FFD166'
        },
        {
            'source': 8,
            'target': 16,
            'value': 96625,
            'color': '#FFD166'
        },
        {
            'source': 8,
            'target': 18,
            'value': 1970000,
            'color': '#FFD166'
        },

        {
            'source': 9,
            'target': 14,
            'value': 431376,
            'color': '#07beb8'
        },
        {
            'source': 9,
            'target': 16,
            'value': 152314,
            'color': '#07beb8'
        },
        {
            'source': 9,
            'target': 17,
            'value': 1265160,
            'color': '#07beb8'
        },
        {
            'source': 9,
            'target': 18,
            'value': 3696000,
            'color': '#07beb8'
        },
        {
            'source': 9,
            'target': 19,
            'value': 537223,
            'color': '#07beb8'
        },

        {
            'source': 10,
            'target': 14,
            'value': 171577,
            'color': 'lightblue'
        },
        {
            'source': 10,
            'target': 15,
            'value': 2007322,
            'color': 'lightblue'
        },
        {
            'source': 10,
            'target': 18,
            'value': 1031000,
            'color': 'lightblue'
        },
        {
            'source': 10,
            'target': 19,
            'value': 176,
            'color': 'lightblue'
        },

        {
            'source': 11,
            'target': 14,
            'value': 955157,
            'color': '#afe3c0'
        },
        {
            'source': 11,
            'target': 15,
            'value': 3737005,
            'color': '#afe3c0'
        },
        {
            'source': 11,
            'target': 16,
            'value': 6972,
            'color': '#afe3c0'
        },
        {
            'source': 11,
            'target': 18,
            'value': 187730,
            'color': '#afe3c0'
        },

        {
            'source': 12,
            'target': 14,
            'value': 382719,
            'color': '#427aa1'
        },
        {
            'source': 12,
            'target': 16,
            'value': 8369,
            'color': '#427aa1'
        },

        {
            'source': 13,
            'target': 14,
            'value': 672798,
            'color': 'darkgrey'
        },
        {
            'source': 13,
            'target': 15,
            'value': 1026666,
            'color': 'darkgrey'
        },
        {
            'source': 13,
            'target': 18,
            'value': 20605,
            'color': 'darkgrey'
        },
        {
            'source': 13,
            'target': 19,
            'value': 36,
            'color': 'darkgrey'
        },
    ]
};