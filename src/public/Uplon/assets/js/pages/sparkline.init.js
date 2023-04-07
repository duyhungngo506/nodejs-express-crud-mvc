$(document).ready(function () {
    var e,
        r = function () {
            $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
                type: 'line',
                width: '100%',
                height: '165',
                chartRangeMax: 50,
                lineColor: '#039cfd',
                fillColor: 'rgba(3, 156, 253, 0.3)',
                highlightLineColor: 'rgba(108, 120, 151, 0.1)',
                highlightSpotColor: 'rgba(108, 120, 151, 0.1)',
            }),
                $('#sparkline1').sparkline(
                    [25, 23, 26, 24, 25, 32, 30, 24, 19],
                    {
                        type: 'line',
                        width: '100%',
                        height: '165',
                        chartRangeMax: 40,
                        lineColor: '#ff5d48',
                        fillColor: 'rgba(255, 93, 72, 0.3)',
                        composite: !0,
                        highlightLineColor: 'rgba(108, 120, 151, 0.1)',
                        highlightSpotColor: 'rgba(108, 120, 151, 0.1)',
                    },
                ),
                $('#sparkline2').sparkline(
                    [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
                    {
                        type: 'bar',
                        height: '165',
                        barWidth: '10',
                        barSpacing: '3',
                        barColor: '#64b0f2',
                    },
                ),
                $('#sparkline3').sparkline([20, 40, 30], {
                    type: 'pie',
                    width: '165',
                    height: '165',
                    sliceColors: ['#ebeff2', '#1bb99a', '#ff7aa3'],
                }),
                $('#sparkline4').sparkline(
                    [0, 23, 43, 35, 44, 45, 56, 37, 40],
                    {
                        type: 'line',
                        width: '100%',
                        height: '165',
                        chartRangeMax: 50,
                        lineColor: '#f1b53d',
                        fillColor: 'transparent',
                        highlightLineColor: 'rgba(108, 120, 151, 0.1)',
                        highlightSpotColor: 'rgba(108, 120, 151, 0.1)',
                    },
                ),
                $('#sparkline4').sparkline(
                    [25, 23, 26, 24, 25, 32, 30, 24, 19],
                    {
                        type: 'line',
                        width: '100%',
                        height: '165',
                        chartRangeMax: 40,
                        lineColor: '#9261c6',
                        fillColor: 'transparent',
                        composite: !0,
                        highlightLineColor: 'rgba(108, 120, 151, 0.1)',
                        highlightSpotColor: 'rgba(108, 120, 151, 0.1)',
                    },
                ),
                $('#sparkline6').sparkline(
                    [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
                    {
                        type: 'bar',
                        height: '165',
                        barWidth: '10',
                        barSpacing: '3',
                        barColor: '#3db9dc',
                    },
                ),
                $('#sparkline6').sparkline(
                    [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
                    {
                        type: 'line',
                        width: '100%',
                        height: '165',
                        lineColor: '#ff5d48',
                        fillColor: 'transparent',
                        composite: !0,
                        highlightLineColor: 'rgba(108, 120, 151, 0.1)',
                        highlightSpotColor: 'rgba(108, 120, 151, 0.1)',
                    },
                );
        },
        l = function () {
            var r,
                l = -1,
                a = -1,
                o = 0,
                t = [];
            $('html').mousemove(function (i) {
                var e = i.pageX,
                    r = i.pageY;
                -1 < l && (o += Math.max(Math.abs(e - l), Math.abs(r - a))),
                    (l = e),
                    (a = r);
            });
            var h = function () {
                var i = new Date().getTime();
                if (r && r != i) {
                    var e = Math.round((o / (i - r)) * 1e3);
                    t.push(e),
                        30 < t.length && t.splice(0, 1),
                        (o = 0),
                        $('#sparkline5').sparkline(t, {
                            tooltipSuffix: ' pixels per second',
                            type: 'line',
                            width: '100%',
                            height: '165',
                            chartRangeMax: 50,
                            lineColor: '#1bb99a',
                            fillColor: 'rgba(24, 185, 154, 0.3)',
                            highlightLineColor: 'rgba(108, 120, 151, 0.1)',
                            highlightSpotColor: 'rgba(108, 120, 151, 0.1)',
                        });
                }
                (r = i), setTimeout(h, 500);
            };
            setTimeout(h, 500);
        };
    r(),
        l(),
        $(window).resize(function (i) {
            clearTimeout(e),
                (e = setTimeout(function () {
                    r(), l();
                }, 300));
        });
});
