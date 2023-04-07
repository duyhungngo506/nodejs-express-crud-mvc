!(function (t) {
    t(function () {
        t('#default').raty({
            starOff: 'far fa-star',
            starOn: 'fas fa-star text-warning',
        }),
            t('#score').raty({
                score: 3,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#score-callback').raty({
                score: function () {
                    return t(this).attr('data-score');
                },
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#scoreName').raty({
                scoreName: 'entity[score]',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-warning',
            }),
            t('#number').raty({
                number: 10,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#number-callback').raty({
                number: function () {
                    return t(this).attr('data-number');
                },
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#numberMax').raty({
                numberMax: 5,
                number: 100,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-purple',
            }),
            t('#readOnly').raty({
                readOnly: !0,
                score: 3,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-success',
            }),
            t('#readOnly-callback').raty({
                readOnly: function () {
                    return !0;
                },
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#noRatedMsg').raty({
                readOnly: !0,
                noRatedMsg: "I'am readOnly and I haven't rated yet!",
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#halfShow-true').raty({
                score: 3.26,
                starHalf: 'fas fa-star-half-alt',
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#halfShow-false').raty({
                halfShow: !1,
                score: 3.26,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#round').raty({
                round: { down: 0.26, full: 0.6, up: 0.76 },
                score: 3.26,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-pink',
            }),
            t('#half').raty({
                half: !0,
                starHalf: 'fas fa-star-half-alt',
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#starHalf').raty({
                half: !0,
                starHalf: 'fas fa-star-half text-danger',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#click').raty({
                click: function (a, r) {
                    alert(
                        'ID: ' +
                            t(this).attr('id') +
                            '\nscore: ' +
                            a +
                            '\nevent: ' +
                            r.type,
                    );
                },
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#hints').raty({
                hints: ['a', null, '', void 0, '*_*'],
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
            }),
            t('#star-off-and-star-on').raty({
                starOff: 'far fa-bell',
                starOn: 'fas fa-bell text-primary',
            }),
            t('#cancel').raty({
                cancel: !0,
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#cancelHint').raty({
                cancel: !0,
                cancelHint: 'My cancel hint!',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-success',
            }),
            t('#cancelPlace').raty({
                cancel: !0,
                cancelPlace: 'right',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-purple',
            }),
            t('#cancel-off-and-cancel-on').raty({
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
                cancel: !0,
                cancelOff: 'far fa-minus-square',
                cancelOn: 'fas fa-minus-square text-danger',
            }),
            t('#iconRange').raty({
                iconRange: [
                    { range: 1, on: 'fas fa-cloud', off: 'far fa-circle' },
                    {
                        range: 2,
                        on: 'fas fa-cloud-download-alt',
                        off: 'far fa-circle',
                    },
                    {
                        range: 3,
                        on: 'fas fa-cloud-upload-alt',
                        off: 'far fa-circle',
                    },
                    { range: 4, on: 'fas fa-circle', off: 'far fa-circle' },
                    { range: 5, on: 'fas fa-cogs', off: 'far fa-circle' },
                ],
            }),
            t('#size-md').raty({
                starOff: 'far fa-fw fa-star',
                starOn: 'fas fa-fw fa-star',
                starHalf: 'fas fa-star-half-alt',
                cancel: !0,
                half: !0,
            }),
            t('#size-lg').raty({
                starOff: 'far fa-fw fa-star',
                starOn: 'fas fa-fw fa-star',
                starHalf: 'fas fa-star-half-alt',
                cancel: !0,
                half: !0,
            }),
            t('#target-div').raty({
                cancel: !0,
                target: '#target-div-hint',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-primary',
            }),
            t('#targetType').raty({
                cancel: !0,
                target: '#targetType-hint',
                targetType: 'score',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-warning',
            }),
            t('#targetFormat').raty({
                target: '#targetFormat-hint',
                targetFormat: 'Rating: {score}',
                starOff: 'far fa-star',
                starOn: 'fas fa-star text-danger',
            }),
            t('#mouseover').raty({
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
                mouseover: function (a, r) {
                    alert(
                        'ID: ' +
                            t(this).attr('id') +
                            '\nscore: ' +
                            a +
                            '\nevent: ' +
                            r.type,
                    );
                },
            }),
            t('#mouseout').raty({
                width: 150,
                starOff: 'far fa-star',
                starOn: 'fas fa-star',
                mouseout: function (a, r) {
                    alert(
                        'ID: ' +
                            t(this).attr('id') +
                            '\nscore: ' +
                            a +
                            '\nevent: ' +
                            r.type,
                    );
                },
            });
    });
})(jQuery);