$(document).ready(function () {
    $('[data-toggle="input-mask"]').each(function (a, e) {
        var t = $(e).data('maskFormat'),
            u = $(e).data('reverse');
        null != u ? $(e).mask(t, { reverse: u }) : $(e).mask(t);
    });
}),
    jQuery(function (a) {
        new AutoNumeric.multiple('.autonumber');
    });
