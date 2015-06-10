/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/5/',
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
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                            transform: [[],[],[],['1','1.05']]
                        },
                        {
                            id: '_17',
                            type: 'image',
                            rect: ['-29px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"17.png",'0px','0px'],
                            transform: [[],[],['1'],['0','0'],['84.8437%','67.875%']]
                        },
                        {
                            id: '_172',
                            type: 'image',
                            rect: ['466px', '1px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"172.png",'0px','0px']
                        },
                        {
                            id: '_15',
                            type: 'image',
                            rect: ['-1280px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"15.png",'0px','0px']
                        },
                        {
                            id: '_16',
                            type: 'image',
                            rect: ['1288px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"16.png",'0px','0px']
                        },
                        {
                            id: '_14',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"14.png",'0px','0px'],
                            transform: [[],['-11'],[],['0','0'],['78.2812%','22.875%']]
                        },
                        {
                            id: '_13',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"13.png",'0px','0px'],
                            transform: [[],[],[],[],['97.5%','35.625%']]
                        },
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px'],
                            transform: [[],[],[],[],['88.125%','29.125%']]
                        },
                        {
                            id: '_11',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"11.png",'0px','0px'],
                            transform: [[],[],[],[],['81.4062%','14.125%']]
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px'],
                            transform: [[],[],[],[],['68.125%','28.875%']]
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px'],
                            transform: [[],[],[],[],['62.5%','42.125%']]
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px'],
                            transform: [[],[],[],[],['6.25%','38.875%']]
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['0px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px'],
                            transform: [[],[],[],[],['18.5937%','20.125%']]
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['0px', '-267px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px'],
                            transform: [[],[],[],[],['42.1875%','25.375%']]
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '-275px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px'],
                            transform: [[],[],[],[],['58.75%','23.125%']]
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '-315px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                            transform: [[],[],[],[],['51.5625%','29.875%']]
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['-222px', '-441px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                            transform: [[],[],[],[],['45.4687%','41.875%']]
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '-307px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
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
                    duration: 14000,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            2866,
                            1105,
                            "easeOutQuad",
                            "${_14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "top",
                            500,
                            1000,
                            "easeOutBounce",
                            "${_3}",
                            '-441px',
                            '-29px'
                        ],
                        [
                            "eid7",
                            "top",
                            500,
                            1000,
                            "easeOutBounce",
                            "${_16}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${_2}",
                            '-307px',
                            '-7px'
                        ],
                        [
                            "eid49",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "scaleY",
                            2866,
                            1105,
                            "easeOutQuad",
                            "${_14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            1000,
                            1250,
                            "easeOutBounce",
                            "${_4}",
                            '-315px',
                            '-7px'
                        ],
                        [
                            "eid41",
                            "top",
                            1500,
                            1366,
                            "easeOutBounce",
                            "${_5}",
                            '-275px',
                            '-7px'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            2000,
                            1000,
                            "easeOutQuad",
                            "${_17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            500,
                            1000,
                            "easeOutBounce",
                            "${_16}",
                            '1288px',
                            '0px'
                        ],
                        [
                            "eid157",
                            "left",
                            9416,
                            4584,
                            "easeOutCirc",
                            "${_172}",
                            '466px',
                            '-1298px'
                        ],
                        [
                            "eid149",
                            "left",
                            4000,
                            5416,
                            "easeOutCirc",
                            "${_17}",
                            '-29px',
                            '-1341px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "top",
                            2250,
                            1250,
                            "easeOutBounce",
                            "${_6}",
                            '-267px',
                            '-7px'
                        ],
                        [
                            "eid11",
                            "left",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${_15}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            2000,
                            1000,
                            "easeOutQuad",
                            "${_17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            3500,
                            1000,
                            "easeOutBounce",
                            "${_13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "rotateZ",
                            3971,
                            1395,
                            "easeOutQuad",
                            "${_14}",
                            '15deg',
                            '-15deg'
                        ],
                        [
                            "eid179",
                            "rotateZ",
                            5366,
                            1500,
                            "easeOutQuad",
                            "${_14}",
                            '-15deg',
                            '15deg'
                        ],
                        [
                            "eid180",
                            "rotateZ",
                            6866,
                            1500,
                            "easeOutQuad",
                            "${_14}",
                            '15deg',
                            '-15deg'
                        ],
                        [
                            "eid181",
                            "rotateZ",
                            8366,
                            1500,
                            "easeOutQuad",
                            "${_14}",
                            '-15deg',
                            '15deg'
                        ],
                        [
                            "eid182",
                            "rotateZ",
                            9866,
                            916,
                            "easeOutQuad",
                            "${_14}",
                            '15deg',
                            '-11deg'
                        ],
                        [
                            "eid183",
                            "rotateZ",
                            10782,
                            718,
                            "easeOutQuad",
                            "${_14}",
                            '-11deg',
                            '11deg'
                        ],
                        [
                            "eid184",
                            "rotateZ",
                            11500,
                            1000,
                            "easeOutQuad",
                            "${_14}",
                            '11deg',
                            '-10deg'
                        ],
                        [
                            "eid185",
                            "rotateZ",
                            12500,
                            1000,
                            "easeOutQuad",
                            "${_14}",
                            '-10deg',
                            '9deg'
                        ],
                        [
                            "eid186",
                            "rotateZ",
                            13500,
                            500,
                            "easeOutQuad",
                            "${_14}",
                            '9deg',
                            '-8deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pages/sea_edgeActions.js");
})("EDGE-38852856");
