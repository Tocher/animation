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
                            id: '_15',
                            type: 'image',
                            rect: ['0px', '-1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"15.png",'0px','0px']
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['-33px', '99px', '1120px', '700px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px']
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['-33px', '99px', '1120px', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px']
                        },
                        {
                            id: '_11',
                            type: 'image',
                            rect: ['-33px', '99px', '1120px', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11.png",'0px','0px']
                        },
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['-33px', '-81px', '1120px', '700px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['-33px', '99px', '1120px', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px']
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['-241px', '99px', '1120px', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px']
                        },
                        {
                            id: '_13',
                            type: 'image',
                            rect: ['-250px', '99px', '1120px', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"13.png",'0px','0px']
                        },
                        {
                            id: '_14',
                            type: 'image',
                            rect: ['-17px', '99px', '1120px', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"14.png",'0px','0px'],
                            transform: [[],['-24'],[],[],['17.7083%','80.2083%']]
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
                            "height",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid72",
                            "top",
                            1750,
                            1250,
                            "easeOutBounce",
                            "${_12}",
                            '-81px',
                            '105px'
                        ],
                        [
                            "eid59",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_9}",
                            '1120px',
                            '1120px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_9}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid57",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_9}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid53",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_14}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid56",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_14}",
                            '1120px',
                            '1120px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${_9}",
                            '-241px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_14}",
                            '-17px',
                            '-17px'
                        ],
                        [
                            "eid63",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            '-33px',
                            '-33px'
                        ],
                        [
                            "eid52",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_13}",
                            '1120px',
                            '1120px'
                        ],
                        [
                            "eid74",
                            "opacity",
                            1750,
                            208,
                            "easeOutBounce",
                            "${_12}",
                            '0',
                            '1'
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
                            "eid51",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${_13}",
                            '-250px',
                            '-217px'
                        ],
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
                            "eid49",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_13}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid44",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            '1120px',
                            '1120px'
                        ],
                        [
                            "eid70",
                            "left",
                            1750,
                            1250,
                            "easeOutBounce",
                            "${_12}",
                            '-33px',
                            '-34px'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_13}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid66",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_14}",
                            '99px',
                            '99px'
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
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/animation_edgeActions.js");
})("EDGE-41211846");
