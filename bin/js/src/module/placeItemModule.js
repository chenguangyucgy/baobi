/**
* name
*/
var module;
(function (module) {
    var placeItemModule = /** @class */ (function () {
        function placeItemModule() {
            /**放置坐标数据*/
            this._zuobiao = [
                //Lv1----------------------------------------------------------------------------------------------
                //1
                [{ x: 1210, y: 1490, c: 1940 }, { x: 1176, y: 1468, c: 1935 }, { x: 1139, y: 1443, c: 1930 }, { x: 1104, y: 1422, c: 1925 },
                    { x: 1244, y: 1467, c: 1939 }, { x: 1211, y: 1445, c: 1934 }, { x: 1174, y: 1422, c: 1929 }, { x: 1139, y: 1400, c: 1924 },
                    { x: 1280, y: 1445, c: 1938 }, { x: 1243, y: 1421, c: 1933 }, { x: 1209, y: 1399, c: 1928 }, { x: 1174, y: 1379, c: 1923 },
                    { x: 1312, y: 1422, c: 1937 }, { x: 1279, y: 1399, c: 1932 }, { x: 1243, y: 1379, c: 1927 }, { x: 1210, y: 1355, c: 1922 },
                    { x: 1348, y: 1401, c: 1936 }, { x: 1313, y: 1380, c: 1931 }, { x: 1279, y: 1354, c: 1926 }, { x: 1241, y: 1334, c: 1921 }]
                //2
                ,
                [{ x: 1486, y: 1315, c: 1850 }, { x: 1453, y: 1291, c: 1845 }, { x: 1417, y: 1268, c: 1840 }, { x: 1382, y: 1245, c: 1835 },
                    { x: 1521, y: 1288, c: 1849 }, { x: 1485, y: 1267, c: 1844 }, { x: 1451, y: 1247, c: 1839 }, { x: 1415, y: 1224, c: 1834 },
                    { x: 1555, y: 1267, c: 1848 }, { x: 1524, y: 1246, c: 1843 }, { x: 1488, y: 1222, c: 1838 }, { x: 1451, y: 1203, c: 1833 },
                    { x: 1590, y: 1246, c: 1847 }, { x: 1555, y: 1223, c: 1842 }, { x: 1519, y: 1199, c: 1837 }, { x: 1484, y: 1176, c: 1832 },
                    { x: 1624, y: 1225, c: 1846 }, { x: 1589, y: 1200, c: 1841 }, { x: 1555, y: 1180, c: 1836 }, { x: 1515, y: 1154, c: 1831 }
                ]
                //3
                ,
                [{ x: 1736, y: 1472, c: 1880 }, { x: 1704, y: 1454, c: 1875 }, { x: 1667, y: 1428, c: 1870 }, { x: 1630, y: 1404, c: 1865 },
                    { x: 1771, y: 1451, c: 1879 }, { x: 1737, y: 1428, c: 1874 }, { x: 1703, y: 1407, c: 1869 }, { x: 1666, y: 1383, c: 1864 },
                    { x: 1807, y: 1428, c: 1878 }, { x: 1771, y: 1407, c: 1873 }, { x: 1737, y: 1383, c: 1868 }, { x: 1701, y: 1360, c: 1863 },
                    { x: 1842, y: 1407, c: 1877 }, { x: 1806, y: 1382, c: 1872 }, { x: 1772, y: 1361, c: 1867 }, { x: 1736, y: 1337, c: 1862 },
                    { x: 1876, y: 1384, c: 1876 }, { x: 1839, y: 1361, c: 1871 }, { x: 1805, y: 1338, c: 1866 }, { x: 1768, y: 1317, c: 1861 },]
                //4
                ,
                [{ x: 1983, y: 1633, c: 1910 }, { x: 1947, y: 1612, c: 1905 }, { x: 1912, y: 1586, c: 1900 }, { x: 1878, y: 1566, c: 1895 },
                    { x: 2013, y: 1613, c: 1909 }, { x: 1983, y: 1589, c: 1904 }, { x: 1945, y: 1563, c: 1899 }, { x: 1913, y: 1542, c: 1894 },
                    { x: 2050, y: 1586, c: 1908 }, { x: 2016, y: 1567, c: 1903 }, { x: 1980, y: 1542, c: 1898 }, { x: 1943, y: 1522, c: 1893 },
                    { x: 2083, y: 1566, c: 1907 }, { x: 2048, y: 1543, c: 1902 }, { x: 2012, y: 1523, c: 1897 }, { x: 1979, y: 1497, c: 1892 },
                    { x: 2119, y: 1544, c: 1906 }, { x: 2085, y: 1522, c: 1901 }, { x: 2049, y: 1498, c: 1896 }, { x: 2014, y: 1478, c: 1891 }]
                //5
                ,
                [{ x: 1765, y: 1137, c: 1760 }, { x: 1732, y: 1111, c: 1755 }, { x: 1695, y: 1090, c: 1750 }, { x: 1658, y: 1066, c: 1745 },
                    { x: 1798, y: 1111, c: 1759 }, { x: 1765, y: 1090, c: 1754 }, { x: 1729, y: 1069, c: 1749 }, { x: 1695, y: 1045, c: 1744 },
                    { x: 1834, y: 1088, c: 1758 }, { x: 1799, y: 1066, c: 1753 }, { x: 1763, y: 1045, c: 1748 }, { x: 1731, y: 1024, c: 1743 },
                    { x: 1869, y: 1066, c: 1757 }, { x: 1836, y: 1044, c: 1752 }, { x: 1799, y: 1023, c: 1747 }, { x: 1764, y: 999, c: 1742 },
                    { x: 1905, y: 1045, c: 1756 }, { x: 1866, y: 1024, c: 1751 }, { x: 1833, y: 1000, c: 1746 }, { x: 1799, y: 979, c: 1741 }]
                //6
                ,
                [{ x: 2016, y: 1297, c: 1790 }, { x: 1980, y: 1272, c: 1785 }, { x: 1947, y: 1250, c: 1780 }, { x: 1910, y: 1228, c: 1775 },
                    { x: 2042, y: 1271, c: 1789 }, { x: 2017, y: 1253, c: 1784 }, { x: 1979, y: 1229, c: 1779 }, { x: 1946, y: 1205, c: 1774 },
                    { x: 2081, y: 1250, c: 1788 }, { x: 2051, y: 1232, c: 1783 }, { x: 2014, y: 1207, c: 1778 }, { x: 1978, y: 1187, c: 1773 },
                    { x: 2116, y: 1229, c: 1787 }, { x: 2082, y: 1208, c: 1782 }, { x: 2046, y: 1187, c: 1777 }, { x: 2012, y: 1162, c: 1772 },
                    { x: 2154, y: 1208, c: 1786 }, { x: 2118, y: 1189, c: 1781 }, { x: 2081, y: 1161, c: 1776 }, { x: 2049, y: 1142, c: 1771 }]
                //7
                ,
                [{ x: 2259, y: 1458, c: 1820 }, { x: 2224, y: 1435, c: 1815 }, { x: 2192, y: 1411, c: 1810 }, { x: 2154, y: 1391, c: 1805 },
                    { x: 2290, y: 1433, c: 1819 }, { x: 2260, y: 1414, c: 1814 }, { x: 2227, y: 1391, c: 1809 }, { x: 2193, y: 1368, c: 1804 },
                    { x: 2332, y: 1413, c: 1818 }, { x: 2294, y: 1391, c: 1813 }, { x: 2259, y: 1367, c: 1808 }, { x: 2225, y: 1345, c: 1803 },
                    { x: 2363, y: 1391, c: 1817 }, { x: 2329, y: 1367, c: 1812 }, { x: 2294, y: 1348, c: 1807 }, { x: 2261, y: 1322, c: 1802 },
                    { x: 2401, y: 1368, c: 1816 }, { x: 2363, y: 1346, c: 1811 }, { x: 2330, y: 1325, c: 1806 }, { x: 2296, y: 1302, c: 1801 }]
                //Lv2----------------------------------------------------------------------------------------------
                //8
                ,
                [{ x: 928, y: 1308, c: 1000 }, { x: 896, y: 1286, c: 995 }, { x: 861, y: 1264, c: 990 }, { x: 824, y: 1240, c: 985 },
                    { x: 962, y: 1284, c: 999 }, { x: 925, y: 1263, c: 994 }, { x: 892, y: 1240, c: 989 }, { x: 858, y: 1216, c: 984 },
                    { x: 997, y: 1262, c: 998 }, { x: 963, y: 1242, c: 993 }, { x: 929, y: 1218, c: 988 }, { x: 891, y: 1196, c: 983 },
                    { x: 1032, y: 1239, c: 997 }, { x: 1000, y: 1218, c: 992 }, { x: 961, y: 1195, c: 987 }, { x: 929, y: 1171, c: 982 },
                    { x: 1069, y: 1219, c: 996 }, { x: 1033, y: 1196, c: 991 }, { x: 996, y: 1175, c: 986 }, { x: 963, y: 1154, c: 981 }]
                //9
                ,
                [{ x: 1208, y: 1131, c: 910 }, { x: 1174, y: 1106, c: 905 }, { x: 1137, y: 1085, c: 900 }, { x: 1103, y: 1063, c: 895 },
                    { x: 1240, y: 1107, c: 909 }, { x: 1206, y: 1084, c: 904 }, { x: 1170, y: 1065, c: 899 }, { x: 1138, y: 1041, c: 894 },
                    { x: 1277, y: 1087, c: 908 }, { x: 1241, y: 1065, c: 903 }, { x: 1205, y: 1039, c: 898 }, { x: 1173, y: 1018, c: 893 },
                    { x: 1308, y: 1061, c: 907 }, { x: 1273, y: 1040, c: 902 }, { x: 1239, y: 1018, c: 897 }, { x: 1203, y: 997, c: 892 },
                    { x: 1345, y: 1041, c: 906 }, { x: 1310, y: 1019, c: 901 }, { x: 1275, y: 995, c: 896 }, { x: 1239, y: 975, c: 891 }]
                //10
                ,
                [{ x: 1482, y: 954, c: 820 }, { x: 1448, y: 932, c: 815 }, { x: 1410, y: 908, c: 810 }, { x: 1379, y: 886, c: 805 },
                    { x: 1515, y: 930, c: 819 }, { x: 1481, y: 908, c: 814 }, { x: 1448, y: 885, c: 809 }, { x: 1413, y: 861, c: 804 },
                    { x: 1551, y: 908, c: 818 }, { x: 1519, y: 884, c: 813 }, { x: 1482, y: 860, c: 808 }, { x: 1448, y: 843, c: 803 },
                    { x: 1585, y: 888, c: 817 }, { x: 1550, y: 861, c: 812 }, { x: 1516, y: 843, c: 807 }, { x: 1480, y: 816, c: 802 },
                    { x: 1620, y: 863, c: 816 }, { x: 1586, y: 843, c: 811 }, { x: 1550, y: 818, c: 806 }, { x: 1516, y: 799, c: 801 }
                ]
                //11
                ,
                [{ x: 1985, y: 1993, c: 2940 }, { x: 1953, y: 1970, c: 2935 }, { x: 1916, y: 1948, c: 2930 }, { x: 1878, y: 1923, c: 2925 },
                    { x: 2021, y: 1972, c: 2939 }, { x: 1988, y: 1949, c: 2934 }, { x: 1951, y: 1928, c: 2929 }, { x: 1916, y: 1902, c: 2924 },
                    { x: 2055, y: 1948, c: 2938 }, { x: 2022, y: 1925, c: 2933 }, { x: 1985, y: 1902, c: 2928 }, { x: 1947, y: 1882, c: 2923 },
                    { x: 2085, y: 1928, c: 2937 }, { x: 2054, y: 1902, c: 2932 }, { x: 2022, y: 1882, c: 2927 }, { x: 1987, y: 1859, c: 2922 },
                    { x: 2125, y: 1904, c: 2936 }, { x: 2091, y: 1880, c: 2931 }, { x: 2055, y: 1857, c: 2926 }, { x: 2018, y: 1835, c: 2921 }]
                //12
                ,
                [{ x: 2262, y: 1813, c: 2850 }, { x: 2226, y: 1793, c: 2845 }, { x: 2192, y: 1767, c: 2840 }, { x: 2158, y: 1747, c: 2835 },
                    { x: 2296, y: 1791, c: 2849 }, { x: 2260, y: 1769, c: 2844 }, { x: 2224, y: 1745, c: 2839 }, { x: 2194, y: 1723, c: 2834 },
                    { x: 2330, y: 1769, c: 2848 }, { x: 2296, y: 1745, c: 2843 }, { x: 2262, y: 1725, c: 2838 }, { x: 2228, y: 1705, c: 2833 },
                    { x: 2366, y: 1745, c: 2847 }, { x: 2334, y: 1725, c: 2842 }, { x: 2296, y: 1703, c: 2837 }, { x: 2262, y: 1679, c: 2832 },
                    { x: 2402, y: 1727, c: 2846 }, { x: 2364, y: 1703, c: 2841 }, { x: 2332, y: 1677, c: 2836 }, { x: 2296, y: 1659, c: 2831 }]
                //13
                ,
                [{ x: 2538, y: 1635, c: 2760 }, { x: 2506, y: 1615, c: 2755 }, { x: 2470, y: 1591, c: 2750 }, { x: 2436, y: 1571, c: 2745 },
                    { x: 2574, y: 1617, c: 2759 }, { x: 2538, y: 1591, c: 2754 }, { x: 2506, y: 1571, c: 2749 }, { x: 2470, y: 1549, c: 2744 },
                    { x: 2608, y: 1593, c: 2758 }, { x: 2574, y: 1573, c: 2753 }, { x: 2540, y: 1547, c: 2748 }, { x: 2506, y: 1525, c: 2743 },
                    { x: 2644, y: 1569, c: 2757 }, { x: 2608, y: 1547, c: 2752 }, { x: 2576, y: 1527, c: 2747 }, { x: 2536, y: 1503, c: 2742 },
                    { x: 2680, y: 1549, c: 2756 }, { x: 2644, y: 1525, c: 2751 }, { x: 2608, y: 1501, c: 2746 }, { x: 2572, y: 1479, c: 2741 }
                ]
                //Lv3----------------------------------------------------------------------------------------------
                //14
                ,
                [{ x: 688, y: 1144, c: 970 }, { x: 652, y: 1122, c: 965 }, { x: 614, y: 1100, c: 960 }, { x: 580, y: 1075, c: 955 },
                    { x: 718, y: 1124, c: 969 }, { x: 683, y: 1099, c: 964 }, { x: 647, y: 1077, c: 959 }, { x: 613, y: 1054, c: 954 },
                    { x: 753, y: 1100, c: 968 }, { x: 717, y: 1079, c: 963 }, { x: 684, y: 1054, c: 958 }, { x: 647, y: 1033, c: 953 },
                    { x: 787, y: 1079, c: 967 }, { x: 752, y: 1055, c: 962 }, { x: 716, y: 1034, c: 957 }, { x: 684, y: 1008, c: 952 },
                    { x: 825, y: 1057, c: 966 }, { x: 786, y: 1035, c: 961 }, { x: 751, y: 1010, c: 956 }, { x: 716, y: 988, c: 951 }
                ]
                //15
                ,
                [{ x: 963, y: 966, c: 880 }, { x: 929, y: 945, c: 875 }, { x: 893, y: 921, c: 870 }, { x: 857, y: 897, c: 865 },
                    { x: 997, y: 945, c: 879 }, { x: 962, y: 921, c: 874 }, { x: 927, y: 901, c: 869 }, { x: 894, y: 876, c: 864 },
                    { x: 1031, y: 922, c: 878 }, { x: 996, y: 900, c: 873 }, { x: 960, y: 876, c: 868 }, { x: 926, y: 857, c: 863 },
                    { x: 1066, y: 902, c: 877 }, { x: 1031, y: 876, c: 872 }, { x: 996, y: 857, c: 867 }, { x: 960, y: 830, c: 862 },
                    { x: 1100, y: 878, c: 876 }, { x: 1066, y: 857, c: 871 }, { x: 1029, y: 832, c: 866 }, { x: 995, y: 809, c: 861 }
                ]
                //16
                ,
                [{ x: 1240, y: 787, c: 790 }, { x: 1208, y: 764, c: 785 }, { x: 1171, y: 741, c: 780 }, { x: 1137, y: 719, c: 775 },
                    { x: 1274, y: 764, c: 789 }, { x: 1241, y: 741, c: 784 }, { x: 1205, y: 720, c: 779 }, { x: 1173, y: 695, c: 774 },
                    { x: 1312, y: 742, c: 788 }, { x: 1274, y: 720, c: 783 }, { x: 1240, y: 696, c: 778 }, { x: 1205, y: 676, c: 773 },
                    { x: 1345, y: 723, c: 787 }, { x: 1311, y: 699, c: 782 }, { x: 1275, y: 674, c: 777 }, { x: 1242, y: 653, c: 772 },
                    { x: 1381, y: 699, c: 786 }, { x: 1345, y: 678, c: 781 }, { x: 1310, y: 653, c: 776 }, { x: 1275, y: 632, c: 771 }
                ]
                //17
                ,
                [{ x: 2234, y: 2146, c: 2970 }, { x: 2199, y: 2126, c: 2965 }, { x: 2163, y: 2101, c: 2960 }, { x: 2130, y: 2079, c: 2955 },
                    { x: 2265, y: 2126, c: 2969 }, { x: 2233, y: 2103, c: 2964 }, { x: 2198, y: 2082, c: 2959 }, { x: 2164, y: 2057, c: 2954 },
                    { x: 2301, y: 2101, c: 2968 }, { x: 2269, y: 2082, c: 2963 }, { x: 2231, y: 2057, c: 2958 }, { x: 2197, y: 2035, c: 2953 },
                    { x: 2336, y: 2081, c: 2967 }, { x: 2302, y: 2058, c: 2962 }, { x: 2266, y: 2038, c: 2957 }, { x: 2233, y: 2012, c: 2952 },
                    { x: 2372, y: 2059, c: 2966 }, { x: 2336, y: 2037, c: 2961 }, { x: 2301, y: 2011, c: 2956 }, { x: 2267, y: 1992, c: 2951 }
                ]
                //18
                ,
                [{ x: 2516, y: 1971, c: 2880 }, { x: 2481, y: 1950, c: 2875 }, { x: 2445, y: 1927, c: 2870 }, { x: 2411, y: 1904, c: 2865 },
                    { x: 2548, y: 1951, c: 2879 }, { x: 2515, y: 1927, c: 2874 }, { x: 2479, y: 1906, c: 2869 }, { x: 2445, y: 1882, c: 2864 },
                    { x: 2583, y: 1928, c: 2878 }, { x: 2547, y: 1907, c: 2873 }, { x: 2513, y: 1882, c: 2868 }, { x: 2479, y: 1861, c: 2863 },
                    { x: 2618, y: 1906, c: 2877 }, { x: 2583, y: 1883, c: 2872 }, { x: 2546, y: 1862, c: 2867 }, { x: 2515, y: 1837, c: 2862 },
                    { x: 2653, y: 1882, c: 2876 }, { x: 2617, y: 1862, c: 2871 }, { x: 2581, y: 1838, c: 2866 }, { x: 2546, y: 1817, c: 2861 }
                ]
                //19
                ,
                [{ x: 2790, y: 1793, c: 2790 }, { x: 2756, y: 1770, c: 2785 }, { x: 2722, y: 1748, c: 2780 }, { x: 2686, y: 1726, c: 2775 },
                    { x: 2825, y: 1771, c: 2789 }, { x: 2791, y: 1748, c: 2784 }, { x: 2755, y: 1727, c: 2779 }, { x: 2721, y: 1701, c: 2774 },
                    { x: 2860, y: 1748, c: 2788 }, { x: 2824, y: 1728, c: 2783 }, { x: 2789, y: 1703, c: 2778 }, { x: 2756, y: 1681, c: 2773 },
                    { x: 2894, y: 1726, c: 2787 }, { x: 2858, y: 1703, c: 2782 }, { x: 2823, y: 1681, c: 2777 }, { x: 2790, y: 1657, c: 2772 },
                    { x: 2930, y: 1703, c: 2786 }, { x: 2895, y: 1683, c: 2781 }, { x: 2857, y: 1658, c: 2776 }, { x: 2824, y: 1637, c: 2771 }
                ]
                //Lv4----------------------------------------------------------------------------------------------
                ,
                [{ x: 441, y: 983, c: 940 }, { x: 406, y: 960, c: 935 }, { x: 369, y: 938, c: 930 }, { x: 334, y: 916, c: 925 },
                    { x: 474, y: 962, c: 939 }, { x: 439, y: 937, c: 934 }, { x: 404, y: 917, c: 929 }, { x: 369, y: 892, c: 924 },
                    { x: 508, y: 938, c: 938 }, { x: 474, y: 917, c: 933 }, { x: 438, y: 893, c: 928 }, { x: 402, y: 872, c: 923 },
                    { x: 542, y: 917, c: 937 }, { x: 507, y: 894, c: 932 }, { x: 472, y: 872, c: 927 }, { x: 437, y: 847, c: 922 },
                    { x: 578, y: 893, c: 936 }, { x: 543, y: 873, c: 931 }, { x: 506, y: 849, c: 926 }, { x: 471, y: 826, c: 921 }
                ]
                //20
                ,
                [{ x: 717, y: 805, c: 850 }, { x: 683, y: 783, c: 845 }, { x: 647, y: 760, c: 840 }, { x: 612, y: 736, c: 835 },
                    { x: 748, y: 783, c: 849 }, { x: 715, y: 759, c: 844 }, { x: 679, y: 739, c: 839 }, { x: 646, y: 714, c: 834 },
                    { x: 784, y: 761, c: 848 }, { x: 750, y: 739, c: 843 }, { x: 713, y: 714, c: 838 }, { x: 679, y: 695, c: 833 },
                    { x: 819, y: 738, c: 847 }, { x: 784, y: 715, c: 842 }, { x: 748, y: 694, c: 837 }, { x: 713, y: 670, c: 832 },
                    { x: 853, y: 717, c: 846 }, { x: 818, y: 696, c: 841 }, { x: 784, y: 670, c: 836 }, { x: 748, y: 650, c: 831 }
                ]
                //21
                ,
                [{ x: 993, y: 626, c: 760 }, { x: 959, y: 605, c: 755 }, { x: 924, y: 582, c: 750 }, { x: 889, y: 558, c: 745 },
                    { x: 1025, y: 605, c: 759 }, { x: 992, y: 581, c: 754 }, { x: 955, y: 562, c: 749 }, { x: 923, y: 536, c: 744 },
                    { x: 1061, y: 582, c: 758 }, { x: 1026, y: 561, c: 753 }, { x: 993, y: 537, c: 748 }, { x: 954, y: 515, c: 743 },
                    { x: 1096, y: 561, c: 757 }, { x: 1061, y: 538, c: 752 }, { x: 1026, y: 516, c: 747 }, { x: 991, y: 491, c: 742 },
                    { x: 1133, y: 537, c: 756 }, { x: 1096, y: 517, c: 751 }, { x: 1060, y: 491, c: 746 }, { x: 1026, y: 471, c: 741 }
                ]
                //22
                ,
                [{ x: 2485, y: 2309, c: 3000 }, { x: 2449, y: 2287, c: 2995 }, { x: 2413, y: 2262, c: 2990 }, { x: 2379, y: 2241, c: 2985 },
                    { x: 2515, y: 2287, c: 2999 }, { x: 2481, y: 2264, c: 2994 }, { x: 2447, y: 2243, c: 2989 }, { x: 2411, y: 2218, c: 2984 },
                    { x: 2551, y: 2263, c: 2998 }, { x: 2517, y: 2242, c: 2993 }, { x: 2481, y: 2219, c: 2988 }, { x: 2445, y: 2198, c: 2983 },
                    { x: 2585, y: 2242, c: 2997 }, { x: 2550, y: 2218, c: 2992 }, { x: 2515, y: 2197, c: 2987 }, { x: 2480, y: 2174, c: 2982 },
                    { x: 2623, y: 2220, c: 2996 }, { x: 2584, y: 2199, c: 2991 }, { x: 2550, y: 2174, c: 2986 }, { x: 2515, y: 2153, c: 2981 }
                ]
                //23
                ,
                [{ x: 2761, y: 2129, c: 2910 }, { x: 2727, y: 2107, c: 2905 }, { x: 2689, y: 2084, c: 2900 }, { x: 2656, y: 2062, c: 2895 },
                    { x: 2793, y: 2107, c: 2909 }, { x: 2759, y: 2084, c: 2904 }, { x: 2723, y: 2064, c: 2899 }, { x: 2687, y: 2038, c: 2894 },
                    { x: 2830, y: 2085, c: 2908 }, { x: 2793, y: 2063, c: 2903 }, { x: 2757, y: 2040, c: 2898 }, { x: 2723, y: 2019, c: 2893 },
                    { x: 2861, y: 2064, c: 2907 }, { x: 2829, y: 2039, c: 2902 }, { x: 2792, y: 2020, c: 2897 }, { x: 2757, y: 1995, c: 2892 },
                    { x: 2898, y: 2040, c: 2906 }, { x: 2862, y: 2019, c: 2901 }, { x: 2827, y: 1994, c: 2896 }, { x: 2792, y: 1973, c: 2891 }
                ]
                //24
                ,
                [{ x: 3039, y: 1952, c: 2820 }, { x: 3004, y: 1931, c: 2815 }, { x: 2969, y: 1907, c: 2810 }, { x: 2935, y: 1884, c: 2805 },
                    { x: 3071, y: 1930, c: 2819 }, { x: 3037, y: 1908, c: 2814 }, { x: 3002, y: 1886, c: 2809 }, { x: 2968, y: 1861, c: 2804 },
                    { x: 3107, y: 1907, c: 2818 }, { x: 3073, y: 1887, c: 2813 }, { x: 3038, y: 1863, c: 2808 }, { x: 3002, y: 1841, c: 2803 },
                    { x: 3140, y: 1886, c: 2817 }, { x: 3106, y: 1864, c: 2812 }, { x: 3071, y: 1843, c: 2807 }, { x: 3036, y: 1816, c: 2802 },
                    { x: 3178, y: 1863, c: 2816 }, { x: 3142, y: 1842, c: 2811 }, { x: 3107, y: 1817, c: 2806 }, { x: 3072, y: 1797, c: 2801 }
                ]
                //25
                ,
                []
            ];
            /**等级1四周坐标 */
            this.ArrLv1 = [
                { x: 1080, y: 1620, c: 10 }, { x: 1046, y: 1596, c: 10 }, { x: 1010, y: 1575, c: 10 }, { x: 976, y: 1551, c: 10 }, { x: 940, y: 1529, c: 10 },
                { x: 1400, y: 1825, c: 10 }, { x: 1434, y: 1848, c: 10 }, { x: 1469, y: 1870, c: 10 }, { x: 1506, y: 1895, c: 10 }, { x: 1540, y: 1916, c: 10 },
                { x: 1944, y: 886, c: 10 }, { x: 1980, y: 909, c: 10 }, { x: 2018, y: 932, c: 10 }, { x: 2052, y: 954, c: 10 }, { x: 2087, y: 978, c: 10 }, { x: 2121, y: 999, c: 10 }, { x: 2156, y: 1021, c: 10 },
                { x: 2329, y: 1135, c: 10 }, { x: 2364, y: 1158, c: 10 }, { x: 2400, y: 1182, c: 10 }, { x: 2436, y: 1204, c: 10 }, { x: 2471, y: 1226, c: 10 }, { x: 2504, y: 1249, c: 10 }, { x: 2539, y: 1270, c: 10 }
            ];
            /**等级2四周坐标 */
            this.ArrLv2 = [
                { x: 1080, y: 1620, c: 10 }, { x: 1046, y: 1596, c: 10 }, { x: 1010, y: 1575, c: 10 }, { x: 976, y: 1551, c: 10 }, { x: 940, y: 1529, c: 10 },
                { x: 1400, y: 1825, c: 10 }, { x: 1434, y: 1848, c: 10 }, { x: 1469, y: 1870, c: 10 }, { x: 1506, y: 1895, c: 10 }, { x: 1540, y: 1916, c: 10 },
                { x: 1944, y: 886, c: 10 }, { x: 1980, y: 909, c: 10 }, { x: 2018, y: 932, c: 10 }, { x: 2052, y: 954, c: 10 }, { x: 2087, y: 978, c: 10 }, { x: 2121, y: 999, c: 10 }, { x: 2156, y: 1021, c: 10 },
                { x: 2329, y: 1135, c: 10 }, { x: 2364, y: 1158, c: 10 }, { x: 2400, y: 1182, c: 10 }, { x: 2436, y: 1204, c: 10 }, { x: 2471, y: 1226, c: 10 }, { x: 2504, y: 1249, c: 10 }, { x: 2539, y: 1270, c: 10 },
                { x: 617, y: 1318, c: 5000 }, { x: 654, y: 1339, c: 5000 }, { x: 690, y: 1364, c: 5000 }, { x: 724, y: 1387, c: 5000 },
                { x: 1713, y: 2031, c: 5000 }, { x: 1749, y: 2053, c: 5000 }, { x: 1783, y: 2076, c: 5000 }, { x: 1818, y: 2097, c: 5000 },
                { x: 1622, y: 677, c: 5000 }, { x: 1657, y: 703, c: 5000 }, { x: 1692, y: 725, c: 5000 }, { x: 1725, y: 748, c: 5000 },
                { x: 2716, y: 1385, c: 5000 }, { x: 2752, y: 1409, c: 5000 }, { x: 2787, y: 1431, c: 5000 }, { x: 2823, y: 1454, c: 5000 }
            ];
            /**等级3四周坐标 */
            this.ArrLv3 = [
                { x: 1080, y: 1620, c: 10 }, { x: 1046, y: 1596, c: 10 }, { x: 1010, y: 1575, c: 10 }, { x: 976, y: 1551, c: 10 }, { x: 940, y: 1529, c: 10 },
                { x: 1400, y: 1825, c: 10 }, { x: 1434, y: 1848, c: 10 }, { x: 1469, y: 1870, c: 10 }, { x: 1506, y: 1895, c: 10 }, { x: 1540, y: 1916, c: 10 },
                { x: 1944, y: 886, c: 10 }, { x: 1980, y: 909, c: 10 }, { x: 2018, y: 932, c: 10 }, { x: 2052, y: 954, c: 10 }, { x: 2087, y: 978, c: 10 }, { x: 2121, y: 999, c: 10 }, { x: 2156, y: 1021, c: 10 },
                { x: 2329, y: 1135, c: 10 }, { x: 2364, y: 1158, c: 10 }, { x: 2400, y: 1182, c: 10 }, { x: 2436, y: 1204, c: 10 }, { x: 2471, y: 1226, c: 10 }, { x: 2504, y: 1249, c: 10 }, { x: 2539, y: 1270, c: 10 },
                { x: 617, y: 1318, c: 5000 }, { x: 654, y: 1339, c: 5000 }, { x: 690, y: 1364, c: 5000 }, { x: 724, y: 1387, c: 5000 },
                { x: 1713, y: 2031, c: 5000 }, { x: 1749, y: 2053, c: 5000 }, { x: 1783, y: 2076, c: 5000 }, { x: 1818, y: 2097, c: 5000 },
                { x: 1622, y: 677, c: 5000 }, { x: 1657, y: 703, c: 5000 }, { x: 1692, y: 725, c: 5000 }, { x: 1725, y: 748, c: 5000 },
                { x: 2716, y: 1385, c: 5000 }, { x: 2752, y: 1409, c: 5000 }, { x: 2787, y: 1431, c: 5000 }, { x: 2823, y: 1454, c: 5000 },
                { x: 617, y: 1318, c: 5000 }, { x: 654, y: 1339, c: 5000 }, { x: 690, y: 1364, c: 5000 }, { x: 724, y: 1387, c: 5000 }, { x: 761, y: 1409, c: 5000 }, { x: 583, y: 1293, c: 5000 }, { x: 549, y: 1271, c: 5000 }, { x: 513, y: 1250, c: 5000 }, { x: 478, y: 1227, c: 5000 }, { x: 442, y: 1205, c: 5000 }, { x: 406, y: 1180, c: 5000 },
                { x: 1713, y: 2031, c: 5000 }, { x: 1749, y: 2053, c: 5000 }, { x: 1783, y: 2076, c: 5000 }, { x: 1818, y: 2097, c: 5000 }, { x: 1851, y: 2123, c: 5000 }, { x: 1887, y: 2142, c: 5000 }, { x: 1922, y: 2163, c: 5000 }, { x: 1959, y: 2188, c: 5000 }, { x: 1994, y: 2209, c: 5000 }, { x: 2027, y: 2232, c: 5000 }, { x: 2064, y: 2255, c: 5000 },
                { x: 1622, y: 677, c: 5000 }, { x: 1657, y: 703, c: 5000 }, { x: 1692, y: 725, c: 5000 }, { x: 1725, y: 748, c: 5000 }, { x: 1760, y: 769, c: 5000 }, { x: 1586, y: 654, c: 5000 }, { x: 1551, y: 632, c: 5000 },
                { x: 2716, y: 1385, c: 5000 }, { x: 2752, y: 1409, c: 5000 }, { x: 2787, y: 1431, c: 5000 }, { x: 2823, y: 1454, c: 5000 }, { x: 2858, y: 1477, c: 5000 }, { x: 2891, y: 1500, c: 5000 }, { x: 2926, y: 1522, c: 5000 }
            ];
            /**等级4四周坐标 */
            this.ArrLv4 = [
                { x: 1080, y: 1620, c: 10 }, { x: 1046, y: 1596, c: 10 }, { x: 1010, y: 1575, c: 10 }, { x: 976, y: 1551, c: 10 }, { x: 940, y: 1529, c: 10 },
                { x: 1400, y: 1825, c: 10 }, { x: 1434, y: 1848, c: 10 }, { x: 1469, y: 1870, c: 10 }, { x: 1506, y: 1895, c: 10 }, { x: 1540, y: 1916, c: 10 },
                { x: 1944, y: 886, c: 10 }, { x: 1980, y: 909, c: 10 }, { x: 2018, y: 932, c: 10 }, { x: 2052, y: 954, c: 10 }, { x: 2087, y: 978, c: 10 }, { x: 2121, y: 999, c: 10 }, { x: 2156, y: 1021, c: 10 },
                { x: 2329, y: 1135, c: 10 }, { x: 2364, y: 1158, c: 10 }, { x: 2400, y: 1182, c: 10 }, { x: 2436, y: 1204, c: 10 }, { x: 2471, y: 1226, c: 10 }, { x: 2504, y: 1249, c: 10 }, { x: 2539, y: 1270, c: 10 },
                { x: 617, y: 1318, c: 5000 }, { x: 654, y: 1339, c: 5000 }, { x: 690, y: 1364, c: 5000 }, { x: 724, y: 1387, c: 5000 },
                { x: 1713, y: 2031, c: 5000 }, { x: 1749, y: 2053, c: 5000 }, { x: 1783, y: 2076, c: 5000 }, { x: 1818, y: 2097, c: 5000 },
                { x: 1622, y: 677, c: 5000 }, { x: 1657, y: 703, c: 5000 }, { x: 1692, y: 725, c: 5000 }, { x: 1725, y: 748, c: 5000 },
                { x: 2716, y: 1385, c: 5000 }, { x: 2752, y: 1409, c: 5000 }, { x: 2787, y: 1431, c: 5000 }, { x: 2823, y: 1454, c: 5000 },
                { x: 617, y: 1318, c: 5000 }, { x: 654, y: 1339, c: 5000 }, { x: 690, y: 1364, c: 5000 }, { x: 724, y: 1387, c: 5000 }, { x: 761, y: 1409, c: 5000 }, { x: 583, y: 1293, c: 5000 }, { x: 549, y: 1271, c: 5000 }, { x: 513, y: 1250, c: 5000 }, { x: 478, y: 1227, c: 5000 }, { x: 442, y: 1205, c: 5000 }, { x: 406, y: 1180, c: 5000 },
                { x: 1713, y: 2031, c: 5000 }, { x: 1749, y: 2053, c: 5000 }, { x: 1783, y: 2076, c: 5000 }, { x: 1818, y: 2097, c: 5000 }, { x: 1851, y: 2123, c: 5000 }, { x: 1887, y: 2142, c: 5000 }, { x: 1922, y: 2163, c: 5000 }, { x: 1959, y: 2188, c: 5000 }, { x: 1994, y: 2209, c: 5000 }, { x: 2027, y: 2232, c: 5000 }, { x: 2064, y: 2255, c: 5000 },
                { x: 1622, y: 677, c: 5000 }, { x: 1657, y: 703, c: 5000 }, { x: 1692, y: 725, c: 5000 }, { x: 1725, y: 748, c: 5000 }, { x: 1760, y: 769, c: 5000 }, { x: 1586, y: 654, c: 5000 }, { x: 1551, y: 632, c: 5000 },
                { x: 2716, y: 1385, c: 5000 }, { x: 2752, y: 1409, c: 5000 }, { x: 2787, y: 1431, c: 5000 }, { x: 2823, y: 1454, c: 5000 }, { x: 2858, y: 1477, c: 5000 }, { x: 2891, y: 1500, c: 5000 }, { x: 2926, y: 1522, c: 5000 },
                { x: 617, y: 1318, c: 5000 }, { x: 654, y: 1339, c: 5000 }, { x: 690, y: 1364, c: 5000 }, { x: 724, y: 1387, c: 5000 }, { x: 761, y: 1409, c: 5000 }, { x: 583, y: 1293, c: 5000 }, { x: 549, y: 1271, c: 5000 }, { x: 513, y: 1250, c: 5000 }, { x: 478, y: 1227, c: 5000 }, { x: 442, y: 1205, c: 5000 }, { x: 406, y: 1180, c: 5000 }, { x: 372, y: 1157, c: 5000 }, { x: 338, y: 1137, c: 5000 }, { x: 303, y: 1112, c: 5000 }, { x: 269, y: 1090, c: 5000 }, { x: 232, y: 1068, c: 5000 }, { x: 196, y: 1045, c: 5000 }, { x: 161, y: 1021, c: 5000 },
                { x: 1713, y: 2031, c: 5000 }, { x: 1749, y: 2053, c: 5000 }, { x: 1783, y: 2076, c: 5000 }, { x: 1818, y: 2097, c: 5000 }, { x: 1851, y: 2123, c: 5000 }, { x: 1887, y: 2142, c: 5000 }, { x: 1922, y: 2163, c: 5000 }, { x: 1959, y: 2188, c: 5000 }, { x: 1994, y: 2209, c: 5000 }, { x: 2027, y: 2232, c: 5000 }, { x: 2064, y: 2255, c: 5000 }, { x: 2099, y: 2278, c: 5000 }, { x: 2134, y: 2301, c: 5000 }, { x: 2168, y: 2324, c: 5000 }, { x: 2204, y: 2346, c: 5000 }, { x: 2239, y: 2369, c: 5000 }, { x: 2274, y: 2393, c: 5000 }, { x: 2310, y: 2415, c: 5000 },
                { x: 1622, y: 677, c: 5000 }, { x: 1657, y: 703, c: 5000 }, { x: 1692, y: 725, c: 5000 }, { x: 1725, y: 748, c: 5000 }, { x: 1760, y: 769, c: 5000 }, { x: 1586, y: 654, c: 5000 }, { x: 1551, y: 632, c: 5000 },
                { x: 2716, y: 1385, c: 5000 }, { x: 2752, y: 1409, c: 5000 }, { x: 2787, y: 1431, c: 5000 }, { x: 2823, y: 1454, c: 5000 }, { x: 2858, y: 1477, c: 5000 }, { x: 2891, y: 1500, c: 5000 }, { x: 2926, y: 1522, c: 5000 },
                { x: 1166, y: 384, c: 5000 }, { x: 1203, y: 405, c: 5000 }, { x: 1237, y: 428, c: 5000 }, { x: 1272, y: 453, c: 5000 }, { x: 1307, y: 474, c: 5000 }, { x: 1341, y: 497, c: 5000 }, { x: 1376, y: 521, c: 5000 },
                { x: 3104, y: 1637, c: 5000 }, { x: 3137, y: 1660, c: 5000 }, { x: 3173, y: 1681, c: 5000 }, { x: 3208, y: 1703, c: 5000 }, { x: 3243, y: 1726, c: 5000 }, { x: 3278, y: 1750, c: 5000 }, { x: 3314, y: 1771, c: 5000 }
            ];
            /**删除的坐标数据*/
            this._zbData = [];
            /**展台坐标 */
            this._showStage = [
                { x: 1316, y: 1513, c: 1940 }, { x: 1592, y: 1337, c: 1850 }, { x: 1842, y: 1497, c: 1880 }, { x: 2087, y: 1657, c: 1910 },
                { x: 1871, y: 1158, c: 1760 }, { x: 2120, y: 1320, c: 1790 }, { x: 2367, y: 1480, c: 1820 }, { x: 1034, y: 1331, c: 1000 },
                { x: 1312, y: 1154, c: 910 }, { x: 1589, y: 976, c: 820 }, { x: 2092, y: 2016, c: 2940 }, { x: 2368, y: 1836, c: 2850 },
                { x: 2646, y: 1660, c: 2760 }, { x: 657, y: 1041, c: 70 }, { x: 935, y: 865, c: 70 }, { x: 1210, y: 685, c: 70 },
                { x: 2205, y: 2046, c: 70 }, { x: 2487, y: 1870, c: 70 }, { x: 2762, y: 1690, c: 70 }, { x: 412, y: 881, c: 70 },
                { x: 685, y: 703, c: 70 }, { x: 963, y: 525, c: 70 }, { x: 2452, y: 2206, c: 70 }, { x: 2732, y: 2028, c: 70 }, { x: 3009, y: 1851, c: 70 }
            ];
            /**删除展台坐标 */
            this._removeStage = [];
            /**是否为编辑模式 */
            this._tupian = "";
            this._aaa = 0;
            this._editMode = false;
        }
        Object.defineProperty(placeItemModule.prototype, "i", {
            /**获取PlaceItem1建筑 */
            get: function () {
                return this._i;
            },
            /**更改PlaceItem1建筑 */
            set: function (content) {
                this._i = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(placeItemModule.prototype, "i2", {
            /**获取PlaceItem1建筑 */
            get: function () {
                return this._i2;
            },
            /**更改PlaceItem1建筑 */
            set: function (content) {
                this._i2 = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(placeItemModule.prototype, "zuobiao", {
            /**获取坐标 */
            get: function () {
                return this._zuobiao;
            },
            /**设置坐标 */
            set: function (content) {
                this.zuobiao = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(placeItemModule.prototype, "zbData", {
            /**获取被占领的坐标 */
            get: function () {
                return this._zbData;
            },
            /**设置被占领的坐标 */
            set: function (content) {
                this._zbData = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(placeItemModule.prototype, "showStage", {
            /**获取4x5坐标 */
            get: function () {
                return this._showStage;
            },
            /**设置4x5坐标 */
            set: function (content) {
                this._showStage = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(placeItemModule.prototype, "removeStage", {
            /**获取4x5坐标 */
            get: function () {
                return this._removeStage;
            },
            /**设置4x5坐标 */
            set: function (content) {
                this._removeStage = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(placeItemModule.prototype, "editMode", {
            /**获取编辑模式 */
            get: function () {
                return this._editMode;
            },
            /**设置编辑模式 */
            set: function (content) {
                this._editMode = content;
            },
            enumerable: true,
            configurable: true
        });
        placeItemModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new placeItemModule;
            }
            return this._instance;
        };
        return placeItemModule;
    }());
    module.placeItemModule = placeItemModule;
})(module || (module = {}));
//# sourceMappingURL=placeItemModule.js.map