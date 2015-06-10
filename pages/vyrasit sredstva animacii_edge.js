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
                            id: '_1',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                            transform: [[],[],[],[],['16.7187%','59.125%']]
                        },
                        {
                            id: 'Untitled-1-Recovered',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1-Recovered.png",'0px','0px'],
                            transform: [[],[],[],[],['16.5625%','59.25%']]
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                            transform: [[],[],[],[],['16.5625%','59.25%']]
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
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "location",
                            1500,
                            1500,
                            "easeInOutBack",
                            "${Untitled-1-Recovered}",
                            [[212, 474, 0, 0, 0, 0,0],[166, 694.64, 0, 248.2, 0, 328.42,226.55],[212, 866, 0, 0, 0, 0,405.34]]
                        ],
                        [
                            "eid12",
                            "rotateZ",
                            2956,
                            44,
                            "easeInOutBack",
                            "${_3}",
                            '0deg',
                            '19deg'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            3000,
                            500,
                            "swing",
                            "${_3}",
                            '19deg',
                            '-24deg'
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            3500,
                            500,
                            "swing",
                            "${_3}",
                            '-24deg',
                            '14deg'
                        ],
                        [
                            "eid14",
                            "rotateZ",
                            4000,
                            250,
                            "swing",
                            "${_3}",
                            '14deg',
                            '-9deg'
                        ],
                        [
                            "eid16",
                            "rotateZ",
                            4250,
                            250,
                            "swing",
                            "${_3}",
                            '-9deg',
                            '0deg'
                        ],
                        [
                            "eid2",
                            "location",
                            0,
                            1500,
                            "easeInOutBack",
                            "${_2}",
                            [[212, 474, 0, 0, 0, 0,0],[228.72, 642.38, -43.03, 240.96, -59.31, 332.15,172.16],[142, 866, 0, 0, 0, 0,412.56]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/vyrasit%20sredstva%20animacii_edgeActions.js");
})("EDGE-37199508");
