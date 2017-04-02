/*!
 * jQuery plugin - Simple responsive equal heights
 *
 * Copyright (c) 2017 Lubos Lopour
 * Dual licensed under the MIT and GPL licenses.
 *
 * @version 1.0.0
 */
! function() {
    $.fn.equalheight = function() {
        var h, i = 0,
            t = 0,
            e = new Array,
            n = 0;
        $(this).each(function() {
            if (h = $(this), $(h).css("min-height", "auto"), n = h.position().top, t != n) {
                for (g = 0; g < e.length; g++) e[g].css("min-height", i);
                e.length = 0, t = n, i = h.height(), e.push(h)
            } else e.push(h), i = i < h.height() ? h.height() : i;
            for (g = 0; g < e.length; g++) e[g].css("min-height", i)
        })
    }
}(jQuery);
