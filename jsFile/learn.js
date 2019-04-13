RCRD( 	  �{          @      �~�    i�                      ���      �     
~�    �}�            (          h             (   (                     0��    ~�                    X          h             (  @    �                �      �     �      �      �     ~�     &~�    ~�    ~�    �          h             ( @ h @   8                aٽ�6��aٽ�6��]�u��p�                    �          0��    ����6������6��]�u��p�                    �        i�    });

    $("header nav li").click(function() {
        navChecked(this);
    });

    leftNavLoad();

    loadContentPage();

    $(".toggleDynamicAnchor").on("click", function() {
        var hasRoot = $("root[data-root] section").length != 0;
        if (hasRoot) {
            $(this).next(".dynamicAnchor").toggle(200);
        } else {
            $(this).next(".dynamicAnchor").hide(200);
        }
    });
    $(document).off("click", ".dynamicAnchor a").on("click", ".dynamicAnchor a", function(e) {
        animateScrollTarget(this, e);
    })
    // 鐐瑰嚮鍏跺畠鍦版柟闅愯棌鈥滃姩鎬侀敋鐐瑰鑸€�
    $(".content,.dynamicAnchor").on("click", function() {
        $(".dynamicAnchor").hide(300);
    });
    // content婊氬姩瑙﹀彂鐨勪簨浠�
    $(".content").scroll(function() {
        // 鍥炲埌椤甸潰椤堕儴鎸夐挳鍑虹幇鏉′欢
        toggleToTopButton();
        // 閫氳繃婊氬姩浜嬩欢鍒ゆ柇鍔ㄦ€侀敋鐐圭殑閫変腑鐘舵€�
        setAnthorAction();
    })
    // 鍥炲埌椤甸潰椤堕儴鐨勫姩鐢绘晥鏋�
    $("a.toWinTop").on("click", function() {
        contentToTop();
    });
});

/**********************************************/
/* 鍑芥暟瀹氫箟閮ㄥ垎 */
/**********************************************/
/**
 * 鍔熻兘锛氬鑸寜閽偣鍑婚€変腑
 * 鍙傛暟锛�1銆佸鑸寜閽殑class閫夋嫨绗�
 **/

function navChecked(navBtn) {
    $(navBtn).addClass("checked").siblings("li").removeClass("checked");
    // 鑾峰彇绱㈠紩鍊�
    var idx = $(navBtn).index();
    // 鑾峰彇璇ュ鑸渶璺宠浆鍒扮殑娆㈣繋椤�
    switch (idx) {
        case 0:
            // HTML娆㈣繋椤�
            laodWelcome("html-pages/html/html-welcome.html");
            break;
        case 1:
            // CSS娆㈣繋椤�
            laodWelcome("html-pages/css/css-welcome.html");
            break;
        case 2:
            // JavaScript娆㈣繋椤�
            laodWelcome("html-pages/javascript/js-welcome.html");
            break;
        case 3:
            // jQuery娆㈣繋椤�
            laodWelcome("html-pages/jquery/jq-welcome.html");
            break;
        case 4:
            // Bootstrap娆㈣繋椤�
            laodWelcome("html-pages/bootstrap/bs-welcome.html");
            break;
        case 5:
            // AngularJS娆㈣繋椤�
            laodWelcome("html-pages/angularjs/ng-welcome.html");
            break;
        case 6:
            // more娆㈣繋椤�
            laodWelcome("html-pages/more/more-welcome.html");
            break;
        default:
            laodWelcome("html-pages/html/html-welcome.html");
            break;
    }

    function laodWelcome(welcomeURL) {
        $.get(welcomeURL, function(rqContent) {
            $(".content").html(GLOBAL.loadingAnimate);
            setTimeout(function() {
                $(".content").html(rqContent);
            }, 10);
        });
        var local = location,
            // 鏈嶅姟鍣ㄥ悕绉�+绔彛鍙�
            lc_origin = local.origin,
            // 棣栭〉鍚嶇О
            lc_name = local.pathname;
        // 鑾峰彇绠€鍗曟枃浠跺悕锛堜笉甯︽墿灞曞悕锛�
        var fileName = welcomeURL.substr(welcomeURL.lastIndexOf("\/") + 1),
            // 鑾峰彇鍒版枃浠跺悕鐨勬枃鏈暱搴�
            fileName_len = fileName.length,
            // 鑾峰彇鏂囦欢绫诲瀷(鎵╁睍鍚�)
            file_extentionName = fileName.substr(fileName.indexOf("\.")),
            // 瀹氫箟绠€鍗曟枃浠跺悕鍙橀噺
            fileName_simple = "";
        // 鍒ゆ柇鏂囦欢绫诲瀷锛岃鍓墿灞曞悕
        if (file_extentionName == ".php" || file_extentionName == ".htm" || file_extentionName == ".jsp" || file_extentionName == ".asp" || file_extentionName == ".pyc" || file_extentionName == ".xml") {
            fileName_simple = fileName.substr(0, fileName_len - 4);
        } else if (file_extentionName = ".html") {
            fileName_simple = fileName.substr(0, fileName_len - 5);
        }
        // 浠庢柊璁剧疆娴忚鍣ㄥ湴鍧€鏍忕殑淇℃伅(IP鍦板潃銆佺鍙ｅ彿+绱㈠紩椤�+绠€鍗曟枃浠跺悕)
        //location.href = local.origin + local.pathname + "#" + fileName_simple;
        // 浠庢柊璁剧疆娴忚鍣ㄥ湴鍧€鏍忕殑淇℃伅(IP鍦板潃銆佺鍙ｅ彿+绠€鍗曟枃浠跺悕)
        location.href = local.origin + "#" + fileName_simple;
    }
}
/**
 * 鍔熻兘锛氶€氳繃椤堕儴瀵艰埅鍔ㄦ€佹帶鍒跺乏渚у鑸殑鍔犺浇
 * 鍙傛暟锛�
 **/

