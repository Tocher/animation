/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/7/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['-50px', '74px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                            transform: [[],['-17'],[],['0.71037','0.71037'],['16.7187%','59.125%']]
                        },
                        {
                            id: 'Untitled-1-Recovered',
                            type: 'image',
                            rect: ['-50px', '74px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1-Recovered.png",'0px','0px'],
                            transform: [[],['-13'],[],['0.71037','0.71037'],['16.5625%','59.25%']]
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['-50px', '74px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                            transform: [[],['-18'],[],['0.71037','0.71037'],['16.5625%','59.25%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2125,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "rotateZ",
                            1000,
                            145,
                            "easeInOutBack",
                            "${Untitled-1-Recovered}",
                            '-22deg',
                            '19deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            1145,
                            105,
                            "easeInOutBack",
                            "${Untitled-1-Recovered}",
                            '19deg',
                            '-17deg'
                        ],
                        [
                            "eid38",
                            "rotateZ",
                            1250,
                            130,
                            "easeInOutBack",
                            "${Untitled-1-Recovered}",
                            '-17deg',
                            '17deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            1380,
                            310,
                            "easeInOutBack",
                            "${Untitled-1-Recovered}",
                            '17deg',
                            '-13deg'
                        ],
                        [
                            "eid29",
                            "rotateZ",
                            0,
                            200,
                            "easeInOutBack",
                            "${_2}",
                            '18deg',
                            '-18deg'
                        ],
                        [
                            "eid30",
                            "rotateZ",
                            200,
                            200,
                            "easeInOutBack",
                            "${_2}",
                            '-18deg',
                            '15deg'
                        ],
                        [
                            "eid33",
                            "rotateZ",
                            400,
                            200,
                            "easeInOutBack",
                            "${_2}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            1750,
                            125,
                            "easeInOutQuad",
                            "${_3}",
                            '-17deg',
                            '16deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            1875,
                            125,
                            "easeInOutQuad",
                            "${_3}",
                            '16deg',
                            '-11deg'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            2000,
                            125,
                            "easeInOutQuad",
                            "${_3}",
                            '-11deg',
                            '10deg'
                        ],
                        [
                            "eid32",
                            "location",
                            400,
                            1100,
                            "easeInOutBack",
                            "${_2}",
                            [[162, 547.83, 0, 0, 0, 0,0],[185.12, 638.21, -14.27, 128.52, -19.01, 171.16,95.56],[125.38, 760.15, -47.98, 181.29, -35.95, 135.85,232.29],[124.3, 887.34, 0, 0, 0, 0,360.48]]
                        ],
                        [
                            "eid41",
                            "location",
                            1380,
                            745,
                            "easeInOutBack",
                            "${Untitled-1-Recovered}",
                            [[162, 547.83, 0, 0, 0, 0,0],[131.35, 622.81, 3.59, 145.28, 3.66, 148.09,83.49],[198.85, 775.87, 28.62, 158.5, 27.86, 154.32,252.06],[170.2, 879.15, 0, 0, 0, 0,361.87]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/vyrasit%20sredstva%20animacii_edgeActions.js");
})("EDGE-37199508");
