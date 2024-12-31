// var productDetails = [
//     {'id' : 0 ,   'name' : 'Formula 1' ,             'vp' : 21.75 ,    'mrp' : 2378 ,    'd25' : 1857 ,    'd35' : 1649 ,    'd42' : 1503 ,    'd50' : 1337 ,   'qty' : 0},
//     {'id' : 1 ,   'name' : 'PPP - 200g' ,            'vp' : 11.50 ,    'mrp' : 1413 ,    'd25' : 1103 ,    'd35' : 980 ,     'd42' : 893 ,     'd50' : 794 ,    'qty' : 0},
//     {'id' : 2 ,   'name' : 'PPP - 400g' ,            'vp' : 22.50 ,    'mrp' : 2711 ,    'd25' : 2118 ,    'd35' : 1880 ,    'd42' : 1714 ,    'd50' : 1525 ,   'qty' : 0},
//     {'id' : 3 ,   'name' : 'ShakeMate' ,             'vp' : 6.45 ,     'mrp' : 712 ,     'd25' : 624 ,     'd35' : 589 ,     'd42' : 564 ,     'd50' : 536 ,    'qty' : 0},
//     {'id' : 4 ,   'name' : 'Ocular Defence' ,        'vp' : 19.25 ,    'mrp' : 2103 ,    'd25' : 1643 ,    'd35' : 1458 ,    'd42' : 1330 ,    'd50' : 1182 ,   'qty' : 0},
//     {'id' : 5 ,   'name' : 'Male Factor' ,           'vp' : 34.75 ,    'mrp' : 3720 ,    'd25' : 2906 ,    'd35' : 2580 ,    'd42' : 2352 ,    'd50' : 2092 ,   'qty' : 0},
//     {'id' : 6 ,   'name' : "Woman's Choice" ,        'vp' : 12.45 ,    'mrp' : 1357 ,    'd25' : 1060 ,    'd35' : 941 ,     'd42' : 858 ,     'd50' : 763 ,    'qty' : 0},
//     {'id' : 7 ,   'name' : 'Brain Health' ,          'vp' : 15.10 ,    'mrp' : 1597 ,    'd25' : 1247 ,    'd35' : 1108 ,    'd42' : 1010 ,    'd50' : 898 ,    'qty' : 0},
//     {'id' : 8 ,   'name' : 'Skin Booster' ,          'vp' : 38.65 ,    'mrp' : 4266 ,    'd25' : 3478 ,    'd35' : 3163 ,    'd42' : 2943 ,    'd50' : 2691 ,   'qty' : 0},
//     {'id' : 9 ,   'name' : 'Immune Health' ,         'vp' : 15.80 ,    'mrp' : 1668 ,    'd25' : 1302 ,    'd35' : 1156 ,    'd42' : 1054 ,    'd50' : 938 ,    'qty' : 0},
//     {'id' : 10 ,  'name' : 'Afresh' ,                'vp' : 7.80 ,     'mrp' : 885 ,     'd25' : 691 ,     'd35' : 614 ,     'd42' : 559 ,     'd50' : 497 ,    'qty' : 0},
//     {'id' : 11 ,  'name' : 'Afresh Tulsi' ,          'vp' : 7.80 ,     'mrp' : 885 ,     'd25' : 704 ,     'd35' : 632 ,     'd42' : 582 ,     'd50' : 524 ,    'qty' : 0},
//     {'id' : 12 ,  'name' : '24 Hydrate' ,            'vp' : 14.05 ,    'mrp' : 1786 ,    'd25' : 1461 ,    'd35' : 1331 ,    'd42' : 1240 ,    'd50' : 1136 ,   'qty' : 0},
//     {'id' : 13 ,  'name' : '24 Rebuild' ,            'vp' : 24.70 ,    'mrp' : 2854 ,    'd25' : 2270 ,    'd35' : 2037 ,    'd42' : 1874 ,    'd50' : 1687 ,   'qty' : 0},
//     {'id' : 14 ,  'name' : 'DinoShake' ,             'vp' : 9.60 ,     'mrp' : 1216 ,    'd25' : 949 ,     'd35' : 843 ,     'd42' : 768 ,     'd50' : 683 ,    'qty' : 0},
//     {'id' : 15 ,  'name' : 'Activated Fiber' ,       'vp' : 15.75 ,    'mrp' : 1786 ,    'd25' : 1395 ,    'd35' : 1239 ,    'd42' : 1129 ,    'd50' : 1004 ,   'qty' : 0},
//     {'id' : 16 ,  'name' : 'Active Fiber Complex' ,  'vp' : 22.95 ,    'mrp' : 2792 ,    'd25' : 2181 ,    'd35' : 1937 ,    'd42' : 1765 ,    'd50' : 1570 ,   'qty' : 0},
//     {'id' : 17 ,  'name' : 'Aloe Plus' ,             'vp' : 9.40 ,     'mrp' : 1156 ,    'd25' : 902 ,     'd35' : 801 ,     'd42' : 730 ,     'd50' : 650 ,    'qty' : 0},
//     {'id' : 18 ,  'name' : 'Aloe Concentrate' ,      'vp' : 24.95 ,    'mrp' : 2941 ,    'd25' : 2297 ,    'd35' : 2040 ,    'd42' : 1860 ,    'd50' : 1654 ,   'qty' : 0},
//     {'id' : 19 ,  'name' : 'Simply Probiotic' ,      'vp' : 21.95 ,    'mrp' : 2410 ,    'd25' : 1882 ,    'd35' : 1672 ,    'd42' : 1524 ,    'd50' : 1355 ,   'qty' : 0},
//     {'id' : 20 ,  'name' : 'Triphala' ,              'vp' : 11.25 ,    'mrp' : 1189 ,    'd25' : 928 ,     'd35' : 824 ,     'd42' : 751 ,     'd50' : 668 ,    'qty' : 0},
//     {'id' : 21 ,  'name' : 'Calcium' ,               'vp' : 10.25 ,    'mrp' : 1313 ,    'd25' : 1025 ,    'd35' : 910 ,     'd42' : 830 ,     'd50' : 738 ,    'qty' : 0},
//     {'id' : 22 ,  'name' : 'Joint Support' ,         'vp' : 20.90 ,    'mrp' : 2679 ,    'd25' : 2092 ,    'd35' : 1858 ,    'd42' : 1694 ,    'd50' : 1506 ,   'qty' : 0},
//     {'id' : 23 ,  'name' : 'Niteworks' ,             'vp' : 75 ,       'mrp' : 7777 ,    'd25' : 6075 ,    'd35' : 5394 ,    'd42' : 4918 ,    'd50' : 4374 ,   'qty' : 0},
//     {'id' : 24 ,  'name' : 'Lifeline' ,              'vp' : 25.75 ,    'mrp' : 2910 ,    'd25' : 2273 ,    'd35' : 2019 ,    'd42' : 1840 ,    'd50' : 1637 ,   'qty' : 0},
//     {'id' : 25 ,  'name' : 'Beta Heart' ,            'vp' : 19.55 ,    'mrp' : 2447 ,    'd25' : 1995 ,    'd35' : 1814 ,    'd42' : 1688 ,    'd50' : 1543 ,   'qty' : 0},
//     {'id' : 26 ,  'name' : 'Multivitamin' ,           'vp' : 19.95 ,    'mrp' : 2186 ,    'd25' : 1707 ,    'd35' : 1516 ,    'd42' : 1382 ,    'd50' : 1229 ,   'qty' : 0},
//     {'id' : 27 ,  'name' : 'Cell Activator' ,        'vp' : 21.95 ,    'mrp' : 2417 ,    'd25' : 1888 ,    'd35' : 1677 ,    'd42' : 1529 ,    'd50' : 1359 ,   'qty' : 0},
//     {'id' : 28 ,  'name' : 'Cell-U-Loss' ,           'vp' : 15.75 ,    'mrp' : 1860 ,    'd25' : 1453 ,    'd35' : 1290 ,    'd42' : 1176 ,    'd50' : 1046 ,   'qty' : 0},
//     {'id' : 29 ,  'name' : 'Herbal Control' ,        'vp' : 32.95 ,    'mrp' : 3746 ,    'd25' : 2926 ,    'd35' : 2598 ,    'd42' : 2369 ,    'd50' : 2106 ,   'qty' : 0},
//     {'id' : 30 ,  'name' : 'Cleanser' ,              'vp' : 10.40 ,    'mrp' : 1165 ,    'd25' : 910 ,     'd35' : 808 ,     'd42' : 736 ,     'd50' : 655 ,    'qty' : 0},
//     {'id' : 31 ,  'name' : 'Toner' ,                 'vp' : 11.80 ,    'mrp' : 1322 ,    'd25' : 1033 ,    'd35' : 917 ,     'd42' : 836 ,     'd50' : 743 ,    'qty' : 0},
//     {'id' : 32 ,  'name' : 'Serum' ,                 'vp' : 27.05 ,    'mrp' : 3022 ,    'd25' : 2361 ,    'd35' : 2096 ,    'd42' : 1911 ,    'd50' : 1700 ,   'qty' : 0},
//     {'id' : 33 ,  'name' : 'Moisturizer' ,           'vp' : 13.15 ,    'mrp' : 1473 ,    'd25' : 1151 ,    'd35' : 1022 ,    'd42' : 931 ,     'd50' : 828 ,    'qty' : 0},
// ]

