$(document).ready(function() {
    // 요금제 탭메뉴
    function setupTabs(tabMenuSelector, tabContentSelector) {
        var tabs = $(tabMenuSelector + " ul li");
        var tabContents = $(tabContentSelector);

        tabs.on("click", function() {
            var rel = $(this).find("a").data("rel");
            tabs.removeClass("active");
            tabContents.removeClass("active");

            $(this).addClass("active");
            $("#" + rel).addClass("active");
        });
    }

    // Setup tab menus
    setupTabs(".tab-menu", ".tab-content");
    setupTabs(".tab-menu-2", ".tab-content-2");

    // Function to handle tab activation
    function activateTab(tabRel) {
        var tabs = $(".tab-menu-2 ul li");
        var tabContents = $(".tab-content-2");

        tabs.removeClass("active");
        tabContents.removeClass("active");

        // Find the tab and content with specified data-rel
        var targetTab = $('.tab-menu-2 ul li a[data-rel="' + tabRel + '"]').parent();
        var targetContent = $("#" + tabRel);

        targetTab.addClass("active");
        targetContent.addClass("active");
    }

    $(".btn-detail-basic").on("click", function() {
        activateTab("basic");
    });

    $(".btn-detail-linked").on("click", function() {
        activateTab("linked");
    });

    $(".btn-detail-startup").on("click", function() {
        activateTab("startup");
    });

    $(".btn-detail-quantum").on("click", function() {
        activateTab("quantum");
    });

    // 스크롤 이동
    $('.smooth-scroll').on('click', function(event) {
                event.preventDefault();

                var target = $(this.getAttribute('href'));
                if(target.length) {
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, 700);
                }
    });

    $('.more-btn').on('click', function() {
        var moreHidden = $(this).closest('.pricing-type').find('.more-hidden');
        moreHidden.toggleClass('active');

        var $arrowIcon = $(this).find('img');
        var $textElement = $(this).find('p');

        if (moreHidden.hasClass('active')) { // 활성화된 경우
            $textElement.text('접기');
            $arrowIcon.css('transform', 'rotate(0deg)');
        } else { // 비활성화된 경우
            $textElement.text('기능 더보기');
            $arrowIcon.css('transform', 'rotate(180deg)');
        }
    });


});