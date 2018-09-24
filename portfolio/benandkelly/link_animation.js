$(window).load(function() {


    function magicLine() {
        var $el, leftPos, newWidth,
            $mainNav = $("#navigation_items");
        
        $mainNav.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");
        
        $magicLine
            .width($(".clicked").width())
            .css("left", $(".clicked").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
            
        $(".nav li").hover(function() {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        }, function() {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });    
        });

        $(window).on("resize", function() {
            $el = $(".clicked")
            leftPos = $el.position().left;
            newWidth = $el.width();
            
            resetMagicLine(newWidth, leftPos);
        })

        $(".nav li").on("click", function() {
            $el = $(this);
            $el.siblings().removeClass("clicked");
            $el.removeClass("unclicked").addClass("clicked");
            leftPos = $el.position().left;
            newWidth = $el.width();
            
            resetMagicLine(newWidth, leftPos);
            
        });

        function resetMagicLine(width, left) {
            $magicLine
            .css("left", left)
            .width(width)
            .data("origLeft", left)
            .data("origWidth", width);
        }
    }

    magicLine();


});