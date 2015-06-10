/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/1/',
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
                            id: '_6',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px']
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px']
                        },
                        {
                            id: '_14',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"14.png",'0px','0px'],
                            transform: [[],['-24'],[],[],['17.7083%','80.2083%']]
                        },
                        {
                            id: '_11',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11.png",'0px','0px']
                        },
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['0px', '-268px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px']
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['-208px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px']
                        },
                        {
                            id: '_13',
                            type: 'image',
                            rect: ['-217px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"13.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1280px', '800px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${_13}",
                            '-217px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${_9}",
                            '-208px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            3000,
                            "easeOutQuint",
                            "${_7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            0,
                            410,
                            "easeOutCirc",
                            "${_14}",
                            '-24deg',
                            '0deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            410,
                            340,
                            "easeOutCirc",
                            "${_14}",
                            '0deg',
                            '-24deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            750,
                            300,
                            "easeOutElastic",
                            "${_14}",
                            '-24deg',
                            '0deg'
                        ],
                        [
                            "eid12",
                            "opacity",
                            2000,
                            90,
                            "easeOutBounce",
                            "${_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            2000,
                            1000,
                            "easeOutBounce",
                            "${_12}",
                            '-268px',
                            '-1px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/animation_edgeActions.js");
})("EDGE-41211846");
