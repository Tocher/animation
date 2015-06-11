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
                            id: 'Untitled-12',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-12.png",'0px','0px']
                        },
                        {
                            id: '_55',
                            type: 'image',
                            rect: ['0px', '670px', '691px', '95px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            autoOrient: false,
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                            transform: [[],['-11'],[],[],['24.375%','68.75%']]
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['0px', '-122px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '-169px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                            transform: [[],[],[],[],['11.4843%','81.5%']]
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
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "rotateZ",
                            1545,
                            205,
                            "easeOutBounce",
                            "${_4}",
                            '-11deg',
                            '12deg'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            1750,
                            195,
                            "easeOutBounce",
                            "${_4}",
                            '12deg',
                            '-11deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            1945,
                            110,
                            "easeOutCirc",
                            "${_4}",
                            '-11deg',
                            '13deg'
                        ],
                        [
                            "eid16",
                            "opacity",
                            0,
                            90,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${_3}",
                            '-122px',
                            '0px'
                        ],
                        [
                            "eid35",
                            "location",
                            2000,
                            1000,
                            "easeOutCirc",
                            "${_4}",
                            [[312, 550, 0, 0, 0, 0,0],[305.18, 628.21, -66.75, 109.96, -74.69, 123.03,81.43],[207.67, 737.59, -65.66, 214.15, -31.31, 102.1,228.91],[224, 837, 0, 0, 0, 0,335.29]]
                        ],
                        [
                            "eid32",
                            "opacity",
                            945,
                            55,
                            "easeOutBounce",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${_2}",
                            '-169px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/history_edgeActions.js");
})("EDGE-34533036");
