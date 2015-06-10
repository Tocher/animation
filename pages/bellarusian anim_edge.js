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
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
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
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            640,
                            40,
                            "linear",
                            "${_5}",
                            '1',
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
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            3615,
                            60,
                            "linear",
                            "${_5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/bellarusian%20anim_edgeActions.js");
})("EDGE-40135263");
