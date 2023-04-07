!(function (n) {
    'use strict';
    var o = function () {
        (this.$body = n('body')), (this.$realData = []);
    };
    (o.prototype.createPlotGraph = function (o, a, t, r, e, l, i, s) {
        n.plot(
            n(o),
            [
                { data: a, label: e[0], color: l[0] },
                { data: t, label: e[1], color: l[1] },
                { data: r, label: e[2], color: l[2] },
            ],
            {
                series: {
                    lines: {
                        show: !0,
                        fill: !0,
                        lineWidth: 2,
                        fillColor: {
                            colors: [
                                { opacity: 0 },
                                { opacity: 0.5 },
                                { opacity: 0.6 },
                            ],
                        },
                    },
                    points: { show: !1 },
                    shadowSize: 0,
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    borderColor: i,
                    tickColor: '#f9f9f9',
                    borderWidth: 1,
                    labelMargin: 10,
                    backgroundColor: s,
                },
                legend: {
                    position: 'ne',
                    margin: [0, -24],
                    noColumns: 0,
                    backgroundColor: 'transparent',
                    labelBoxBorderColor: null,
                    labelFormatter: function (o, a) {
                        return o + '&nbsp;&nbsp;';
                    },
                    width: 30,
                    height: 2,
                },
                yaxis: {
                    axisLabel: 'Daily Visits',
                    tickColor: 'rgba(108, 120, 151, 0.1)',
                    font: { color: '#6c7897' },
                },
                xaxis: {
                    axisLabel: 'Last Days',
                    tickColor: 'rgba(108, 120, 151, 0.1)',
                    font: { color: '#6c7897' },
                },
                tooltip: !0,
                tooltipOpts: {
                    content: '%s: Value of %x is %y',
                    shifts: { x: -60, y: 25 },
                    defaultTheme: !1,
                },
            },
        );
    }),
        (o.prototype.createPlotDotGraph = function (o, a, t, r, e, l, i) {
            n.plot(
                n(o),
                [
                    { data: a, label: r[0], color: e[0] },
                    { data: t, label: r[1], color: e[1] },
                ],
                {
                    series: {
                        lines: {
                            show: !0,
                            fill: !0,
                            lineWidth: 3,
                            fillColor: {
                                colors: [{ opacity: 0 }, { opacity: 0 }],
                            },
                        },
                        points: { show: !0 },
                        shadowSize: 0,
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        borderColor: l,
                        tickColor: '#f9f9f9',
                        borderWidth: 1,
                        labelMargin: 10,
                        backgroundColor: i,
                    },
                    legend: {
                        position: 'ne',
                        margin: [0, -24],
                        noColumns: 0,
                        labelBoxBorderColor: null,
                        backgroundColor: 'transparent',
                        labelFormatter: function (o, a) {
                            return o + '&nbsp;&nbsp;';
                        },
                        width: 30,
                        height: 2,
                    },
                    yaxis: {
                        axisLabel: 'Gold Price(USD)',
                        tickColor: 'rgba(108, 120, 151, 0.1)',
                        font: { color: '#6c7897' },
                    },
                    xaxis: {
                        axisLabel: 'Numbers',
                        tickColor: 'rgba(108, 120, 151, 0.1)',
                        font: { color: '#6c7897' },
                    },
                    tooltip: !0,
                    tooltipOpts: {
                        content: '%s: Value of %x is %y',
                        shifts: { x: -60, y: 25 },
                        defaultTheme: !1,
                    },
                },
            );
        }),
        (o.prototype.createPieGraph = function (o, a, t, r) {
            var e = [
                    { label: a[0], data: t[0] },
                    { label: a[1], data: t[1] },
                    { label: a[2], data: t[2] },
                ],
                l = {
                    series: { pie: { show: !0 } },
                    legend: { show: !0, backgroundColor: 'transparent' },
                    grid: { hoverable: !0, clickable: !0 },
                    colors: r,
                    tooltip: !0,
                    tooltipOpts: { content: '%s, %p.0%' },
                };
            n.plot(n(o), e, l);
        }),
        (o.prototype.randomData = function () {
            for (
                0 < this.$realData.length &&
                (this.$realData = this.$realData.slice(1));
                this.$realData.length < 300;

            ) {
                var o =
                    (0 < this.$realData.length
                        ? this.$realData[this.$realData.length - 1]
                        : 50) +
                    10 * Math.random() -
                    5;
                o < 0 ? (o = 0) : 100 < o && (o = 100), this.$realData.push(o);
            }
            for (var a = [], t = 0; t < this.$realData.length; ++t)
                a.push([t, this.$realData[t]]);
            return a;
        }),
        (o.prototype.createRealTimeGraph = function (o, a, t) {
            return n.plot(o, [a], {
                colors: t,
                series: {
                    grow: { active: !1 },
                    shadowSize: 0,
                    lines: { show: !0, fill: !1, lineWidth: 2, steps: !1 },
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: '#dcdcdc',
                    labelMargin: 15,
                    axisMargin: 0,
                    borderWidth: 0,
                    borderColor: null,
                    minBorderMargin: 5,
                    clickable: !0,
                    hoverable: !0,
                    autoHighlight: !1,
                    mouseActiveRadius: 20,
                },
                tooltip: !0,
                tooltipOpts: {
                    content: 'Value is : %y.0%',
                    shifts: { x: -30, y: -50 },
                },
                yaxis: {
                    axisLabel: 'Response Time (ms)',
                    min: 0,
                    max: 100,
                    tickColor: 'rgba(108, 120, 151, 0.1)',
                    font: { color: '#6c7897' },
                },
                xaxis: {
                    axisLabel: 'Point Value (1000)',
                    show: !0,
                    tickColor: 'rgba(108, 120, 151, 0.1)',
                    font: { color: '#6c7897' },
                },
            });
        }),
        (o.prototype.createDonutGraph = function (o, a, t, r) {
            var e = [
                    { label: a[0], data: t[0] },
                    { label: a[1], data: t[1] },
                    { label: a[2], data: t[2] },
                    { label: a[3], data: t[3] },
                ],
                l = {
                    series: { pie: { show: !0, innerRadius: 0.7 } },
                    legend: {
                        show: !0,
                        labelFormatter: function (o, a) {
                            return (
                                '<div style="font-size:14px;">&nbsp;' +
                                o +
                                '</div>'
                            );
                        },
                        labelBoxBorderColor: null,
                        margin: 50,
                        width: 20,
                        padding: 1,
                        backgroundColor: 'transparent',
                    },
                    grid: { hoverable: !0, clickable: !0 },
                    colors: r,
                    tooltip: !0,
                    tooltipOpts: { content: '%s, %p.0%' },
                };
            n.plot(n(o), e, l);
        }),
        (o.prototype.createCombineGraph = function (o, a, t, r) {
            var e = [
                    {
                        label: t[0],
                        data: r[0],
                        lines: { show: !0, fill: !0 },
                        points: { show: !0 },
                    },
                    {
                        label: t[1],
                        data: r[1],
                        lines: { show: !0 },
                        points: { show: !0 },
                    },
                    { label: t[2], data: r[2], bars: { show: !0 } },
                ],
                l = {
                    series: { shadowSize: 0 },
                    grid: {
                        hoverable: !0,
                        clickable: !0,
                        tickColor: '#f9f9f9',
                        borderWidth: 1,
                        borderColor: 'rgba(108, 120, 151, 0.1)',
                    },
                    colors: ['#1bb99a', '#f1b53d', '#9261c6'],
                    tooltip: !0,
                    tooltipOpts: { defaultTheme: !1 },
                    legend: {
                        position: 'ne',
                        margin: [0, -24],
                        noColumns: 0,
                        backgroundColor: 'transparent',
                        labelBoxBorderColor: null,
                        labelFormatter: function (o, a) {
                            return o + '&nbsp;&nbsp;';
                        },
                        width: 30,
                        height: 2,
                    },
                    yaxis: {
                        axisLabel: 'Point Value (1000)',
                        tickColor: 'rgba(108, 120, 151, 0.1)',
                        font: { color: '#bdbdbd' },
                    },
                    xaxis: {
                        axisLabel: 'Daily Hours',
                        ticks: a,
                        tickColor: 'rgba(108, 120, 151, 0.1)',
                        font: { color: '#bdbdbd' },
                    },
                };
            n.plot(n(o), e, l);
        }),
        (o.prototype.init = function () {
            this.createPlotGraph(
                '#website-stats',
                [
                    [0, 5],
                    [1, 8],
                    [2, 10],
                    [3, 12],
                    [4, 9],
                    [5, 5],
                    [6, 7],
                    [7, 9],
                    [8, 8],
                    [9, 16],
                    [10, 14],
                    [11, 12],
                    [12, 10],
                ],
                [
                    [0, 2],
                    [1, 4],
                    [2, 7],
                    [3, 9],
                    [4, 6],
                    [5, 3],
                    [6, 10],
                    [7, 8],
                    [8, 5],
                    [9, 14],
                    [10, 10],
                    [11, 10],
                    [12, 8],
                ],
                [
                    [0, 1],
                    [1, 3],
                    [2, 6],
                    [3, 7],
                    [4, 4],
                    [5, 2],
                    [6, 8],
                    [7, 6],
                    [8, 4],
                    [9, 10],
                    [10, 8],
                    [11, 14],
                    [12, 5],
                ],
                ['Google', 'Yahoo', 'Facebbok'],
                ['#64b0f2', '#ff7aa3', '#158c75'],
                'rgba(108, 120, 151, 0.1)',
                'transparent',
            );
            this.createPlotDotGraph(
                '#website-stats1',
                [
                    [0, 2],
                    [1, 4],
                    [2, 7],
                    [3, 9],
                    [4, 6],
                    [5, 3],
                    [6, 10],
                    [7, 8],
                    [8, 5],
                    [9, 14],
                    [10, 10],
                    [11, 10],
                    [12, 8],
                ],
                [
                    [0, 1],
                    [1, 3],
                    [2, 6],
                    [3, 7],
                    [4, 4],
                    [5, 2],
                    [6, 8],
                    [7, 6],
                    [8, 4],
                    [9, 10],
                    [10, 8],
                    [11, 14],
                    [12, 5],
                ],
                ['Visits', 'Page views'],
                ['#eaa211', '#ff5d48'],
                'rgba(108, 120, 151, 0.1)',
                'transparent',
            );
            this.createPieGraph(
                '#pie-chart #pie-chart-container',
                ['Series 1', 'Series 2', 'Series 3'],
                [20, 30, 15],
                ['#3db9dc', '#ff7aa3', '#2b3d51'],
            );
            var a = this.createRealTimeGraph(
                '#flotRealTime',
                this.randomData(),
                ['#64b0f2'],
            );
            a.draw();
            var t = this;
            !(function o() {
                a.setData([t.randomData()]),
                    a.draw(),
                    setTimeout(o, (n('html').hasClass('mobile-device'), 500));
            })();
            this.createDonutGraph(
                '#donut-chart #donut-chart-container',
                ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
                [35, 20, 10, 20],
                ['#1bb99a', '#9261c6', '#f1b53d', '#ff7aa3'],
            );
            var o = [
                [
                    [0, 201],
                    [1, 520],
                    [2, 337],
                    [3, 261],
                    [4, 157],
                    [5, 95],
                    [6, 200],
                    [7, 250],
                    [8, 320],
                    [9, 500],
                    [10, 152],
                    [11, 214],
                    [12, 364],
                    [13, 449],
                    [14, 558],
                    [15, 282],
                    [16, 379],
                    [17, 429],
                    [18, 518],
                    [19, 470],
                    [20, 330],
                    [21, 245],
                    [22, 358],
                    [23, 74],
                ],
                [
                    [0, 311],
                    [1, 630],
                    [2, 447],
                    [3, 371],
                    [4, 267],
                    [5, 205],
                    [6, 310],
                    [7, 360],
                    [8, 430],
                    [9, 610],
                    [10, 262],
                    [11, 324],
                    [12, 474],
                    [13, 559],
                    [14, 668],
                    [15, 392],
                    [16, 489],
                    [17, 539],
                    [18, 628],
                    [19, 580],
                    [20, 440],
                    [21, 355],
                    [22, 468],
                    [23, 184],
                ],
                [
                    [23, 727],
                    [22, 128],
                    [21, 110],
                    [20, 92],
                    [19, 172],
                    [18, 63],
                    [17, 150],
                    [16, 592],
                    [15, 12],
                    [14, 246],
                    [13, 52],
                    [12, 149],
                    [11, 123],
                    [10, 2],
                    [9, 325],
                    [8, 10],
                    [7, 15],
                    [6, 89],
                    [5, 65],
                    [4, 77],
                    [3, 600],
                    [2, 200],
                    [1, 385],
                    [0, 200],
                ],
            ];
            this.createCombineGraph(
                '#combine-chart #combine-chart-container',
                [
                    [0, '22h'],
                    [1, ''],
                    [2, '00h'],
                    [3, ''],
                    [4, '02h'],
                    [5, ''],
                    [6, '04h'],
                    [7, ''],
                    [8, '06h'],
                    [9, ''],
                    [10, '08h'],
                    [11, ''],
                    [12, '10h'],
                    [13, ''],
                    [14, '12h'],
                    [15, ''],
                    [16, '14h'],
                    [17, ''],
                    [18, '16h'],
                    [19, ''],
                    [20, '18h'],
                    [21, ''],
                    [22, '20h'],
                    [23, ''],
                ],
                ['Last 24 Hours', 'Last 48 Hours', 'Difference'],
                o,
            );
        }),
        (n.FlotChart = new o()),
        (n.FlotChart.Constructor = o);
})(window.jQuery),
    (function (o) {
        'use strict';
        window.jQuery.FlotChart.init();
    })(),
    $(document).ready(function () {
        $(function () {
            for (var o = [], a = 0; a <= 10; a += 1)
                o.push([a, parseInt(30 * Math.random())]);
            var t = [];
            for (a = 0; a <= 10; a += 1)
                t.push([a, parseInt(30 * Math.random())]);
            var r = [];
            for (a = 0; a <= 10; a += 1)
                r.push([a, parseInt(30 * Math.random())]);
            var e = new Array();
            e.push({ label: 'Series One', data: o, bars: { order: 3 } }),
                e.push({ label: 'Series Two', data: t, bars: { order: 2 } }),
                e.push({ label: 'Series Three', data: r, bars: { order: 1 } });
            var l = {
                bars: { show: !0, barWidth: 0.2, fill: 1 },
                grid: {
                    show: !0,
                    aboveData: !1,
                    labelMargin: 5,
                    axisMargin: 0,
                    borderWidth: 1,
                    minBorderMargin: 5,
                    clickable: !0,
                    hoverable: !0,
                    autoHighlight: !1,
                    mouseActiveRadius: 20,
                    borderColor: 'rgba(108, 120, 151, 0.1)',
                },
                series: { stack: 0 },
                legend: {
                    position: 'ne',
                    margin: [0, -24],
                    noColumns: 0,
                    labelBoxBorderColor: null,
                    labelFormatter: function (o, a) {
                        return o + '&nbsp;&nbsp;';
                    },
                    backgroundColor: 'transparent',
                    width: 30,
                    height: 2,
                },
                yaxis: {
                    axisLabel: 'Sales Value (USD)',
                    tickColor: 'rgba(108, 120, 151, 0.1)',
                    font: { color: '#6c7897' },
                },
                xaxis: {
                    axisLabel: 'Last 10 Days',
                    tickColor: 'rgba(108, 120, 151, 0.1)',
                    font: { color: '#6c7897' },
                },
                colors: ['#ff5d48', '#f1b53d', '#ebeff2'],
                tooltip: !0,
                tooltipOpts: {
                    content: '%s : %y.0',
                    shifts: { x: -30, y: -50 },
                },
            };
            $.plot($('#ordered-bars-chart'), e, l);
        });
    });
