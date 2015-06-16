/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/8/',
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
                            id: '_1',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '-265px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                            transform: [[],[],[],[],['29.375%','29.25%']]
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['-208px', '0px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                            transform: [[],[],[],[],['9.06%','29.25%']]
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['0px', '264px', '1280px', '542px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
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
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "left",
                            0,
                            1250,
                            "easeOutBounce",
                            "${_3}",
                            '-208px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1387,
                            363,
                            "easeInOutBounce",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            0,
                            353,
                            "easeOutBounce",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "top",
                            1250,
                            1250,
                            "easeOutBounce",
                            "${_2}",
                            '-265px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/yroki_edgeActions.js");
})("EDGE-38605189");
