/*!
 * jQuery plugin - Simple responsive equal heights
 *
 * Copyright (c) 2017 Lubos Lopour
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.0.0
 */
(function($) {
    equalheight = function(a) {
        var e, b = 0,
            c = 0,
            d = new Array,
            f = 0;
        $(a).each(function() {
            if (e = $(this), $(e).css('min-height', 'auto'), f = e.position().top, c != f) {
                for (currElem = 0; currElem < d.length; currElem++) d[currElem].css('min-height', b);
                d.length = 0, c = f, b = e.height(), d.push(e)
            } else d.push(e), b = b < e.height() ? e.height() : b;
            for (currElem = 0; currElem < d.length; currElem++) d[currElem].css('min-height', b)
        })
    };
})(jQuery);
