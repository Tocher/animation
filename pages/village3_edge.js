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
                            rect: ['-856px', '800px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"19.png",'0px','0px'],
                            transform: [[],[],[],[],['80.052%','25.2499%']]
                        },
                        {
                            id: '_23',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"23.png",'0px','0px'],
                            transform: [[],[],[],['0','0'],['70.9375%','48.9999%']]
                        },
                        {
                            id: '_22',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"22.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_21',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"21.png",'0px','0px'],
                            transform: [[],[],[],['0','0'],['35.5208%','56.0833%']]
                        },
                        {
                            id: '_31',
                            type: 'image',
                            rect: ['0px', '317px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"31.png",'0px','0px']
                        },
                        {
                            id: '_32',
                            type: 'image',
                            rect: ['0px', '260px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"32.png",'0px','0px']
                        },
                        {
                            id: '_20',
                            type: 'image',
                            rect: ['0px', '167px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20.png",'0px','0px']
                        },
                        {
                            id: '_30',
                            type: 'image',
                            rect: ['-350px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"30.png",'0px','0px']
                        },
                        {
                            id: '_29',
                            type: 'image',
                            rect: ['-883px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"29.png",'0px','0px']
                        },
                        {
                            id: '_28',
                            type: 'image',
                            rect: ['-566px', '-29px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"28.png",'0px','0px'],
                            transform: [[],[],[],['0.92812','0.92812']]
                        },
                        {
                            id: '_27',
                            type: 'image',
                            rect: ['483px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"27.png",'0px','0px']
                        },
                        {
                            id: '_26',
                            type: 'image',
                            rect: ['689px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"26.png",'0px','0px']
                        },
                        {
                            id: '_25',
                            type: 'image',
                            rect: ['-506px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"25.png",'0px','0px']
                        },
                        {
                            id: '_24',
                            type: 'image',
                            rect: ['-461px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"24.png",'0px','0px']
                        },
                        {
                            id: '_36',
                            type: 'image',
                            rect: ['-483px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"36.png",'0px','0px']
                        },
                        {
                            id: '_35',
                            type: 'image',
                            rect: ['-278px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"35.png",'0px','0px']
                        },
                        {
                            id: '_33',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"33.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_34',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"34.png",'0px','0px']
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
                    duration: 12000,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "scaleY",
                            8000,
                            1500,
                            "easeOutBack",
                            "${_33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            3500,
                            1000,
                            "easeOutExpo",
                            "${_23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            8000,
                            1500,
                            "easeOutBack",
                            "${_33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "easeOutExpo",
                            "${_20}",
                            '167px',
                            '0px'
                        ],
                        [
                            "eid50",
                            "left",
                            9500,
                            2500,
                            "easeOutExpo",
                            "${_36}",
                            '-483px',
                            '839px'
                        ],
                        [
                            "eid34",
                            "left",
                            7000,
                            1000,
                            "easeOutBack",
                            "${_24}",
                            '-461px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "left",
                            3000,
                            1000,
                            "easeOutExpo",
                            "${_29}",
                            '-883px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            2000,
                            1000,
                            "easeOutExpo",
                            "${_30}",
                            '-350px',
                            '0px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            9250,
                            435,
                            "easeOutExpo",
                            "${_34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "top",
                            1425,
                            1000,
                            "easeOutExpo",
                            "${_31}",
                            '317px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "left",
                            2425,
                            1000,
                            "easeOutExpo",
                            "${_28}",
                            '-566px',
                            '-46px'
                        ],
                        [
                            "eid36",
                            "left",
                            7500,
                            1000,
                            "easeOutBack",
                            "${_35}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "left",
                            6500,
                            1000,
                            "easeOutBack",
                            "${_26}",
                            '689px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "top",
                            750,
                            1000,
                            "easeOutExpo",
                            "${_32}",
                            '260px',
                            '0px'
                        ],
                        [
                            "eid28",
                            "left",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_27}",
                            '483px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "location",
                            5000,
                            1000,
                            "easeOutBack",
                            "${_19}",
                            [[169.11, 1002, 0, 0, 0, 0,0],[408.71, 259.77, 593.47, -554.93, 683.49, -639.1,796.45],[1024.67, 202, 0, 0, 0, 0,1439.56]]
                        ],
                        [
                            "eid30",
                            "left",
                            6000,
                            1000,
                            "easeOutBack",
                            "${_25}",
                            '-506px',
                            '0px'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            4000,
                            1000,
                            "easeOutExpo",
                            "${_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            4500,
                            1000,
                            "easeOutExpo",
                            "${_21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            3500,
                            1000,
                            "easeOutExpo",
                            "${_23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            4000,
                            1000,
                            "easeOutExpo",
                            "${_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            4500,
                            1000,
                            "easeOutExpo",
                            "${_21}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/village3_edgeActions.js");
})("EDGE-28427582");
