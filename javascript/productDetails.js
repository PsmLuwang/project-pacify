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
    {'id' : '046K' ,   'name' : 'Skin Booster' ,          'vp' : 38.65 ,    'mrp' : 4394 ,    'd25' : 3582 ,    'd35' : 3258 ,    'd42' : 3031 ,    'd50' : 2771 ,   'qty' : 0},
    {'id' : '316K' ,   'name' : 'Skin Booster Orange' ,   'vp' : 38.65 ,    'mrp' : 4266 ,    'd25' : 3450 ,    'd35' : 3123 ,    'd42' : 2895 ,    'd50' : 2634 ,   'qty' : 0},
    {'id' : '115K' ,   'name' : 'Immune Health' ,         'vp' : 15.80 ,    'mrp' : 1717 ,    'd25' : 1341 ,    'd35' : 1191 ,    'd42' : 1086 ,    'd50' : 965 ,    'qty' : 0},
    {'id' : '1295' ,   'name' : 'Afresh' ,                'vp' : 7.80 ,     'mrp' : 913 ,     'd25' : 712 ,     'd35' : 633 ,     'd42' : 577 ,     'd50' : 513 ,    'qty' : 0},
    {'id' : '080K' ,   'name' : 'Afresh Tulsi' ,          'vp' : 7.80 ,     'mrp' : 913 ,     'd25' : 726 ,     'd35' : 652 ,     'd42' : 600 ,     'd50' : 540 ,    'qty' : 0},
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
        'varients' : [
            {
                'flavour' : 'Vanila',
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
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
                'quantity' : '500g',
                'image' : [
                    'formula1-paan-A.jpg',
                    'formula1-paan-B.jpg',
                    'formula1-paan-C.png',
                    'formula1DetailsA.png',
                    'formula1DetailsB.png',
                ]
            },
        ],
        'description' : 'Formula 1 Nutritional Shake Mix is a delicious meal for healthy nutrition and weight management. It provides an ideal balance of protein and nutrition to help satisfy your hunger and provides you with energy.. Consumption of High Protein Meal Replacement (HPMR) along with a calorie-restricted diet and moderate physical activity daily, showed reduction in body weight and body fat percentage along with improvement/healthy maintenance of blood lipid profile.. Enjoy Formula 1 Nutritional Shake Mix once or twice a day along with portion-controlled nutrition and exercise to help keep the body fit.'
    },
    {
        'id' : '1233' ,
        'name' : 'PPP - 200g' ,
        'vp' : 11.50 ,
        'mrp' : 1455 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '200g',
                'image' : [
                    'ppp-200g-A.jpg',
                    'ppp-200g-B.jpg',
                    'ppp-200g-C.png',
                    'pppDetailsA200.png',
                    'pppDetailsB200.png',
                ]
            }
        ],
        'description' : 'Personalized Protein Powder is a convenient way to increase your protein consumption which helps to maintain your energy level between meals and helps you to maintain muscle mass.'
    },
    {
        'id' : '1569' ,
        'name' : 'PPP - 400g' ,
        'vp' : 22.50 ,
        'mrp' : 2792 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '400g',
                'image' : [
                    'ppp-400g-A.jpg',
                    'ppp-400g-B.jpg',
                    'ppp-400g-C.png',
                    'pppDetailsA.png',
                    'pppDetailsB.png',
                ]
            }
        ],
        'description' : 'Personalized Protein Powder is a convenient way to increase your protein consumption which helps to maintain your energy level between meals and helps you to maintain muscle mass.'
    },
    {
        'id' : '183K' ,
        'name' : 'ShakeMate' ,
        'vp' : 6.45 ,
        'mrp' : 733 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '500g',
                'image' : [
                    'shakemate-A.png',
                    'shakemate-B.png',
                    'shakemate-C.png',
                    'shakemate-D.png',
                    'shakemate-E.png',
                    'shakemate-F.png',
                ]
            }
        ],
        'description' : 'Perfect partner for your Formula 1 Nutritional Shake Mix, it makes your shake taste great.. Provides approximately 1/3rd of Lactose when compared to 300ml of Skimmed Milk. It is a Low Glycemic Index Food. Delivers 10.75 g of high – quality Protein ** per serve. Delivers 1g fat, 1.65 mcg Vitamin D & 129 mg Calcium per serve. No added Sugar, Contains natural sweetener i.e. Stevia.'
     },
    {
        'id' : '0064' ,
        'name' : 'Ocular Defence' ,
        'vp' : 19.25 ,
        'mrp' : 2166 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '30 Number',
                'image' : [
                    'oculardefence-A.jpg',
                    'oculardefence-B.png',
                    'oculardefence-C.png',
                    'oculardefence-D.png',
                ]
            }
        ],
        'description' : 'Ocular Defense is a scientifically designed formula; developed to support eye health.. Key Ingredients: Lutein, zeaxanthin, Copper, Zinc, Vitamin A, C, E.. Disclaimer :Pregnant or lactating women should consult their physician prior to use of this product.  This product is not intended to diagnose, treat, prevent, or cure any disease.'
    },
    {
        'id' : '175K' ,
        'name' : 'Male Factor' ,
        'vp' : 34.75 ,
        'mrp' : 3832 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'malefactor-A.jpg',
                    'malefactor-B.jpg',
                    'malefactor-C.png',
                    'malefactor-D.png',
                    'malefactor-E.png',
                ]
            }
        ],
        'description' : 'Designed for men.. Contains blend of standardized fenugreek extract, pine bark (Pinus Gerardiana) extract and L – Citrulline. Key benefits:.. Male Sexual Arousal.. Male Sexual Health.. Male Libido'
    },
    {
        'id' : '127K' ,
        'name' : "Woman's Choice" ,
        'vp' : 12.45 ,
        'mrp' : 1399 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '30 Number',
                'image' : [
                    'womanschoice-A.jpg',
                    'womanschoice-B.jpg',
                    'womanschoice-C.png',
                    'womanschoice-D.png',
                    'womanschoice-E.png',
                ]
            }
        ],
        'description' : 'Woman’s Choice includes plant-derived ingredients, and these ingredients help women to find their natural balance and enjoy their life.. Formulated with a special blend of soy isoflavones and chasteberry (Vitexagnus-castus). Soy isoflavones and chasteberry help to support comfort and general well-being during monthly hormonal fluctuation in women. Soy isoflavones and chasteberry may help manage menopausal-related quality of life.'
    },
    {
        'id' : '109K' ,
        'name' : 'Brain Health' ,
        'vp' : 15.10 ,
        'mrp' : 1645 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'brainhealth-A.jpg',
                    'brainhealth-B.jpg',
                    'brainhealth-C.png',
                    'brainhealth-D.png',
                    'brainhealth-E.png',
                ]
            }
        ],
        'description' : 'Vritilife -Brain Health.. Feature and benefits.. Formulated with ancient Ayurvedic knowledge along with established research and technology.. Fuel indicator of Brain performance - learning, memory, focus, accuracy, concentration with Brahmi**, also known as Bacopa monnieri.. Patented Brahmi** extract with unique phytochemical composition.. Brahmi is extensively researched for its functional benefits for a healthy brain and supported by 11 clinical studies.. Contain GRAS (Generally Recognized As Safe) certified Brahmi** extract.. 100% pure Brahmi** extract.. Brahmi** extract has been tested at 5 stages to ensure quality.. Verified quality of Brahmi** extract having traceability right from the farm.'
    },
    {
        'id' : '275K' ,
        'name' : 'Cleanser' ,
        'vp' : 10.40 ,
        'mrp' : 1165 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '100ml',
                'image' : [
                    'cleanser.png'
                ]
            }
        ],
        'description' : 'Vritilife Facial cleanser is judiciously crafted for soft and supple cleanse with Neem, Turmeric, and camphor oil.With no harmful chemicals# offers clean and smoother skin experiencing no dryness after wash and makes feel fresh on every wash.Prepares^ skin for the next step of moisturizing.. #Please see the product label(s) for more information.. ^Rid face of dirt ,oil, pollutants, oil soluble impurities.'
    },
    {
        'id' : '315K' ,
        'name' : 'Toner' ,
        'vp' : 11.80 ,
        'mrp' : 1322 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '100ml',
                'image' : [
                    'toner.png'
                ]
            }
        ],
        'description' : 'Vritilife Facial Toner is an On the go skin freshener that gently conditions the skin. With instant absorption being similar to Skin pH , splash the goodness of Aloe and Cucumber that makes your skin feel cool and smooth .By using vritilife Toner after cleansing the face , it not only boosts hydration but also makes skin feel clear and supple.'
    },
    {
        'id' : '276K' ,
        'name' : 'Serum' ,
        'vp' : 27.05 ,
        'mrp' : 3022 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '30ml',
                'image' : [
                    'serum.png'
                ]
            }
        ],
        'description' : 'Vritilife Facial Serum is a unique blend of Ayurveda beauty oils to reduce discoloration, dullness and fine lines.Indulge yourself and make your skin smile while pampering with vritilife serum because Abhyanga, a gentle oil massage is an ancient way of enhancing skin quality*. It Improves facial skin elasticity and firmness.. *Skin tone, complexion,  elasticity, reduces dryness, removes the dirt.'
    },
    {
        'id' : '277K' ,
        'name' : 'Moisturizer' ,
        'vp' : 13.15 ,
        'mrp' : 1473 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '100ml',
                'image' : [
                    'moisturizer.png'
                ]
            }
        ],
        'description' : 'Moisturizers are intended to improve skin hydration and provide a soothing protective film1,2,3. vritilife Moisturizer consists of skin friendly ingredients which retains moisture atleast for 12 Hours^ that advance towards clearer skin and lightens blemishes.It contains natural oils and improves skin expression lines*.Enhance your Skin tone with an Elite Moisturizer.. 1. Purnamawati et al., 2017, Clin Med Res. 2017 Dec; 15(3-4): 75–87.. 2. Jemec and Na. Acta Derm Venereol . 2002;82(5):322-4.. 3. Madison. J Invest Dermatol . 2003 Aug;121(2):231-41.'
    },
    {
        'id' : '046K' ,
        'name' : 'Skin Booster' ,
        'vp' : 38.65 ,
        'mrp' : 4394 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '10g x 30',
                'image' : [
                    'skinbooster-A.jpg',
                    'skinbooster-B.jpg',
                    'skinbooster-C.png',
                    'skinbooster-D.png',
                    'skinbooster-E.png',
                ]
            }
        ],
        'description' : 'Ageing, stress, unhealthy lifestyles and diets, solar radiation and pollution can damage our skin*. To maintain skin health, HN - Skin Booster is the best way to supplement with the collagen and vitamins that skin needs.. Designed to nourish your skin from within and provide the nutrients to maintain healthy skin. Formulated with hydrolised fish collagen and vitamins that required for healthy skin. HN - Skin Booster is a rich source of Vitamins C, B2,B3, B6 and biotin. Each serving provides 5 grams of hydrolised fish collagen. Collagen helps support skin health. Delicious orange flavoured collagen drink mix. No artificial colour. No artificial sweetener. Easy to use, on-the-go format.'
    },
    {
        'id' : '316K' ,
        'name' : 'Skin Booster Orange' ,
        'vp' : 38.65 ,
        'mrp' : 4266 ,
        'varients' : [
            {
                'flavour' : 'Orange',
                'quantity' : '300g',
                'image' : [
                    'skinboosterorange.png'
                ]
            }
        ],
        'description' : 'Everyday solution to support your skin health * with HN- Skin booster.. HN - Skin Booster is formulated with hydrolised fish collagen and a blend of essential vitamins to help you maintain healthy skin. Designed to nourish your skin from within, HN - Skin Booster  support your skin health* with minimum effort and it provides nutrition for your skin.. HN - Skin Booster is designed to complement your beauty regime so you  may use it alongside your existing skincare routine. With its refreshing orange flavour, this delicious drink is  likely to become your new favourite beauty secret.'
    },
    {
        'id' : '115K' ,
        'name' : 'Immune Health' ,
        'vp' : 15.80 ,
        'mrp' : 1717 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'immunehealth-A.jpg',
                    'immunehealth-B.jpg',
                    'immunehealth-C.png',
                    'immunehealth-D.png',
                    'immunehealth-E.png',
                ]
            }
        ],
        'description' : 'Vritilife - Immune Health.. Feature and benefits.. Formulated with ancient Ayurvedic knowledge along with established research and technology. Kalmegh** helps manage symptoms of common cold. 100% pure extracts of Kalmegh and Tulasi. Tulasi helps support cellular defence and promotes natural immunity. Kalmegh** extract has been tested at 5 stages to ensure quality. Verified quality of Kalmegh** extract having traceability right from the farm. Contains other traditional ingredients from Ancient Ayurvedic knowledge such as Kutaki.'
    },
    {
        'id' : '1295' ,
        'name' : 'Afresh' ,
        'vp' : 7.80 ,
        'mrp' : 913 ,
        'varients' : [
            {
                'flavour' : 'Cinnamon',
                'quantity' : '50g',
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
                'quantity' : '50g',
                'image' : [
                    'afresh-ginger-A.jpg',
                    'afresh-ginger-B.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Elaichi',
                'quantity' : '50g',
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
                'quantity' : '50g',
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
                'quantity' : '50g',
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
                'quantity' : '50g',
                'image' : [
                    'afresh-tulsi-A.jpg',
                    'afresh-tulsi-B.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
            {
                'flavour' : 'Kashmiri Kahwa',
                'quantity' : '40g',
                'image' : [
                    'afresh-kashmirikahwa-A.jpg',
                    'afresh-kashmirikahwa-B.jpg',
                    'afresh-kashmirikahwa-C.png',
                    'afreshDetails-A.png',
                    'afreshDetails-B.png',
                ]
            },
        ],
        'description' : 'Enhance Your Energy Level!.. Afresh is a refreshing energy drink mix that contains orange pekoe extract, green tea extract and caffeine powder. Enjoy it hot or cold at any time of the day.. Key Benefits.. Afresh Energy drink mix contains natural sources of caffeine for an uplifting treat. Caffeine provides a gentle boost¹‚². Caffeine helps you feel energized². Caffeine supports mental alertness and concentration¹. Contains 40 mg of caffeine per serving. Provides less than 4 Kcal of energy per serving. Convenient, on-the-go powder form.'
    },
    {
        'id' : '1458' ,
        'name' : '24 Hydrate' ,
        'vp' : 14.05 ,
        'mrp' : 1839 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '5g x 20',
                'image' : [
                    '24hydrate-A.jpg',
                    '24hydrate-B.jpg',
                    '24hydrate-C.jpg',
                    '24hydrate-D.jpg',
                    '24hydrate-E.jpg',
                ]
            }
        ],
        'description' : 'H24 Hydrate is developed by experts in sports nutrition. It helps replenish the body with bioavailable electrolytes. When mixed with water, it is a perfect any-time hydration option for everyone. This refreshing orange flavoured drink has an osmolality of less than 270 mOsmol/kg.. Mix content of one sachet (5 g) with 500 ml of water. Use 1 serving per day.'
    },
    {
        'id' : '031K' ,
        'name' : '24 Rebuild' ,
        'vp' : 24.70 ,
        'mrp' : 2940 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '50g x 10',
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
        ],
        'description' : 'Recovery shake mix that delivers a tri-core protein-amino blend of free amino acids.. Key Benefits.. Whey and casein proteins help rebuild fatigued muscle Contains protein, L-glutamine and Branch Chain Amino Acids. Carbohydrate helps enhance muscle recovery by supporting the delivery of BCAAs for muscle synthesis. L-glutamine helps support muscle recovery. Provides vitamins and minerals. Available in convenient on-the-go format. Tested for banned substances*.'
    },
    {
        'id' : '1279' ,
        'name' : 'DinoShake' ,
        'vp' : 9.60 ,
        'mrp' : 1252 ,
        'varients' : [
            {
                'flavour' : 'Strawberry',
                'quantity' : '200g',
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
                'quantity' : '200g',
                'image' : [
                    'dinoshake-chocolate-A.jpg',
                    'dinoshake-chocolate-B.jpg',
                    'dinoshake-chocolate-C.png',
                    'dinoshakeDetailsA.png',
                    'dinoshakeDetailsB.png',
                ]
            }
        ],
        'description' : 'You want the best nutrition for your children so that they grow up healthy and strong. Herbalife Nutrition Dinoshake can help your children meet their nutrient requirements.. Fast Facts.. Children need more nutrients than adults for their growth and development to get your child to a “smart start” include Herbalife Dinoshake as part of a balanced breakfast. Great to taste, the shakes are bound to be their favourite any day. Dinoshake is an easy way to ensure that your child gets protein and other essential nutrients in their daily diet.'
    },
    {
        'id' : '1278' ,
        'name' : 'Activated Fiber' ,
        'vp' : 15.75 ,
        'mrp' : 1839 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '90 Number',
                'image' : [
                    'activatedfibre-A.jpg',
                    'activatedfibre-B.jpg',
                    'activatedfibre-C.png',
                    'activatedfibre-D.png',
                    'activatedfibre-E.png',
                ]
            }
        ],
        'description' : 'Adequate dietary fibre is essential for good health. Includes fibre from pea and oats to help increase your fibre intake.. Key Benefits.. Consumption of fibre aids in digestive health. Activated Fibre is composed of fibres derived from various vegetable sources. Activated Fibre includes oat fibre and pea fibre to provide a blend of fibre.. Fast Facts.. Activated Fibre tablets, a blend of dietary fibre’s including citrus pea and oat fibre, are a convenient way to increase your intake of healthy fibre daily. It is a combination of soluble and insoluble dietary fibre’s that helps curb appetite by providing a feeling of fullness and reducing the indulgence to over eat.'
    },
    {
        'id' : '2865' ,
        'name' : 'Active Fiber Complex' ,
        'vp' : 22.95 ,
        'mrp' : 2876 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '200g',
                'image' : [
                    'activefibercomplex-A.jpg',
                    'activefibercomplex-B.jpg',
                    'activefibercomplex-C.png',
                    'activefibercomplex-D.png',
                    'activefibercomplex-E.png',
                ]
            }
        ],
        'description' : 'Active fiber complex Contains a combination of soluble and insoluble fibres from various fruits and vegetable sources.. Key Benefits.. One serving provides 5 grams of fibre.. Convenient way to increase daily intake of dietary fibres.. Adequate amount of fibre in daily diet may help improve intestinal regularity and support regular bowel function.'
    },
    {
        'id' : '1293' ,
        'name' : 'Aloe Plus' ,
        'vp' : 9.40 ,
        'mrp' : 1190 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'aloeplus-A.jpg',
                    'aloeplus-B.jpg',
                    'aloeplus-C.png',
                    'aloeplus-D.png',
                    'aloeplus-E.png',
                ]
            }
        ],
        'description' : 'Aloe Plus contains high quality purified aloe vera leaf concentrate.. Key Benefits.. Aloe vera is well-known worldwide for its traditional use as a food It is traditionally used to help support healthy digestion, soothe the stomach, and absorb nutrients.. Fast Facts.. Aloe vera is well known worldwide for its traditional use as a food. Aloe vera has been used traditionally in India for general well-being. It is traditionally used to help support healthy digestion, soothe the stomach, support digestive health and the absorption of nutrients. Aloe Plus contains high quality purified aloe vera leaf concentrate - Aloe helps support digestion and relieves discomfort.'
    },
    {
        'id' : '0006' ,
        'name' : 'Aloe Concentrate' ,
        'vp' : 24.95 ,
        'mrp' : 3030 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '500ml',
                'image' : [
                    'aloeconcentrate-A.png',
                    'aloeconcentrate-B.png',
                    'aloeconcentrate-C.png',
                    'aloeconcentrate-D.png',
                    'aloeconcentrate-E.png',
                ]
            }
        ],
        'description' : 'Herbal Aloe Concentrate is formulated with premium quality aloe vera. Aloe soothes the stomach and is traditionally used for general wellbeing.. Key Benefits.. Refreshing and soothing Aloe drink mix. Contains the goodness of Aloe vera. Low-calorie. Aloe vera helps support intestinal health. Aloe vera helps soothe the stomach. Aloe vera helps support nutrient absorption.'
    },
    {
        'id' : '025K' ,
        'name' : 'Simply Probiotic' ,
        'vp' : 21.95 ,
        'mrp' : 2482 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '1g x 30',
                'image' : [
                    'simplyprobiotic-A.jpg',
                    'simplyprobiotic-B.jpg',
                    'simplyprobiotic-C.jpg',
                    'simplyprobiotic-D.png',
                    'simplyprobiotic-E.png',
                    'simplyprobiotic-F.png',
                ]
            }
        ],
        'description' : 'Simply Probiotic is a science backed probiotic that helps support digestive health. Powered by Unique IS 2® strain, it survives the gastric journey to get to where it counts, helping you feel your best every day.. Key Benefits.. Simply Probiotic contains Unique IS 2® strain, which is a bacillus coagulans, that is tough enough to survive the stomach’s acidic environment to reach the intestines right where it needs to be. It comes in a powdered format that mixes easily in any food or beverage (hot, cold or frozen). Requires no refrigeration. No added flavours , colors, sugars or sweeteners.'
    },
    {
        'id' : '186K' ,
        'name' : 'Triphala' ,
        'vp' : 11.25 ,
        'mrp' : 1224 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'triphala-A.jpg',
                    'triphala-B.jpg',
                    'triphala-C.png',
                    'triphala-D.png',
                    'triphala-E.png',
                ]
            }
        ],
        'description' : 'Vritilife - Triphala tablet is a combination of three indigenous fruits -Indian gooseberry (Amla), Chebulic myrobalan (Harad) and Bedda nut tree (Baheda). It is a uniquely processed, standardized, 5X concentrated Triphala extract blended with Triphala powder comprising full spectrum of actives. Triphala extract is standardized to 50% Tannin 5-6% Gallic acid.'
    },
    {
        'id' : '0020' ,
        'name' : 'Calcium' ,
        'vp' : 10.25 ,
        'mrp' : 1352 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'calcium-A.jpg',
                    'calcium-B.jpg',
                    'calcium-C.png',
                    'calcium-D.png',
                    'calcium-E.png',
                ]
            }
        ],
        'description' : 'Calcium is required for various physiological processes, its regular consumption is of utmost importance. Adequate calcium intake helps acquire bone mass and attain bone density throughout life. Vitamin D and Magnesium are needed for the better absorption of Calcium for these physiological processes.'
    },
    {
        'id' : '0555' ,
        'name' : 'Joint Support' ,
        'vp' : 20.90 ,
        'mrp' : 2759 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '90 Number',
                'image' : [
                    'jointsupport-A.jpg',
                    'jointsupport-B.jpg',
                    'jointsupport-C.png',
                    'jointsupport-D.png',
                    'jointsupport-E.png',
                ]
            }
        ],
        'description' : 'Specially formulated with glucosamine.. Key Benefits.. Glucosamine helps support joint function and flexibility.. Also contains Scutellaria root extract and essential trace minerals like copper and manganese..'
    },
    {
        'id' : '2637' ,
        'name' : 'Niteworks' ,
        'vp' : 75 ,
        'mrp' : 8010 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '300g',
                'image' : [
                    'nitework-A.jpg',
                    'nitework-B.png',
                    'nitework-C.png',
                    'nitework-D.png',
                    'nitework-E.png',
                ]
            }
        ],
        'description' : 'Herbalife Niteworks® is a refreshing powder mix containing L-Arginine which helps create more nitric oxide. Research indicates that the L-Arginine helps you produce nitric oxide, which can help your cardiovascular and circulatory system to stay healthy. It also contains Vitamin C, E and folic acid.. Niteworks® can be incorporated into your routine with ease and can be consumed any time during the day or night.'
    },
    {

        'id' : '0065' ,
        'name' : 'Lifeline' ,
        'vp' : 25.75 ,
        'mrp' : 2990 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'lifeline-A.jpg',
                    'lifeline-B.png',
                    'lifeline-C.png',
                    'lifeline-D.png',
                ]
            }
        ],
        'description' : 'Unlock the benefits of Omega-3 fatty acids with Herbalifeline®,  formulated with fish oils.. Herbalife Herbalifeline is a blend of highly purified marine lipids containing Omega-3 fatty acids, such as Eicosapentaenoic Acid (EPA) and Docosahexaenoic Acid (DHA). These Omega-3 fatty acids help to maintain a healthy cardiovascular system by maintaining blood triglycerides levels within normal range1.. Herbalifeline® comes in convenient softgel capsules, carefully crafted with thyme and peppermint essential oils to give you a fresh aftertaste. 1. Balk, E.M., Lichtenstein, A.H., Chung, M., Kupelnick, B., Chew, P., & Lau, J. (2006). Atherosclerosis, 189(1), 19-30. doi: 10.1016/j.atherosclerosis.2006.02.012.'
    },
    {
        'id' : '051K' ,
        'name' : 'Beta Heart' ,
        'vp' : 19.55 ,
        'mrp' : 2520 ,
        'varients' : [
            {
                'flavour' : 'Vanilla',
                'quantity' : '15g x 15',
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
        ],
        'description' : 'Beta Heart is a nutritious powder containing Oat beta glucan as key ingredient.. Key Benefits.. Oat beta-glucan is a natural form of soluble fibre found mostly in the outer layer of oat grains. One serving provides 3 g of oat beta-glucan a soluble dietary fibre. Daily intake of 3 g of soluble dietary fibre as part of a diet may help in the maintenance of healthy blood cholesterol levels*. No added sugar. No added colours. Natural vanilla flavour. On-the-go format, single-serving sachet. Consume any time of the day or night. Perfect to customize your favorite Formula 1 Nutritional Shake Mix.'
    },
    {
        'id' : '1232' ,
        'name' : 'Multivitamin' ,
        'vp' : 19.95 ,
        'mrp' : 2252 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '90 Number',
                'image' : [
                    'multivitamin-A.jpg',
                    'multivitamin-B.jpg',
                    'multivitamin-C.jpg',
                    'multivitamin-D.jpg',
                ]
            }
        ],
        'description' : 'Formula 2 Multivitamin Mineral & Herbal Tablets Plus provides a unique blend of 22 essential vitamins, minerals and herbs.. Key Benefits.. It provides 22 essential micronutrients i.e., vitamins and minerals that provide nutritional support to your body.. Includes the antioxidant vitamins C, E and beta-carotene which are important for maintaining good health.'
    },
    {
        'id' : '3123' ,
        'name' : 'Cell Activator' ,
        'vp' : 21.95 ,
        'mrp' : 2489 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '60 Number',
                'image' : [
                    'cellactivator-A.jpg',
                    'cellactivator-B.jpg',
                    'cellactivator-C.png',
                    'cellactivator-D.png',
                    'cellactivator-E.png',
                ]
            }
        ],
        'description' : 'Packed with select botanicals & nutrients.. Key Benefits.. Contains Alpha Lipoic acid (ALA), a known antioxidant. Antioxidants help support general well-being and healthy ageing.. Fast Facts.. Sometimes just eating balanced meals does not ensure that we absorb all the nutrients from it effectively. For a variety of reasons like illness or stress, we may be unable to derive all the nutrients from our food, even when we eat balanced meals regularly.'
    },
    {
        'id' : '0111' ,
        'name' : 'Cell-U-Loss' ,
        'vp' : 15.75 ,
        'mrp' : 1916 ,
        'varients' : [
            {
                'flavour' : 'Cell-U-Loss is formulated with corn silk.. Corn silk is traditionally used to support fluid balance.. Fast Facts.. Reduces water retention associated with normal tissue swelling, by promoting fluid loss through healthy elimination of water. Supports the reduction of subcutaneous accumulation of water,which may improve appearance of skin.* Cell-U-Loss assists with natural detoxification processes.*',
                'quantity' : '90 Number',
                'image' : [
                    'celluloss-A.jpg',
                    'celluloss-B.jpg',
                    'celluloss-C.png',
                    'celluloss-D.png',
                    'celluloss-E.png',
                ]
            }
        ],
        'description' : ''
    },
    {
        'id' : '0077' ,
        'name' : 'Herbal Control' ,
        'vp' : 32.95 ,
        'mrp' : 3858 ,
        'varients' : [
            {
                'flavour' : '',
                'quantity' : '90 Number',
                'image' : [
                    'herbalcontrol-A.jpg',
                    'herbalcontrol-B.jpg',
                    'herbalcontrol-C.png',
                    'herbalcontrol-D.png',
                    'herbalcontrol-E.png',
                ]
            }
        ],
        'description' : 'Herbal Control has a unique blend of green, black and oolong tea – known sources of polyphenols. Teas have been shown to contain many antioxidants, collectively known as polyphenols.. Key Benefits.. Contains natural sources of caffeine for an uplifting treat*. Caffeine is known for its thermogenic benefits**. Caffeine helps stimulate metabolism*. Helps provide an energetic feeling and increases alertness*.'
    },
]