function leftNavLoad() {
    $("nav.topNav li").on("click", function() { /* 鍔熻兘锛氳姹傚乏渚у鑸垪琛ㄥ唴瀹�; 鍙傛暟锛歎RL鍦板潃 */
        var getNavHtml = function(url) {
            $.get(url, function(rqCont) {
                var leftNav = $("nav.leftNav"),
                    hasUl = leftNav.has("ul").length;
                // 濡傛灉鍚湁涓€涓垪琛�
                if (hasUl) {
                    // 绉婚櫎璇ュ垪琛�
                    leftNav.children("ul").remove();
                }
                // 鍔犺浇璇锋眰鍒楄〃
                leftNav.html(rqCont);
            });
        },
            // 鑾峰彇绱㈠紩鍊硷紝浠庤€屽姞杞芥寚瀹氭ā鍧楅〉
            idx = $(this).index();
        switch (idx) {
            case 0:
                getNavHtml("/html-module/html.html");
                break;
            case 1:
                getNavHtml("/html-module/css.html");
                break;
            default:
                getNavHtml("/html-module/html.html");
                break;
        }
    });
}
/**
 * 鍔熻兘锛氱偣鍑诲乏渚у鑸紝鍚戔€渄iv.content鈥濊浇鍏ラ〉闈�
 **/

function loadContentPage() {
    // 缁欏乏渚у鑸爮瓒呴摼鎺ョ粦瀹氫竴涓偣鍑讳簨浠�
    $(document).on("click", ".leftNav a", function(e) {
        // 缁勭粐榛樿鐨勮烦杞�
        e.preventDefault();
        var content = $(".content"),
            // 鑾峰彇璇ヨ秴閾炬帴鎸夐挳璁剧疆鐨剈rl
            attrURL = $(this).attr("href");
        // 杞藉叆鍔ㄧ敾
        content.html(GLOBAL.loadingAnimate);
        // 娣诲姞鎸夐挳閫変腑鏁堟灉
        $(this).addClass("checked").parent("li").siblings("li").children("a").removeClass("checked");
        // 璇锋眰url鎸囧畾鐨勯〉闈�
        $.get(attrURL, function(rqContent) {
            // 妯℃嫙涓€涓欢杩熸晥鏋�
            setTimeout(function() {
                // 绉婚櫎绛夊緟鍔ㄧ敾
                GLOBAL.removeLoadingAnimate();
                // 杞藉叆骞舵樉绀鸿椤甸潰
                content.html(rqContent);
                // 璁剧疆鈥滃姩鎬侀敋鐐光€濆鑸強璁剧疆鍐呴儴<section>鐨処D
                var dynAnchorUl = $(".dynamicAnchor ul"),
                    section = $("root[data-root]").find("section"),
                    section_len = section.length;
                // 閲嶇疆鈥滃姩鎬侀敋鐐光€濆鑸唴瀹�
                dynAnchorUl.html("");
                for (var i = 0; i < section_len; i++) {
                    // 娣诲姞鈥滃姩鎬侀敋鐐光€濆鑸鍣ㄧ殑ID
                    section.eq(i).children("h3").attr("id", "sec-" + i);
                    // 鑾峰彇椤甸潰鍐呯珷鑺傜殑鏍囬鍚嶇О鏂囨湰
                    var secHtml = section.eq(i).children("h3").html();
                    dynAnchorUl.append('<li><a href="#sec-' + i + '">' + secHtml + '</a></li>');
                }
                // 寤惰繜璁剧疆iframe鍐呭楂樺害锛堥槻姝㈤〉闈㈠唴瀹规病鏈夊姞杞藉畬鎴愶級
                var abc = setTimeout(function() {
                    // 鑾峰彇褰撳墠椤靛唴iframe鐨勪釜鏁�
                    var ifr = $("iframe.codeEffect"),
                        ifr_len = ifr.length;
                    for (var i = 0; i < ifr_len; i++) {
                        var ifr_height = ifr.eq(i).contents().find("body").outerHeight();
                        ifr.eq(i).css("height", (ifr_height + 22) + "px");
                    }
                }, 1000);
            }, 0);
        });
    });
}
/*
 * 鍔熻兘锛氬洖鍒伴〉闈㈤《閮ㄦ寜閽嚭鐜版潯浠�
 * 娣诲姞鏃ユ湡锛�2016骞�8鏈�28鏃�
 */

