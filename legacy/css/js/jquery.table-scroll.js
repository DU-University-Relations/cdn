(function ($) {
    $.fn.hasScrollBar = function () {
        return this.get(0).scrollHeight > this.height() || this.get(0).scrollWidth > this.width();
    }
    $(document).ready(function () {

        var $tables = $('.table-scroll > .table-scroll__wrapper table').each(function () {});

        var $tableWrappers = $tables.parent();

        //var $tableParent = $('.table-scroll');
        //var $tableWrapper = $tableParent.children('.table-scroll__wrapper');
        //console.log($tableParent.length + ' = number of scroll tables');

        function runTableEffects() {
            $tableWrappers
                .each(function () {
                    var $this = $(this);
                    var $parent = $this.parent('.table-scroll');

                    if ($this.hasScrollBar()) {
                        if (!$parent.hasClass("active")) {
                            //console.log("div.table has a scroll but is not active.. added active class");
                            $parent.addClass("active");
                        }
                    } else {
                        if (!$parent.hasClass("active")) {
                            //console.log("div.table does not have a scrollbar and was not active.")
                            return;
                        }
                        //console.log('removed class active');
                        $parent.removeClass("active");
                    }

                    if (!$parent.hasClass("active")) {
                        $parent.removeClass('table-scroll--shadow-right table-scroll--shadow-left')

                    } else {
                        $this.trigger("scroll");

                    }

                });
        };
        if ($tableWrappers.length) {
            runTableEffects();
            $(window).resize(function () {
                runTableEffects();
            });
            
            $tableWrappers
                .on('scroll', function () {
                    var $this = $(this);
                    var $parent = $this.parents('.table-scroll');
                    //console.log($parent);
                    var scrollLeft = $this.scrollLeft();
                    var scrolledLeft = scrollLeft == 0;

                    if (scrolledLeft) {
                        $parent.addClass('table-scroll--shadow-right');
                        $parent.removeClass('table-scroll--shadow-left');
          
                        return;
                    }

                    var scrollWidth = $this.get(0).scrollWidth;
                    var width = $this.width();

                    if (scrollLeft + width >= scrollWidth) {
                        $parent.addClass('table-scroll--shadow-left');
                        $parent.removeClass('table-scroll--shadow-right');
                    } else {
                        $parent.addClass('table-scroll--shadow-left table-scroll--shadow-right');
                    }
                })
                .each(function () {
                    var $this = $(this);
                    var $parent = $this.parents('.table-scroll');
                    
                    if ($this.hasScrollBar()) {
                        $this.trigger("scroll");
                    }
                });
        }
    });
})(jQuery);