var productDetails = [
    {'id' : '1239' ,   'name' : 'Formula 1' ,             'vp' : 21.75 ,    'mrp' : 2449 ,    'd25' : 1912 ,    'd35' : 1698 ,    'd42' : 1548 ,    'd50' : 1376 ,   'qty' : 0},
    {'id' : '1233' ,   'name' : 'PPP - 200g' ,            'vp' : 11.50 ,    'mrp' : 1455 ,    'd25' : 1137 ,    'd35' : 1009 ,    'd42' : 920 ,     'd50' : 818 ,    'qty' : 0},
    {'id' : '1569' ,   'name' : 'PPP - 400g' ,            'vp' : 22.50 ,    'mrp' : 2792 ,    'd25' : 2181 ,    'd35' : 1937 ,    'd42' : 1766 ,    'd50' : 1571 ,   'qty' : 0},
    {'id' : '183K' ,   'name' : 'ShakeMate' ,             'vp' : 6.45 ,     'mrp' : 733 ,     'd25' : 643 ,     'd35' : 606 ,     'd42' : 581 ,     'd50' : 552 ,    'qty' : 0},
    {'id' : '0064' ,   'name' : 'Ocular Defence' ,        'vp' : 19.25 ,    'mrp' : 2166 ,    'd25' : 1691 ,    'd35' : 1502 ,    'd42' : 1369 ,    'd50' : 1217 ,   'qty' : 0},
    {'id' : '175K' ,   'name' : 'Male Factor' ,           'vp' : 34.75 ,    'mrp' : 3832 ,    'd25' : 2993 ,    'd35' : 2658 ,    'd42' : 2423 ,    'd50' : 2155 ,   'qty' : 0},
    {'id' : '127K' ,   'name' : "Woman's Choice" ,        'vp' : 12.45 ,    'mrp' : 1399 ,    'd25' : 1092 ,    'd35' : 970 ,     'd42' : 884 ,     'd50' : 786 ,    'qty' : 0},
    {'id' : '109K' ,   'name' : 'Brain Health' ,          'vp' : 15.10 ,    'mrp' : 1645 ,    'd25' : 1285 ,    'd35' : 1141 ,    'd42' : 1040 ,    'd50' : 925 ,    'qty' : 0},
    {'id' : '275K' ,   'name' : 'Cleanser' ,              'vp' : 10.40 ,    'mrp' : 1165 ,    'd25' : 910 ,     'd35' : 808 ,     'd42' : 736 ,     'd50' : 655 ,    'qty' : 0},
    {'id' : '315K' ,   'name' : 'Toner' ,                 'vp' : 11.80 ,    'mrp' : 1322 ,    'd25' : 1033 ,    'd35' : 917 ,     'd42' : 836 ,     'd50' : 743 ,    'qty' : 0},
    {'id' : '276K' ,   'name' : 'Serum' ,                 'vp' : 27.05 ,    'mrp' : 3022 ,    'd25' : 2361 ,    'd35' : 2096 ,    'd42' : 1911 ,    'd50' : 1700 ,   'qty' : 0},
    {'id' : '277K' ,   'name' : 'Moisturizer' ,           'vp' : 13.15 ,    'mrp' : 1473 ,    'd25' : 1151 ,    'd35' : 1022 ,    'd42' : 931 ,     'd50' : 828 ,    'qty' : 0},
    {'id' : '046K' ,   'name' : 'Skin Booster' ,   'vp' : 38.65 ,    'mrp' : 4394 ,    'd25' : 3582 ,    'd35' : 3258 ,    'd42' : 3031 ,    'd50' : 2771 ,   'qty' : 0},
    {'id' : '316K' ,   'name' : 'Skin Booster Orange' , 'vp' : 38.65 ,    'mrp' : 4266 ,    'd25' : 3450 ,    'd35' : 3123 ,    'd42' : 2895 ,    'd50' : 2634 ,   'qty' : 0},
    {'id' : '115K' ,   'name' : 'Immune Health' ,         'vp' : 15.80 ,    'mrp' : 1717 ,    'd25' : 1341 ,    'd35' : 1191 ,    'd42' : 1086 ,    'd50' : 965 ,    'qty' : 0},
    {'id' : '1295' ,   'name' : 'Afresh' ,                'vp' : 7.80 ,     'mrp' : 913 ,     'd25' : 712 ,     'd35' : 633 ,     'd42' : 577 ,     'd50' : 513 ,    'qty' : 0},
    {'id' : '080K' ,   'name' : 'Kashmiri Kahwa' ,          'vp' : 7.80 ,     'mrp' : 913 ,     'd25' : 726 ,     'd35' : 652 ,     'd42' : 600 ,     'd50' : 540 ,    'qty' : 0},
    {'id' : '1458' ,   'name' : '24 Hydrate' ,            'vp' : 14.05 ,    'mrp' : 1839 ,    'd25' : 1504 ,    'd35' : 1370 ,    'd42' : 1276 ,    'd50' : 1169 ,   'qty' : 0},
    {'id' : '031K' ,   'name' : '24 Rebuild' ,            'vp' : 24.70 ,    'mrp' : 2940 ,    'd25' : 2339 ,    'd35' : 2099 ,    'd42' : 1931 ,    'd50' : 1739 ,   'qty' : 0},
    {'id' : '1279' ,   'name' : 'DinoShake' ,             'vp' : 9.60 ,     'mrp' : 1252 ,    'd25' : 978 ,     'd35' : 868 ,     'd42' : 792 ,     'd50' : 704 ,    'qty' : 0},
    {'id' : '1278' ,   'name' : 'Activated Fiber' ,       'vp' : 15.75 ,    'mrp' : 1839 ,    'd25' : 1436 ,    'd35' : 1275 ,    'd42' : 1162 ,    'd50' : 1034 ,   'qty' : 0},
    {'id' : '2865' ,   'name' : 'Active Fiber Complex' ,  'vp' : 22.95 ,    'mrp' : 2876 ,    'd25' : 2246 ,    'd35' : 1995 ,    'd42' : 1819 ,    'd50' : 1617 ,   'qty' : 0},
    {'id' : '1293' ,   'name' : 'Aloe Plus' ,             'vp' : 9.40 ,     'mrp' : 1190 ,    'd25' : 929 ,     'd35' : 825 ,     'd42' : 752 ,     'd50' : 668 ,    'qty' : 0},
    {'id' : '0006' ,   'name' : 'Aloe Concentrate' ,      'vp' : 24.95 ,    'mrp' : 3030 ,    'd25' : 2366 ,    'd35' : 2101 ,    'd42' : 1916 ,    'd50' : 1704 ,   'qty' : 0},
    {'id' : '025K' ,   'name' : 'Simply Probiotic' ,      'vp' : 21.95 ,    'mrp' : 2482 ,    'd25' : 1938 ,    'd35' : 1721 ,    'd42' : 1569 ,    'd50' : 1395 ,   'qty' : 0},
    {'id' : '186K' ,   'name' : 'Triphala' ,              'vp' : 11.25 ,    'mrp' : 1224 ,    'd25' : 956 ,     'd35' : 849 ,     'd42' : 774 ,     'd50' : 688 ,    'qty' : 0},
    {'id' : '0020' ,   'name' : 'Calcium' ,               'vp' : 10.25 ,    'mrp' : 1352 ,    'd25' : 1056 ,    'd35' : 937 ,     'd42' : 855 ,     'd50' : 760 ,    'qty' : 0},
    {'id' : '0555' ,   'name' : 'Joint Support' ,         'vp' : 20.90 ,    'mrp' : 2759 ,    'd25' : 2155 ,    'd35' : 1913 ,    'd42' : 1744 ,    'd50' : 1551 ,   'qty' : 0},
    {'id' : '2637' ,   'name' : 'Niteworks' ,             'vp' : 75 ,       'mrp' : 8010 ,    'd25' : 6258 ,    'd35' : 5557 ,    'd42' : 5066 ,    'd50' : 4505 ,   'qty' : 0},
    {'id' : '0065' ,   'name' : 'Lifeline' ,              'vp' : 25.75 ,    'mrp' : 2990 ,    'd25' : 2341 ,    'd35' : 2079 ,    'd42' : 1895 ,    'd50' : 1686 ,   'qty' : 0},
    {'id' : '051K' ,   'name' : 'Beta Heart' ,            'vp' : 19.55 ,    'mrp' : 2520 ,    'd25' : 2054 ,    'd35' : 1868 ,    'd42' : 1738 ,    'd50' : 1589 ,   'qty' : 0},
    {'id' : '1232' ,   'name' : 'Multivitamin' ,          'vp' : 19.95 ,    'mrp' : 2252 ,    'd25' : 1759 ,    'd35' : 1562 ,    'd42' : 1424 ,    'd50' : 1226 ,   'qty' : 0},
    {'id' : '3123' ,   'name' : 'Cell Activator' ,        'vp' : 21.95 ,    'mrp' : 2489 ,    'd25' : 1944 ,    'd35' : 1726 ,    'd42' : 1574 ,    'd50' : 1399 ,   'qty' : 0},
    {'id' : '0111' ,   'name' : 'Cell-U-Loss' ,           'vp' : 15.75 ,    'mrp' : 1916 ,    'd25' : 1496 ,    'd35' : 1329 ,    'd42' : 1211 ,    'd50' : 1077 ,   'qty' : 0},
    {'id' : '0077' ,   'name' : 'Herbal Control' ,        'vp' : 32.95 ,    'mrp' : 3858 ,    'd25' : 3013 ,    'd35' : 2676 ,    'd42' : 2440 ,    'd50' : 2169 ,   'qty' : 0},
]


