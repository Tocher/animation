/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/6/',
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
                            id: '_18',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"18.png",'0px','0px']
                        },
                        {
                            id: '_19',
                            type: 'image',
                            rect: ['-760px', '800px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"19.png",'0px','0px']
                        },
                        {
                            id: '_23',
                            type: 'image',
                            rect: ['-1212px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"23.png",'0px','0px']
                        },
                        {
                            id: '_31',
                            type: 'image',
                            rect: ['0px', '360px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"31.png",'0px','0px']
                        },
                        {
                            id: '_22',
                            type: 'image',
                            rect: ['-1096px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"22.png",'0px','0px']
                        },
                        {
                            id: '_21',
                            type: 'image',
                            rect: ['-728px', '8px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"21.png",'0px','0px']
                        },
                        {
                            id: '_20',
                            type: 'image',
                            rect: ['0px', '228px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20.png",'0px','0px']
                        },
                        {
                            id: '_32',
                            type: 'image',
                            rect: ['0px', '288px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"32.png",'0px','0px']
                        },
                        {
                            id: '_27',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"27.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_26',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"26.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_25',
                            type: 'image',
                            rect: ['0px', '26px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"25.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_24',
                            type: 'image',
                            rect: ['0px', '26px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"24.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_35',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"35.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_33',
                            type: 'image',
                            rect: ['0px', '7px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"33.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_34',
                            type: 'image',
                            rect: ['0px', '377px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"34.png",'0px','0px']
                        },
                        {
                            id: '_30',
                            type: 'image',
                            rect: ['-336px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"30.png",'0px','0px']
                        },
                        {
                            id: '_29',
                            type: 'image',
                            rect: ['-948px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"29.png",'0px','0px']
                        },
                        {
                            id: '_28',
                            type: 'image',
                            rect: ['-600px', '-23px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"28.png",'0px','0px'],
                            transform: [[],[],[],['0.875','0.875']]
                        },
                        {
                            id: '_36',
                            type: 'image',
                            rect: ['-524px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"36.png",'0px','0px']
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
                    duration: 9435,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "top",
                            6065,
                            0,
                            "easeOutBack",
                            "${_21}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid12",
                            "top",
                            2500,
                            1000,
                            "easeOutBack",
                            "${_32}",
                            '288px',
                            '0px'
                        ],
                        [
                            "eid46",
                            "scaleX",
                            6065,
                            1000,
                            "easeOutBack",
                            "${_33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            5500,
                            447,
                            "easeOutBack",
                            "${_24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "easeOutBack",
                            "${_20}",
                            '228px',
                            '0px'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_35}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "top",
                            5947,
                            447,
                            "easeOutBack",
                            "${_25}",
                            '26px',
                            '11px'
                        ],
                        [
                            "eid60",
                            "top",
                            6394,
                            671,
                            "easeOutBack",
                            "${_25}",
                            '11px',
                            '25px'
                        ],
                        [
                            "eid6",
                            "left",
                            1500,
                            1000,
                            "easeOutBack",
                            "${_29}",
                            '-948px',
                            '0px'
                        ],
                        [
                            "eid16",
                            "left",
                            3500,
                            1000,
                            "easeOutBack",
                            "${_23}",
                            '-1212px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${_30}",
                            '-336px',
                            '0px'
                        ],
                        [
                            "eid50",
                            "top",
                            6500,
                            1000,
                            "easeOutBack",
                            "${_34}",
                            '377px',
                            '16px'
                        ],
                        [
                            "eid14",
                            "top",
                            3000,
                            1000,
                            "easeOutBack",
                            "${_31}",
                            '360px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            5500,
                            447,
                            "easeOutBack",
                            "${_24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            6065,
                            1000,
                            "easeOutBack",
                            "${_33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "left",
                            4500,
                            1000,
                            "easeOutBack",
                            "${_21}",
                            '-728px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_35}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            5500,
                            447,
                            "easeOutBack",
                            "${_25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "left",
                            7500,
                            1935,
                            "easeOutExpo",
                            "${_36}",
                            '-524px',
                            '840px'
                        ],
                        [
                            "eid22",
                            "location",
                            5050,
                            1015,
                            "easeOutExpo",
                            "${_19}",
                            [[-120, 1199.53, 0, 0, 0, 0,0],[157.39, 546.54, 568.61, -597.84, 571.38, -600.75,716.92],[640, 400.47, 0, 0, 0, 0,1240.24]]
                        ],
                        [
                            "eid36",
                            "scaleX",
                            5500,
                            447,
                            "easeOutBack",
                            "${_25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "top",
                            5947,
                            447,
                            "easeOutBack",
                            "${_24}",
                            '26px',
                            '11px'
                        ],
                        [
                            "eid61",
                            "top",
                            6394,
                            671,
                            "easeOutBack",
                            "${_24}",
                            '11px',
                            '25px'
                        ],
                        [
                            "eid4",
                            "left",
                            1000,
                            1000,
                            "easeOutBack",
                            "${_28}",
                            '-600px',
                            '-48px'
                        ],
                        [
                            "eid18",
                            "left",
                            4000,
                            1000,
                            "easeOutBack",
                            "${_22}",
                            '-1096px',
                            '0px'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_27}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/village2_edgeActions.js");
})("EDGE-10542059");
