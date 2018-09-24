$(window).load(function() {

    // Navigation Bar Click Event Handler

    function navigationBar() {
        // initialize magic line
        var $el, leftPos, newWidth,
            $mainNav = $("#navigation_items");
        
        $mainNav.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");
        
        $magicLine
            .width($(".active").width())
            .css("left", $(".active").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());

        $("#navigation").on({
            mouseenter: function() {
                $el = $(this);
                leftPos = $el.position().left;
                newWidth = $el.width();
                $magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth
                });  
            },
            mouseleave: function() {
               $magicLine.stop().animate({
                    left: $magicLine.data("origLeft"),
                    width: $magicLine.data("origWidth")
                });
            }    
        }, ".inactive");




        // resize magic line on window resize
        $(window).on("resize", function() {
            $el = $(".active")
            leftPos = $el.position().left;
            newWidth = $el.width();
            
            resetMagicLine(newWidth, leftPos);
        })

        // when nav item is clicked, move line and load page
        $("#navigation").on("click touchend", ".inactive", function() {


            $el = $(this);
            var ID = $el.attr("id");

            if ($(window).width() <= 768) {
                $("button.navbar-toggle").click();
            }
            
            //fade out old content
            $("#main").find("div").fadeOut();
            //fade in new page
            $("#main").load(ID + ".html", function(data) {
                if (ID === "home") {
                    updateClock();
                }
                if (ID === "instagram") {
                    updateInstagramFeed();
                }
            })
            .hide().fadeIn();
            //update css for new content
            $('<link>')
            .appendTo('head')
            .attr({type : 'text/css', rel : 'stylesheet'})
            .attr('href', '/css/main.css');

            //switch up classes and reset magic line
            $(".active").removeClass("active").addClass("inactive");
            $el.removeClass("inactive").addClass("active");
            leftPos = $el.position().left;
            newWidth = $el.width();
            
            resetMagicLine(newWidth, leftPos);
            
        });

        //stack menu when toggled down
        $('#navbar-collapse').on('show.bs.collapse', function() {
          $('.nav-pills').addClass('nav-stacked');
        });

        //Unstack menu when not collapsed
        $('#navbar-collapse').on('hide.bs.collapse', function() {
          setTimeout(hide, 300);
        });
        

        function hide() {
            $('.nav-pills').removeClass('nav-stacked');
        }

        function resetMagicLine(width, left) {
            $magicLine
            .css("left", left)
            .width(width)
            .data("origLeft", left)
            .data("origWidth", width);
        }
    }

    function updateClock() {
        $('div#clock').countdown("08/06/2016 15:45:00")
            .on("update.countdown", function(event) {
                $('div#clock').html(event.strftime("<span>%-D day%!d</span> " + '<span>%H</span> hours ' + '<span>%M</span> minutes ' + '<span>%S</span> second%!S'))
            })
            .on("finish.countdown", function(event) {
                $("#home_msg").html("The knot has been tied!");
                $('div#clock').addClass("blink");
                $('div#clock').html("0 days 00 hours 00 minutes 00 seconds");
                var elem = $(this);
                $('.blink').each(function() {
                    setInterval(function() {
                        if (elem.css('opacity') == 1) {
                            elem.css('opacity', '0');
                        } else {
                            elem.css('opacity', '1');
                        }    
                    }, 1000);
                });
            });
    }

    function updateInstagramFeed() {
        var feed = new Instafeed({
            get: 'tagged',
            tagName: 'bellyinthemountains',
            clientId: '',
            accessToken: '',
            template: '<a href="{{link}}"><img src="{{image}}" class="instapic"/></a>',
            resolution: "low_resolution"
        });
        feed.run();

    }

    navigationBar();
    updateClock();


});