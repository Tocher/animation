/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/2/',
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
                            id: '_3',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['1px', '162px', '905px', '566px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
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
                    duration: 3675,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "opacity",
                            250,
                            45,
                            "linear",
                            "${_5}",
                            '0.000000',
                            '0.78861788617886'
                        ],
                        [
                            "eid5",
                            "opacity",
                            640,
                            40,
                            "linear",
                            "${_5}",
                            '0.78861788617886',
                            '0'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1750,
                            30,
                            "linear",
                            "${_5}",
                            '0.000000',
                            '0.8780487804878'
                        ],
                        [
                            "eid10",
                            "opacity",
                            3615,
                            60,
                            "linear",
                            "${_5}",
                            '0.8780487804878',
                            '0'
                        ],
                        [
                            "eid28",
                            "top",
                            345,
                            0,
                            "linear",
                            "${_5}",
                            '162px',
                            '162px'
                        ],
                        [
                            "eid25",
                            "width",
                            345,
                            0,
                            "linear",
                            "${_5}",
                            '905px',
                            '905px'
                        ],
                        [
                            "eid23",
                            "height",
                            345,
                            0,
                            "linear",
                            "${_5}",
                            '566px',
                            '566px'
                        ],
                        [
                            "eid29",
                            "left",
                            345,
                            0,
                            "linear",
                            "${_5}",
                            '1px',
                            '1px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/bellarusian%20anim_edgeActions.js");
})("EDGE-40135263");
