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


// 애니메이션
gsap.registerPlugin(ScrollTrigger);

const cont__ani = gsap.utils.toArray('.cont__ani');
gsap.set(cont__ani, {transform: "translateY(50%)", opacity: 0 });
cont__ani.forEach(cont__aniItem => {
    gsap.to(cont__aniItem, {
        transform: "translateY(0%)",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: cont__aniItem,
            start: 'top 80%',
            toggleActions: "play none none none",
        }
    });
});

const cont__ani_slow = gsap.utils.toArray('.cont__ani_slow');
gsap.set(cont__ani_slow, {transform: "translateY(30%)", opacity: 0 });
cont__ani_slow.forEach(cont__ani_slowItem => {
    gsap.to(cont__ani_slowItem, {
        transform: "translateY(0%)",
        opacity: 1,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
            trigger: cont__ani_slowItem,
            start: 'top 80%',
            toggleActions: "play none none none",
        }
    });
});

const cont__ani_delay = gsap.utils.toArray('.cont__ani_delay');
gsap.set(cont__ani_delay, {transform: "translateY(50%)", opacity: 0 });
cont__ani_delay.forEach(cont__ani_delayItem => {
    gsap.to(cont__ani_delayItem, {
        transform: "translateY(0%)",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
            trigger: cont__ani_delayItem,
            start: 'top 70%',
            toggleActions: "play none none none",
        }
    });
});

const cont__ani_delay_short = gsap.utils.toArray('.cont__ani_delay_short');
gsap.set(cont__ani_delay_short, {transform: "translateY(30%)", opacity: 0 });
cont__ani_delay_short.forEach(cont__ani_delay_shortItem => {
    gsap.to(cont__ani_delay_shortItem, {
        transform: "translateY(0%)",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
            trigger: cont__ani_delay_shortItem,
            start: 'top 70%',
            toggleActions: "play none none none",
        }
    });
});

const cont__ani_delay_first = gsap.utils.toArray('.cont__ani_delay_first');
gsap.set(cont__ani_delay_first, {transform: "translateY(50%)", opacity: 0 });
cont__ani_delay_first.forEach(cont__ani_delay_firstItem => {
    gsap.to(cont__ani_delay_firstItem, {
        transform: "translateY(0%)",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: cont__ani_delay_firstItem,
            start: 'top 60%',
            toggleActions: "play none none none",
        }
    });
});

document.querySelectorAll(".contents, .pricing").forEach((section, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contents .content-box",
        start: "top +70%",
        end: "top +=400",
        toggleActions: "play none none none"
      }
    });
  
    tl.fromTo(
      section.querySelectorAll(".box__ani1"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
      "+=0.5"
    );
  
    tl.fromTo(
      section.querySelectorAll(".box__ani2"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
      "-=0.3"
    );
    tl.fromTo(
        section.querySelectorAll(".box__ani3"),
        { opacity: 0, transform: "translateY(50%)" },
        { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
        "-=0.3"
      );
      tl.fromTo(
        section.querySelectorAll(".box__ani4"),
        { opacity: 0, transform: "translateY(50%)" },
        { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
        "-=0.3"
      );
  });



document.querySelectorAll(".function, .use").forEach((section, index) => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top +70%",
        end: "top +=400",
        toggleActions: "play none none none"
      }
    });
  
    tl2.fromTo(
      section.querySelectorAll(".box__ani1"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
      "+=0"
    );
  
    tl2.fromTo(
      section.querySelectorAll(".box__ani2"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
      "-=0.5"
    );
  
    tl2.fromTo(
      section.querySelectorAll(".box__ani3"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
      "-=0.5"
    );
  
    tl2.fromTo(
      section.querySelectorAll(".box__ani4"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", duration: 0.7 },
      "-=0.5"
    );
  });