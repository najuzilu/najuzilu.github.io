var countryData = {
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