function toggleToTopButton() {
    // 鑾峰彇鈥滃唴瀹光€濆厓绱犲綋鍓嶆粴鍔ㄦ潯鐨勯珮搴�
    var content = $(".main[data-main]").children(".content"),
        contentScrollTop = content.scrollTop(),
        // 鍥炲埌椤堕儴鎸夐挳
        toTopButton = $("a.toWinTop");
    // 灏嗘粴鍔ㄦ潯鐨勫嚭鐜版潯浠惰缃负褰撴粴鍔ㄨ窛绂诲厓绱犻《閮�500鍍忕礌鐨勫湴鏂�
    if (contentScrollTop > 500) {
        toTopButton.css("bottom", "6px");
    } else {
        toTopButton.css("bottom", "-48px");
    }
}
/*
 * 鍔熻兘锛氬洖鍒伴〉闈㈤《閮ㄧ殑鍔ㄧ敾鏁堟灉
 * 娣诲姞鏃ユ湡锛�2016骞�8鏈�28鏃�
 */

function contentToTop() {
    // 鑾峰彇鈥滃唴瀹光€濆厓绱犲綋鍓嶆粴鍔ㄦ潯鐨勯珮搴�
    var content = $(".main[data-main]").children(".content"),
        contentScrollTop = content.scrollTop();
    content.animate({
        scrollTop: "0"
    }, 600);
}
/*
 * 鍔熻兘锛氬姩鐢绘晥鏋滄粴鍔ㄥ埌鍔ㄦ€侀敋鐐规寚鍚戠殑鐩爣
 * 娣诲姞鏃ユ湡锛�2016骞�8鏈�29鏃�
 * 鍙傛暟锛�1銆佹寜閽湰韬紱2銆佷簨浠跺弬鏁�
 */

function animateScrollTarget(thisAnthor, event) {
    // 闃绘榛樿浜嬩欢
    event.preventDefault;
    // 鑾峰彇閿氱偣鎸夐挳鐨勭储寮曞€硷紝閿氱偣鐩爣璺濈褰撳墠绐楀彛椤堕儴鐨勪綅缃紝鍐呭绐楀彛鐨勬粴鍔ㄦ潯浣嶇疆璺濈椤堕儴鐨勯珮搴�
    var Anchor_index = $(thisAnthor).parent().index(),
        targetH3_offsetTop = $("section h3").eq(Anchor_index).offset().top,
        content = $("[data-main]").children(".content"),
        content_scrollTop = content.scrollTop();
    // 閫氳繃璁＄畻锛屽皢婊氬姩鏉′綅缃仠鐣欏埌鎸囧畾鐨勭珷鑺傛爣棰樹綅缃紝鈥�74鈥濇槸鏍囬鐩掑瓙妯″瀷鍗犳嵁鐨勯珮搴︾殑绾﹁鍊�
    content.animate({
        scrollTop: (content_scrollTop + targetH3_offsetTop) - 74 + "px"
    }, 600);
    // 涓哄綋鍓嶉敋鐐规坊鍔犫€滈€変腑鏁堟灉鈥濓紝绉婚櫎鐖剁骇鍚岀骇閿氱偣鎸夐挳鐨勯€変腑鏁堟灉
    $(thisAnthor).addClass("active").parent().addClass("active").siblings("li").removeClass("active").children().removeClass("active");
}
/*
 * 鍔熻兘锛氶€氳繃婊氬姩浜嬩欢鍒ゆ柇鍔ㄦ€侀敋鐐圭殑閫変腑鐘舵€�
 * 娣诲姞鏃ユ湡锛�2016骞�8鏈�29鏃�
 */

function setAnthorAction() {
    var contentSec = $("[data-root]").children("section"),
        contentSec_len = contentSec.length;
    for (var i = 0; i < contentSec_len; i++) {
        var secOffsetTop = contentSec.eq(i).offset().top;
        if (secOffsetTop < 300 && secOffsetTop > -74) {
            $(".dynamicAnchor li").eq(i).addClass("active");
            $(".dynamicAnchor li").eq(i).children("a").addClass("active");
            $(".dynamicAnchor li").eq(i).siblings("li").removeClass("active").children("a").removeClass("active");
            return;
        }
    }
}