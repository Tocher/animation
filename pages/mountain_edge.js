/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/4/',
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
                            id: '_10',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px']
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['-800px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px']
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['880px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px']
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['-905px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px']
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['1010px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '323px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['-647px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['582px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
                        },
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['305px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
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
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "left",
                            3500,
                            1000,
                            "easeOutBack",
                            "${_2}",
                            '582px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "top",
                            2000,
                            1000,
                            "easeOutBack",
                            "${_4}",
                            '323px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "left",
                            3000,
                            1000,
                            "easeOutBack",
                            "${_1}",
                            '305px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${_8}",
                            '880px',
                            '0px'
                        ],
                        [
                            "eid16",
                            "opacity",
                            2500,
                            1000,
                            "easeOutBack",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "left",
                            4000,
                            1000,
                            "easeOutBack",
                            "${_7}",
                            '-905px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            1000,
                            "easeOutBack",
                            "${_9}",
                            '-800px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "left",
                            1500,
                            1000,
                            "easeOutBack",
                            "${_3}",
                            '-647px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "left",
                            1000,
                            1000,
                            "easeOutBack",
                            "${_6}",
                            '1010px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/mountain_edgeActions.js");
})("EDGE-17207283");
