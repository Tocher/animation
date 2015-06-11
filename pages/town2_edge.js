/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
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
                            id: '_5',
                            type: 'image',
                            rect: ['380px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
                        },
                        {
                            id: '_62',
                            type: 'image',
                            rect: ['723px', '-19px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"62.png",'0px','0px']
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['723px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px']
                        },
                        {
                            id: '_11',
                            type: 'image',
                            rect: ['1357px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11.png",'0px','0px']
                        },
                        {
                            id: '_13',
                            type: 'image',
                            rect: ['-1029px', '-4px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"13.png",'0px','0px']
                        },
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['957px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['1057px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px']
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['-986px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px']
                        },
                        {
                            id: '_8',
                            type: 'image',
                            rect: ['-1211px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px']
                        },
                        {
                            id: '_15',
                            type: 'image',
                            rect: ['-763px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"15.png",'0px','0px']
                        },
                        {
                            id: '_14',
                            type: 'image',
                            rect: ['-414px', '18px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"14.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['-1049px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['-680px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
                        },
                        {
                            id: '_16',
                            type: 'image',
                            rect: ['-1346px', '-7px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"16.png",'0px','0px']
                        },
                        {
                            id: '_20',
                            type: 'image',
                            rect: ['-886px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20.png",'0px','0px']
                        },
                        {
                            id: '_19',
                            type: 'image',
                            rect: ['-1077px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"19.png",'0px','0px']
                        },
                        {
                            id: '_18',
                            type: 'image',
                            rect: ['-926px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"18.png",'0px','0px']
                        },
                        {
                            id: '_17',
                            type: 'image',
                            rect: ['-1343px', '0px', '1280px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"17.png",'0px','0px']
                        },
                        {
                            id: '_22_symbol_1',
                            symbolName: '_22_symbol_1',
                            type: 'rect',
                            rect: ['-116px', '517px', '115px', '258px', 'auto', 'auto'],
                            transform: [[],[],[],['1.13729','1.13729']]
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
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid330",
                            "left",
                            6000,
                            4000,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            '-116px',
                            '1306px'
                        ],
                        [
                            "eid10",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${_8}",
                            '-1211px',
                            '0px'
                        ],
                        [
                            "eid227",
                            "top",
                            7250,
                            0,
                            "easeOutBack",
                            "${_16}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid34",
                            "left",
                            7000,
                            1000,
                            "easeOutBack",
                            "${_11}",
                            '1357px',
                            '0px'
                        ],
                        [
                            "eid16",
                            "left",
                            3500,
                            1000,
                            "easeOutBack",
                            "${_15}",
                            '-763px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "left",
                            4000,
                            1000,
                            "easeOutBack",
                            "${_14}",
                            '-414px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            5000,
                            1000,
                            "easeOutBack",
                            "${_7}",
                            '723px',
                            '0px'
                        ],
                        [
                            "eid47",
                            "left",
                            3736,
                            1000,
                            "easeOutBack",
                            "${_62}",
                            '1446px',
                            '723px'
                        ],
                        [
                            "eid48",
                            "left",
                            5500,
                            1000,
                            "easeOutBack",
                            "${_62}",
                            '723px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "left",
                            2500,
                            1000,
                            "easeOutBack",
                            "${_13}",
                            '-1029px',
                            '0px'
                        ],
                        [
                            "eid225",
                            "top",
                            7250,
                            0,
                            "easeOutBack",
                            "${_13}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid44",
                            "left",
                            9000,
                            1000,
                            "easeOutBack",
                            "${_17}",
                            '-1343px',
                            '0px'
                        ],
                        [
                            "eid36",
                            "left",
                            7500,
                            1000,
                            "easeOutBack",
                            "${_20}",
                            '-886px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            1500,
                            1000,
                            "easeOutBack",
                            "${_16}",
                            '-1346px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "left",
                            6500,
                            1000,
                            "easeOutBack",
                            "${_10}",
                            '1057px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "left",
                            3000,
                            1000,
                            "easeOutBack",
                            "${_9}",
                            '-986px',
                            '0px'
                        ],
                        [
                            "eid28",
                            "left",
                            6000,
                            1000,
                            "easeOutBack",
                            "${_12}",
                            '957px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "left",
                            4500,
                            1000,
                            "easeOutBack",
                            "${_5}",
                            '380px',
                            '0px'
                        ],
                        [
                            "eid328",
                            "-webkit-transform-origin",
                            6000,
                            0,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid366",
                            "-moz-transform-origin",
                            6000,
                            0,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid367",
                            "-ms-transform-origin",
                            6000,
                            0,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid368",
                            "msTransformOrigin",
                            6000,
                            0,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid369",
                            "-o-transform-origin",
                            6000,
                            0,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid370",
                            "transform-origin",
                            6000,
                            0,
                            "easeOutSine",
                            "${_22_symbol_1}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            1000,
                            "easeOutBack",
                            "${_2}",
                            '-680px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "left",
                            8500,
                            1000,
                            "easeOutBack",
                            "${_18}",
                            '-926px',
                            '0px'
                        ],
                        [
                            "eid38",
                            "left",
                            8000,
                            1000,
                            "easeOutBack",
                            "${_19}",
                            '-1077px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "left",
                            1000,
                            1000,
                            "easeOutBack",
                            "${_4}",
                            '-1049px',
                            '0px'
                        ]
                    ]
                }
            },
            "_21_symbol_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_21',
                            type: 'image',
                            rect: ['0px', '0px', '923px', '258px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/21.png', '0px', '0px', '923px', '258px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '115px', '258px']
                        }
                    }
                },
                timeline: {
                    duration: 7889,
                    autoPlay: true,
                    data: [
                        [
                            "eid49",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_21}",
                            '0px',
                            '258px'
                        ],
                        [
                            "eid51",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${_21}",
                            [0,0],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid52",
                            "background-position",
                            62,
                            0,
                            "linear",
                            "${_21}",
                            [-0,-0],
                            [-115,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid53",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${_21}",
                            [-115,-0],
                            [-230,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid54",
                            "background-position",
                            187,
                            0,
                            "linear",
                            "${_21}",
                            [-230,-0],
                            [-345,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid55",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${_21}",
                            [-345,-0],
                            [-460,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid56",
                            "background-position",
                            313,
                            0,
                            "linear",
                            "${_21}",
                            [-460,-0],
                            [-575,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid57",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${_21}",
                            [-575,-0],
                            [-690,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid58",
                            "background-position",
                            438,
                            0,
                            "linear",
                            "${_21}",
                            [-690,-0],
                            [-805,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid50",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_21}",
                            '0px',
                            '115px'
                        ]
                    ]
                }
            },
            "_22_symbol_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_22',
                            type: 'image',
                            rect: ['0px', '0px', '923px', '258px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/22.png', '0px', '0px', '923px', '258px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '115px', '258px']
                        }
                    }
                },
                timeline: {
                    duration: 440,
                    autoPlay: true,
                    data: [
                        [
                            "eid305",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${_22}",
                            [0,0],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid306",
                            "background-position",
                            62,
                            0,
                            "linear",
                            "${_22}",
                            [-0,-0],
                            [-115,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid307",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${_22}",
                            [-115,-0],
                            [-230,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid308",
                            "background-position",
                            188,
                            0,
                            "linear",
                            "${_22}",
                            [-230,-0],
                            [-345,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid309",
                            "background-position",
                            251,
                            0,
                            "linear",
                            "${_22}",
                            [-345,-0],
                            [-460,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid310",
                            "background-position",
                            314,
                            0,
                            "linear",
                            "${_22}",
                            [-460,-0],
                            [-575,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid311",
                            "background-position",
                            377,
                            0,
                            "linear",
                            "${_22}",
                            [-575,-0],
                            [-690,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid312",
                            "background-position",
                            440,
                            0,
                            "linear",
                            "${_22}",
                            [-690,-0],
                            [-805,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid304",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_22}",
                            '0px',
                            '115px'
                        ],
                        [
                            "eid303",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_22}",
                            '0px',
                            '258px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("town2_edgeActions.js");
})("EDGE-10026752");
