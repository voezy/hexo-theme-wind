$(function(){
    var activeItem = null;
    var toTop = document.getElementById("to-top");
    var scrollDistance = {y: 'undefined'}, scrollDirection;

    $("#to-top").hide();
    $(".catalog-dropdown").hide();
    $("a").focus(function(){this.blur()});

    $('pre').addClass('linenums');
    $('pre').addClass('prettyprint');
    prettyPrint();

    $('.archive-wrapper').find('a').addClass('activeColor');
    $('.pagination-btn').find('a').addClass('deactiveColor');
    $('.footer-banner').find('a').addClass('activeColor');
    $('.post-wrapper').find('a').addClass('activeColor');
    $('.index-post-title').addClass('deactiveColor');
    $('.header-title').addClass('deactiveColor');
    $('.post-date').addClass('deactiveColor');
    $('.author-name').addClass('deactiveColor');
    $('.toTop').addClass('deactiveColor');

    
    //Show More Info in Index
    $(".index-post-wrapper").on("touchstart", postDetail);
    $(".index-post-wrapper").on("mouseenter", postDetail);
    $(".index-post-wrapper").on("mouseleave", postTitle);
    
    //Show Catalog
    $(".catalog-btn").on("click", toggleCatalog);
    $(".catalog-dropdown").on("click", function(e){
        e.stopPropagation();
    });

    //Back To Top
    $("a.toTop").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    //Show or Hide Gallery Photo
    $(".gallery-thumbnail").on("click",showGalleryPhoto);

    //Show or Hide Article Lightbox
    $(".post-content img").on("click",showGalleryPhoto);
    $(".gallery-photo").on("click",function(e){
        e.stopPropagation();
    });
    $(".close-gallery").on("click",closeGallery);
    $(".lightbox").on("click",closeGallery);
    
    function postDetail(){
        if (activeItem != $(this)){
            postTitle.call(activeItem);
            activeItem = $(this);
        }
        $(this).children(".index-post-info").fadeTo(500,1);
        $(this).find(".index-post-title").removeClass('deactiveColor');
        $(this).find(".index-post-title").addClass('activeColor');
        $(this).find(".index-post-categories").children("a").removeClass('deactiveColor');
        $(this).find(".index-post-categories").children("a").addClass('activeColor');
    }

    function postTitle(){
        $(this).children(".index-post-info").fadeTo(500,0);
        $(this).children(".index-post-info").fadeTo(500,0);
        $(this).find(".index-post-title").addClass('deactiveColor');
        $(this).find(".index-post-title").removeClass('activeColor');
        $(this).find(".index-post-categories").children("a").addClass('deactiveColor');
        $(this).find(".index-post-categories").children("a").removeClass('activeColor');
    }


    function toggleCatalog(e){
        if($(".catalog-dropdown").is(":hidden")){
            $(".catalog-dropdown").fadeIn();
        }else{
            $(".catalog-dropdown").fadeOut();
        }

        $(document).one("click", function(){
            $(".catalog-dropdown").fadeOut();
        });
        e.stopPropagation();
    }

    //Toggle 'To Top' Button State
    window.onscroll = function(e){
        checkScrollDirec();

        if(scrollDirection == 'down'){
            $("#to-top").animate({
                opacity: 'hide'
            }, {
                duration: 500,
                easing: "swing"
            });
        }
        else if(scrollDirection == 'up'){
            $("#to-top").animate({
                opacity: 'show'
            }, {
                duration: 500,
                easing: "swing"
            });
        }
    }
    
    function checkScrollDirec() {
        if (typeof scrollDistance.y == 'undefined') {
          scrollDistance.y = window.pageYOffset;
        }
        var diffY = scrollDistance.y - window.pageYOffset;
        if (diffY < 0) {
          scrollDirection = 'down';
        } else if (diffY > 0) {
          scrollDirection = 'up';
        } else {
        }
        scrollDistance.y = window.pageYOffset;
      }

    function showGalleryPhoto(){
        $(".lightbox").fadeIn(500);
        $(".lightbox").attr("style","display: flex");
        if($(this).attr("value"))
            //Gallery Photo
            $(".gallery-photo").attr("src",$(this).attr("value"));
        else
            //Article Photo
            $(".gallery-photo").attr("src",$(this).attr("src"));

        $('body').addClass("hideoverflow");
    }

    function closeGallery(){
        $(".lightbox").fadeOut(500);
        $('body').removeClass("hideoverflow");
    }
});