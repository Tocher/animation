/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/3/',
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
                            id: '_42',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"42.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['-61px', '70px', '1167px', '729px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                            transform: [[],['13'],[],[],['24.53%','68.9%']]
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['-48px', '13px', '1167px', '729px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['-48px', '-45px', '1167px', '729px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
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
                    duration: 2180,
                    autoPlay: true,
                    data: [
                        [
                            "eid86",
                            "rotateZ",
                            1000,
                            50,
                            "easeOutQuad",
                            "${_4}",
                            '13deg',
                            '-12deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            1050,
                            45,
                            "easeOutQuad",
                            "${_4}",
                            '-12deg',
                            '10deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            1095,
                            50,
                            "easeOutQuad",
                            "${_4}",
                            '10deg',
                            '-6deg'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            1145,
                            105,
                            "easeOutQuad",
                            "${_4}",
                            '-6deg',
                            '9deg'
                        ],
                        [
                            "eid104",
                            "rotateZ",
                            1250,
                            340,
                            "easeOutQuad",
                            "${_4}",
                            '9deg',
                            '-9deg'
                        ],
                        [
                            "eid83",
                            "opacity",
                            0,
                            40,
                            "easeOutBounce",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "top",
                            797,
                            703,
                            "easeOutBounce",
                            "${_3}",
                            '13px',
                            '71px'
                        ],
                        [
                            "eid100",
                            "location",
                            1145,
                            1035,
                            "easeOutSine",
                            "${_4}",
                            [[225.28, 572.11, 0, 0, 0, 0,0],[169.54, 621.63, -32.77, 92.58, -57.99, 163.81,79.93],[203.28, 723.23, -30.38, 165.85, -19.77, 107.95,189.82],[85.27, 829.42, 0, 0, 0, 0,352.82]]
                        ],
                        [
                            "eid81",
                            "opacity",
                            445,
                            352,
                            "easeOutBounce",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${_2}",
                            '-45px',
                            '71px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/history_edgeActions.js");
})("EDGE-34533036");