var allProducts = [
    {
        'id' : '1239' ,
        'name' : 'Formula 1' ,
        'vp' : 21.75 ,
        'mrp' : 2449 ,
        'quantity' : '500g',
        'varients' : [
            {
                'flavour' : 'Vanila',
                'image' : [
                    'formula1-vanilla-A.jpg',
                    'formula1-vanilla-B.jpg',
                    'formula1-vanilla-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Chocolate',
                'image' : [
                    'formula1-chocolate-A.jpg',
                    'formula1-chocolate-B.jpg',
                    'formula1-chocolate-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Mango',
                'image' : [
                    'formula1-mango-A.jpg',
                    'formula1-mango-B.jpg',
                    'formula1-mango-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Orange Cream',
                'image' : [
                    'formula1-orangeCream-A.jpg',
                    'formula1-orangeCream-B.jpg',
                    'formula1-orangeCream-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Strawberry',
                'image' : [
                    'formula1-strawberry-A.jpg',
                    'formula1-strawberry-B.jpg',
                    'formula1-strawberry-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Kulfi',
                'image' : [
                    'formula1-kulfi-A.jpg',
                    'formula1-kulfi-B.jpg',
                    'formula1-kulfi-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Banana Caramel',
                'image' : [
                    'formula1-bananaCaramel-A.jpg',
                    'formula1-bananaCaramel-B.jpg',
                    'formula1-bananaCaramel-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Rose Kheer',
                'image' : [
                    'formula1-roseKheer-A.jpg',
                    'formula1-roseKheer-B.jpg',
                    'formula1-roseKheer-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
            {
                'flavour' : 'Paan',
                'image' : [
                    'formula1-paan-A.jpg',
                    'formula1-paan-B.jpg',
                    'formula1-paan-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
        ]
    },
    {
        'id' : '1233' ,
        'name' : 'PPP - 200g' ,
        'vp' : 11.50 ,
        'mrp' : 1455 ,
        'quantity' : '200g',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'ppp-200g-A.jpg',
                    'ppp-200g-B.jpg',
                    'ppp-200g-C.png',
                    'pppDetailsA200.png',
                    'pppDetailsB200.png',
                ]
            }
        ]
    },
    {
        'id' : '1569' ,
        'name' : 'PPP - 400g' ,
        'vp' : 22.50 ,
        'mrp' : 2792 ,
        'quantity' : '400g',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'ppp-400g-A.jpg',
                    'ppp-400g-B.jpg',
                    'ppp-400g-C.png',
                    'pppDetailsA.png',
                    'pppDetailsB.png',
                ]
            }
        ]
    },
    {
        'id' : '183K' ,
        'name' : 'ShakeMate' ,
        'vp' : 6.45 ,
        'mrp' : 733 ,
        'quantity' : '500g',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'shakemate-A.png',
                    'shakemate-B.png',
                    'shakemate-C.png',
                    'shakemate-D.png',
                    'shakemate-E.png',
                    'shakemate-F.png',
                ]
            }
        ]
     },
    {
        'id' : '0064' ,
        'name' : 'Ocular Defence' ,
        'vp' : 19.25 ,
        'mrp' : 2166 ,
        'quantity' : '30 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'oculardefence-A.jpg',
                    'oculardefence-B.png',
                    'oculardefence-C.png',
                    'oculardefence-D.png',
                ]
            }
        ]
    },
    {
        'id' : '175K' ,
        'name' : 'Male Factor' ,
        'vp' : 34.75 ,
        'mrp' : 3832 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'malefactor-A.jpg',
                    'malefactor-B.jpg',
                    'malefactor-C.png',
                    'malefactor-D.png',
                    'malefactor-E.png',
                ]
            }
        ]
    },
    {
        'id' : '127K' ,
        'name' : "Woman's Choice" ,
        'vp' : 12.45 ,
        'mrp' : 1399 ,
        'quantity' : '30 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'womanschoice-A.jpg',
                    'womanschoice-B.jpg',
                    'womanschoice-C.png',
                    'womanschoice-D.png',
                    'womanschoice-E.png',
                ]
            }
        ]
    },
    {
        'id' : '109K' ,
        'name' : 'Brain Health' ,
        'vp' : 15.10 ,
        'mrp' : 1645 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'brainhealth-A.jpg',
                    'brainhealth-B.jpg',
                    'brainhealth-C.png',
                    'brainhealth-D.png',
                    'brainhealth-E.png',
                ]
            }
        ]
    },
    {
        'id' : '275K' ,
        'name' : 'Cleanser' ,
        'vp' : 10.40 ,
        'mrp' : 1165 ,
        'quantity' : '100ml',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'cleanser.png'
                ]
            }
        ]
    },
    {
        'id' : '315K' ,
        'name' : 'Toner' ,
        'vp' : 11.80 ,
        'mrp' : 1322 ,
        'quantity' : '100ml',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'toner.png'
                ]
            }
        ]
    },
    {
        'id' : '276K' ,
        'name' : 'Serum' ,
        'vp' : 27.05 ,
        'mrp' : 3022 ,
        'quantity' : '30ml',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'serum.png'
                ]
            }
        ]
    },
    {
        'id' : '277K' ,
        'name' : 'Moisturizer' ,
        'vp' : 13.15 ,
        'mrp' : 1473 ,
        'quantity' : '100ml',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'moisturizer.png'
                ]
            }
        ]
    },
    {
        'id' : '046K' ,
        'name' : 'Skin Booster' ,
        'vp' : 38.65 ,
        'mrp' : 4394 ,
        'quantity' : '10g x 30',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'skinbooster-A.jpg',
                    'skinbooster-B.jpg',
                    'skinbooster-C.png',
                    'skinbooster-D.png',
                    'skinbooster-E.png',
                ]
            }
        ]
    },
    {
        'id' : '316K' ,
        'name' : 'Skin Booster Orange' ,
        'vp' : 38.65 ,
        'mrp' : 4266 ,
        'quantity' : '300g',
        'varients' : [
            {
                'flavour' : 'Orange',
                'image' : [
                    'skinboosterorange.png'
                ]
            }
        ]
    },
    {
        'id' : '115K' ,
        'name' : 'Immune Health' ,
        'vp' : 15.80 ,
        'mrp' : 1717 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'immunehealth-A.jpg',
                    'immunehealth-B.jpg',
                    'immunehealth-C.png',
                    'immunehealth-D.png',
                    'immunehealth-E.png',
                ]
            }
        ]
    },
    {
        'id' : '1295' ,
        'name' : 'Afresh' ,
        'vp' : 7.80 ,
        'mrp' : 913 ,
        'quantity' : '50g',
        'varients' : [
            {
                'flavour' : 'Cinnamon',
                'image' : [
                    'afresh-cinnamon-A.jpg',
                    'afresh-cinnamon-B.jpg',
                    'afresh-cinnamon-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Ginger',
                'image' : [
                    'afresh-ginger-A.jpg',
                    'afresh-ginger-B.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Elaichi',
                'image' : [
                    'afresh-elaichi-A.jpg',
                    'afresh-elaichi-B.jpg',
                    'afresh-elaichi-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Lemon',
                'image' : [
                    'afresh-lemon-A.jpg',
                    'afresh-lemon-B.jpg',
                    'afresh-lemon-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Peach',
                'image' : [
                    'afresh-peach-A.jpg',
                    'afresh-peach-B.jpg',
                    'afresh-peach-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Tulsi',
                'image' : [
                    'afresh-tulsi-A.jpg',
                    'afresh-tulsi-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
        ]
    },
    {
        'id' : '1295' ,
        'name' : 'Afresh Kashmiri Kahwa' ,
        'vp' : 7.80 ,
        'mrp' : 913 ,
        'quantity' : '40g',
        'varients' : [
            {
                'flavour' : 'Kashmiri Kahwa',
                'image' : [
                    'afresh-kashmirikahwa-A.jpg',
                    'afresh-kashmirikahwa-B.jpg',
                    'afresh-kashmirikahwa-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
        ]
    },
    {
        'id' : '1458' ,
        'name' : '24 Hydrate' ,
        'vp' : 14.05 ,
        'mrp' : 1839 ,
        'quantity' : '5g x 20',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    '24hydrate-A.jpg',
                    '24hydrate-B.jpg',
                    '24hydrate-C.jpg',
                    '24hydrate-D.jpg',
                    '24hydrate-E.jpg',
                ]
            }
        ]
    },
    {
        'id' : '031K' ,
        'name' : '24 Rebuild' ,
        'vp' : 24.70 ,
        'mrp' : 2940 ,
        'quantity' : '50g x 10',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    '24rebuild-A.jpg',
                    '24rebuild-B.jpg',
                    '24rebuild-C.png',
                    '24rebuild-D.png',
                    '24rebuild-E.png',
                    '24rebuild-F.png',
                    '24rebuild-G.png',
                ]
            }
        ]
    },
    {
        'id' : '1279' ,
        'name' : 'DinoShake' ,
        'vp' : 9.60 ,
        'mrp' : 1252 ,
        'quantity' : '200g',
        'varients' : [
            {
                'flavour' : 'Strawberry',
                'image' : [
                    'dinoshake-strawberry-A.jpg',
                    'dinoshake-strawberry-B.jpg',
                    'dinoshake-strawberry-C.png',
                    'dinoshakeDetailsA.png',
                    'dinoshakeDetailsB.png',
                ]
            },
            {
                'flavour' : 'Chocolate',
                'image' : [
                    'dinoshake-chocolate-A.jpg',
                    'dinoshake-chocolate-B.jpg',
                    'dinoshake-chocolate-C.png',
                    'dinoshakeDetailsA.png',
                    'dinoshakeDetailsB.png',
                ]
            }
        ]
    },
    {
        'id' : '1278' ,
        'name' : 'Activated Fiber' ,
        'vp' : 15.75 ,
        'mrp' : 1839 ,
        'quantity' : '90 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'activatedfibre-A.jpg',
                    'activatedfibre-B.jpg',
                    'activatedfibre-C.png',
                    'activatedfibre-D.png',
                    'activatedfibre-E.png',
                ]
            }
        ]
    },
    {
        'id' : '2865' ,
        'name' : 'Active Fiber Complex' ,
        'vp' : 22.95 ,
        'mrp' : 2876 ,
        'quantity' : '200g',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'activefibercomplex-A.jpg',
                    'activefibercomplex-B.jpg',
                    'activefibercomplex-C.png',
                    'activefibercomplex-D.png',
                    'activefibercomplex-E.png',
                ]
            }
        ]
    },
    {
        'id' : '1293' ,
        'name' : 'Aloe Plus' ,
        'vp' : 9.40 ,
        'mrp' : 1190 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'aloeplus-A.jpg',
                    'aloeplus-B.jpg',
                    'aloeplus-C.png',
                    'aloeplus-D.png',
                    'aloeplus-E.png',
                ]
            }
        ]
    },
    {
        'id' : '0006' ,
        'name' : 'Aloe Concentrate' ,
        'vp' : 24.95 ,
        'mrp' : 3030 ,
        'quantity' : '500ml',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'aloeconcentrate-A.png',
                    'aloeconcentrate-B.png',
                    'aloeconcentrate-C.png',
                    'aloeconcentrate-D.png',
                    'aloeconcentrate-E.png',
                ]
            }
        ]
    },
    {
        'id' : '025K' ,
        'name' : 'Simply Probiotic' ,
        'vp' : 21.95 ,
        'mrp' : 2482 ,
        'quantity' : '1g x 30',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'simplyprobiotic-A.jpg',
                    'simplyprobiotic-B.jpg',
                    'simplyprobiotic-C.jpg',
                    'simplyprobiotic-D.png',
                    'simplyprobiotic-E.png',
                    'simplyprobiotic-F.png',
                ]
            }
        ]
    },
    {
        'id' : '186K' ,
        'name' : 'Triphala' ,
        'vp' : 11.25 ,
        'mrp' : 1224 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'triphala-A.jpg',
                    'triphala-B.jpg',
                    'triphala-C.png',
                    'triphala-D.png',
                    'triphala-E.png',
                ]
            }
        ]
    },
    {
        'id' : '0020' ,
        'name' : 'Calcium' ,
        'vp' : 10.25 ,
        'mrp' : 1352 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'calcium-A.jpg',
                    'calcium-B.jpg',
                    'calcium-C.png',
                    'calcium-D.png',
                    'calcium-E.png',
                ]
            }
        ]
    },
    {
        'id' : '0555' ,
        'name' : 'Joint Support' ,
        'vp' : 20.90 ,
        'mrp' : 2759 ,
        'quantity' : '90 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'jointsupport-A.jpg',
                    'jointsupport-B.jpg',
                    'jointsupport-C.png',
                    'jointsupport-D.png',
                    'jointsupport-E.png',
                ]
            }
        ]
    },
    {
        'id' : '2637' ,
        'name' : 'Niteworks' ,
        'vp' : 75 ,
        'mrp' : 8010 ,
        'quantity' : '300g',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'nitework-A.jpg',
                    'nitework-B.png',
                    'nitework-C.png',
                    'nitework-D.png',
                    'nitework-E.png',
                ]
            }
        ]
    },
    {

        'id' : '0065' ,
        'name' : 'Lifeline' ,
        'vp' : 25.75 ,
        'mrp' : 2990 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'lifeline-A.jpg',
                    'lifeline-B.png',
                    'lifeline-C.png',
                    'lifeline-D.png',
                ]
            }
        ]
    },
    {
        'id' : '051K' ,
        'name' : 'Beta Heart' ,
        'vp' : 19.55 ,
        'mrp' : 2520 ,
        'quantity' : '15g x 15',
        'varients' : [
            {
                'flavour' : 'Vanilla',
                'image' : [
                    'betaheart-A.jpg',
                    'betaheart-B.jpg',
                    'betaheart-C.png',
                    'betaheart-D.png',
                    'betaheart-E.png',
                    'betaheart-F.png',
                    'betaheart-G.png',
                ]
            }
        ]
    },
    {
        'id' : '1232' ,
        'name' : 'Multivitamin' ,
        'vp' : 19.95 ,
        'mrp' : 2252 ,
        'quantity' : '90 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'multivitamin-A.jpg',
                    'multivitamin-B.jpg',
                    'multivitamin-C.jpg',
                    'multivitamin-D.jpg',
                ]
            }
        ]
    },
    {
        'id' : '3123' ,
        'name' : 'Cell Activator' ,
        'vp' : 21.95 ,
        'mrp' : 2489 ,
        'quantity' : '60 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'cellactivator-A.jpg',
                    'cellactivator-B.jpg',
                    'cellactivator-C.png',
                    'cellactivator-D.png',
                    'cellactivator-E.png',
                ]
            }
        ]
    },
    {
        'id' : '0111' ,
        'name' : 'Cell-U-Loss' ,
        'vp' : 15.75 ,
        'mrp' : 1916 ,
        'quantity' : '90 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'celuloss-A.jpg',
                    'celuloss-B.jpg',
                    'celuloss-C.png',
                    'celuloss-D.png',
                    'celuloss-E.png',
                ]
            }
        ]
    },
    {
        'id' : '0077' ,
        'name' : 'Herbal Control' ,
        'vp' : 32.95 ,
        'mrp' : 3858 ,
        'quantity' : '90 Number',
        'varients' : [
            {
                'flavour' : '',
                'image' : [
                    'herbalcontrol-A.jpg',
                    'herbalcontrol-B.jpg',
                    'herbalcontrol-C.png',
                    'herbalcontrol-D.png',
                    'herbalcontrol-E.png',
                ]
            }
        ]
    },
]