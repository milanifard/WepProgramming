/*------------menu--------------*/
var timer = {};
$("#menu-top li").hover(function () {
        var tag = $(this);
        var getDataTime = tag.attr("data-time");
        tag.addClass("active-menu");

        clearTimeout(timer[getDataTime]);
        timer[getDataTime] = setTimeout(function () {
            $(" > ul ", tag).fadeIn(0);
            $(" > .top-menu-3 ", tag).fadeIn(0);
        }, 400);
    },
    function () {
        var tag = $(this);
        var getDataTime = tag.attr("data-time");
        tag.removeClass("active-menu");

        clearTimeout(timer[getDataTime]);
        timer[getDataTime] = setTimeout(function () {
            $(" > ul ", tag).fadeOut(0);
            $(" > .top-menu-3 ", tag).fadeOut(0);
        }, 600);

    });


/*--------------------slider--------------------*/

var nextSlide = 1;
var sliderTag = $("#slider");
var sliderItems = sliderTag.find(".item");
var iteNum = sliderItems.length;
var sliderNavigators = sliderTag.find("#slider-navigator li");
var timeOut = 4000;


function slider() {
    if (nextSlide > iteNum) {
        nextSlide = 1;
    }
    if (nextSlide < 1) {
        nextSlide = iteNum;
    }

    sliderItems.fadeOut();
    sliderItems.eq(nextSlide - 1).fadeIn(100);

    sliderNavigators.removeClass("active");
    sliderNavigators.eq(nextSlide - 1).addClass("active");
    nextSlide++;
}

slider();
var sliderInterval = setInterval(slider, timeOut);

sliderTag.mouseleave(function () {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slider, timeOut);
});

function goToNext() {
    slider();
}

function goToPrev() {
    nextSlide = nextSlide - 2;
    slider();
}

function goToSlide(index) {
    nextSlide = index;
    slider();
}

$("#slider #next").click(function () {
    clearInterval(sliderInterval);
    goToNext();
});
$("#slider #prev").click(function () {
    clearInterval(sliderInterval);
    goToPrev();
});

$("#slider #slider-navigator ul li").hover(function () {
    clearInterval(sliderInterval);
    var index = $(this).index();
    goToSlide(index + 1);
}, function () {
});


/*---------------------------slider2-----------*/

nextSlide2 = 1;
var sliderTag2 = $("#slider2");
var sliderItems2 = sliderTag2.find("#slider2-content > a");
var sliderNum2 = sliderItems2.length;
var sliderNavigators2 = sliderTag2.find("#slider2-navigator ul li");
var timeOut2 = 4000;

function slider2() {
    if (nextSlide2 > sliderNum2) {
        nextSlide2 = 1;
    }

    sliderNavigators2.removeClass("active2");
    sliderNavigators2.eq(nextSlide2 - 1).addClass("active2");

    sliderItems2.fadeOut();
    sliderItems2.eq(nextSlide2 - 1).fadeIn();
    nextSlide2++;

}

slider2();
var sliderInterval2 = setInterval(slider2, timeOut2);

sliderTag2.mouseleave(function () {
    sliderInterval2 = setInterval(slider2, timeOut2);
});

function goToSlide2(index) {
    nextSlide2 = index;
    slider2();
}

$("#slider2 #slider2-navigator ul li").click(function () {
    clearInterval(sliderInterval2);
    var index = $(this).index();
    goToSlide2(index + 1);
});


/*-----------------------timer---------------*/
$("#main #content #slider2 .flipTimer").flipTimer({
    direction: "down",
    date: "September 5,2021 22:55:00",
    callback: function () {
        $(".slider2-content-right").css("opacity", ".4");
        $(".slider2-content-left").css("opacity", ".4");
        $("#slider2 #slider2-finish").fadeIn(200);
    }
});


/*-----------------slider-scroll 1 ---------------*/

function sliderScroll(direction, tag) {

    var spanTag = $(tag);
    var sliderScrollTag = spanTag.parents(".sliderScroll");
    var sliderScrollUl = sliderScrollTag.find(".sliderScroll-main ul");
    var sliderScrollItems = sliderScrollUl.find("li");
    var sliderItemsNum = sliderScrollItems.length;
    var sliderScrollNum = Math.ceil(sliderItemsNum / 4);
    var maxNegativeMargin = -(sliderScrollNum - 1) * 780;

    sliderScrollUl.css("width", sliderItemsNum * 195);


    var marginRightOld = sliderScrollUl.css("margin-right");
    marginRightOld = parseFloat(marginRightOld);
    var marginRightNew;

    if (direction === 'next') {

        marginRightNew = marginRightOld - 780
    } else if (direction === "prev") {
        marginRightNew = marginRightOld + 780;
    }

    if (marginRightNew < maxNegativeMargin) {
        marginRightNew = 0;
    }
    if (marginRightNew > 0) {
        marginRightNew = maxNegativeMargin;
    }

    sliderScrollUl.animate({"marginRight": marginRightNew}, 1000);
}

/*-----------------------------page register-------------*/

$("#register-main .div-check .input-check").click(function () {
    if ($(this).is(":checked")) {
        $(this).parents(".div-check").find("span").addClass("check");
    } else {
        $(this).parents(".div-check").find("span").removeClass("check");
    }
});

/*------------------------------login page----------------*/
$("#login-main .div-check .input-check").click(function () {
    if ($(this).is(":checked")) {
        $(this).parents(".div-check").find("span").addClass("check");
    } else {
        $(this).parents(".div-check").find("span").removeClass("check");
    }
});
/*----------------------search page--------------------------*/
$("#search-sidebar .filter-ul li .input-check").click(function () {
    if ($(this).is(":checked")) {
        $(this).parents("li").find("span:first-child").addClass("check1");
    } else {
        $(this).parents("li").find("span:first-child").removeClass("check1");
    }
});

/*--------------- filter-top-----------*/

var filters = $("#search-content .filter-top > li");
var items = $("#search-content .options li");

filters.hover(function () {
    $(".options", this).slideDown(200);
}, function () {
    $(".options", this).slideUp(200);
});

items.hover(function () {
    $(".square", this).addClass("square-hover");
}, function () {
    $(".square", this).removeClass("square-hover");
});


items.click(function () {
    var title = $(this).parents("li").find(".title").text();
    var value = $(this).text();
    var id = $(this).attr("data-id");
    var filterSelected = $("#filter-selected");
    var filterSelectedSpan = filterSelected.find("span[data-id= " + id + "]")
    var len = filterSelectedSpan.length;

    if (len > 0) {
        filterSelectedSpan.remove();
    } else {
        var span = "<span class='yekan filter-selected-span' data-id='" + id + "'>" + title + ":" + value + "<i onclick='removeIcon(this)'></i></span>";
        filterSelected.append(span);
    }

    $(".square", this).toggleClass("square-selected");
});


function removeIcon(tag) {
    $(tag).parents("span").remove();
    var getId = $(tag).parents("span").attr('data-id');
    $("#search-content .filter-top .options li[data-id = " + getId + "] span").removeClass("square-selected");
}

/*-----------products and search----*/
$("#search-content #search .display-type .type2").click(function () {
    $("#search-content #products").addClass("display");
    $(this).parents("span").addClass("active");
});
$("#search-content #search .display-type .type1").click(function () {
    $("#search-content #products").removeClass("display");
    $(this).parents("span").removeClass("active");
});

var yesno = $("#search-content #search .exist .yesno");
yesno.click(function () {
    yesno.parents(".exist").toggleClass("active");
    if (yesno.parents(".exist").hasClass("active")) {
        yesno.animate({left: "11px"}, 200);
    } else {
        yesno.animate({left: "-1px"}, 200);
    }
});
/*----------------------------------------product page-----------------*/

$("#main #offer .flipTimer").flipTimer({
    direction: "down",
    date: "August 24,2021 24:00:00",
});

var getLi = $("#details .left .tow-col .right1 ul.colors li");
$("span", getLi).click(function () {
    getLi.removeClass("active");
    $(this).parents("li").addClass("active");
});

var getSelect = $("#details .left .tow-col .right1 .selectList");
getSelect.click(function () {
    $("ul", this).slideToggle();
});

$("ul li", getSelect).click(function () {
    var getText = $(this).text();
    $(this).parents(".selectList").find("span").text(getText);
});

$("#main #introduction a.more").click(function () {
    $(this).parents("#introduction").toggleClass("active");
    if ($(this).parents("#introduction").hasClass("active")) {
        $(".text", this).text("کمتر");
    } else {
        $(".text", this).text("بیشتر");
    }
});

/*---------------------sliderProduct-----------*/
var getSliderProductContent = $("#main .sliderProduct .sliderProduct-content");

function sliderProduct(direction) {
    var getLi = getSliderProductContent.find(".sliderProduct-main ul li");
    var marginRightOld = getSliderProductContent.find(".sliderProduct-main ul").css("margin-right");
    var marginRightNew;
    var widthUl = getLi.length * 210;
    var maxNegativeMargin = -(Math.ceil(getLi.length / 5) - 1) * 1050;
    marginRightOld = parseFloat(marginRightOld);

    getSliderProductContent.find(".sliderProduct-main ul").css("width", widthUl);

    if (direction === "next") {
        marginRightNew = marginRightOld - 1050;
    } else if (direction === "prev") {
        marginRightNew = marginRightOld + 1050;
    }

    if (marginRightNew < maxNegativeMargin) {
        marginRightNew = 0;
    } else if (marginRightNew > 0) {
        marginRightNew = maxNegativeMargin;
    }

    getSliderProductContent.find(".sliderProduct-main ul").animate({"marginRight": marginRightNew}, 1000);


}

/*------------------------------------tab----------------------------*/
$("#main > .tab > li").click(function () {
    var tag = $("#main > .tab-child > section");

    $("#main > .tab > li").removeClass("active");
    $(this).addClass("active");

    tag.fadeOut(0);
    var index = $(this).index();
    tag.eq(index).fadeIn(200);
});

$("#main > .tab-child > .section-naghd > .itemContainer > .item h4 i").click(function () {
    var itemContent = $(this).parents(".item");
    itemContent.toggleClass("active");
    $(".discription", itemContent).slideToggle(500);
});

/*-------------------elevateZoom----------*/

$("#main #details .right .image img").elevateZoom({

    "zoomWindowOffetx": -900,
    "zoomWindowOffety": -20,
    "zoomWindowWidth": 500,
    "zoomWindowHeight": 500,
    "zoomWindowFadeIn": true,
    "zoomWindowFadeOut": true,
    "borderSize": 4,
    "borderColour": "#6ba9ff",
    "easing": true,
    "lensFadeIn": true,
    "lensFadeOut": true,
    "tint": true,
    "tintColour": "#6ba9ff",
    "cursor": "pointer",
    "lensZoom": true,
});

/*-------------------------scroll-------------*/
$("#product-gallery .product-gallery-content .left").mCustomScrollbar({
    setWidth: false,
    setHeight: false,
    setTop: 0,
    setLeft: 0,
    axis: "y",
    scrollbarPosition: "inside",
    scrollInertia: 1000,
    autoDraggerLength: true,
    autoHideScrollbar: false,
    autoExpandScrollbar: false,
    alwaysShowScrollbar: 0,
    snapAmount: null,
    snapOffset: 0,
    mouseWheel: {
        enable: true,
        scrollAmount: "auto",
        axis: "y",
        preventDefault: false,
        deltaFactor: "auto",
        normalizeDelta: false,
        invert: false,
        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
    },
    scrollButtons: {
        enable: true,
        scrollType: "stepless",
        scrollAmount: "auto"
    },
    keyboard: {
        enable: true,
        scrollType: "stepless",
        scrollAmount: "auto"
    },
    contentTouchScroll: 25,
    advanced: {
        autoExpandHorizontalScroll: false,
        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
        updateOnContentResize: true,
        updateOnImageLoad: true,
        updateOnSelectorChange: false,
        releaseDraggableSelectors: false
    },
    theme: "3d-dark",

    callbacks: {
        onInit: false,
        onScrollStart: false,
        onScroll: false,
        onTotalScroll: false,
        onTotalScrollBack: false,
        whileScrolling: false,
        onTotalScrollOffset: 0,
        onTotalScrollBackOffset: 0,
        alwaysTriggerOffsets: true,
        onOverflowY: false,
        onOverflowX: false,
        onOverflowYNone: false,
        onOverflowXNone: false
    },
    live: false,
    liveSelector: null
});

/*----------------gallery-------------*/

var productGallery = $("#product-gallery")

function showGallery(dataMainImage, index) {
    if (dataMainImage.length > 0) {
        productGallery.find(".product-gallery-content .right img").attr("src", dataMainImage);
        productGallery.find("#canvas").fadeOut(0);
        productGallery.find(".mainImage").fadeIn(200);
    } else {
        productGallery.find(".mainImage").fadeOut(0);
        productGallery.find("#canvas").fadeIn(200);
    }

    productGallery.find(".product-gallery-content .left ul li").removeClass('active');
    productGallery.find(".product-gallery-content .left ul li").eq(index).addClass("active");
}


productGallery.find(".product-gallery-content .left ul li").click(function () {
    var index = $(this).index();
    var dataMainImage = $(this).attr("data-main-image");
    showGallery(dataMainImage, index);
});

$("#main #details .right .gallery ul li").click(function () {
    $("#page-dark").fadeIn(200);
    $("#product-gallery").fadeIn(200);

    var index = $(this).index();
    index++;
    var dataMainImage = $(this).attr("data-main-image");
    if (dataMainImage === "") {
        index = 1;
        dataMainImage = $(this).parents("ul").find("li").eq(0).attr("data-main-image");

    }

    showGallery(dataMainImage, index);
});

productGallery.find(".product-gallery-header i.close").click(function () {
    $("#product-gallery").fadeOut(0);
    $("#page-dark").fadeOut(0);
});

/*--------------canvas----------*/

var canvas = document.getElementById("canvas");
var viewer = new JSC3D.Viewer(canvas, {
    SceneUrl: "image/product-page/gallery/3d/bmw.obj",
    InitRotationY: -90,
    InitRotationZ: 0,
    RenderMode: "texturesmooth",
});
viewer.init();
viewer.update();

/*-----------------------------------panel page--------------------*/
var tagLi= $("#main .main-panel .box ul.tab li");
tagLi.click(function () {
    tagLi.removeClass("active1");
    $(this).addClass("active1");

    var getSection = $("#main > .main-panel > .box > .tab-child > section");
    var index = $(this).index();
    getSection.fadeOut(0);
    getSection.eq(index).fadeIn(0);
});

$("#main .main-panel .box .tab-child section .details .subTable .order-steps ul li").click(function () {
    $(this).toggleClass("active");
});

function showDetailsTr(tagI) {
    var getI = $(tagI);
    getI.toggleClass("active");
    var getTr = getI.parents("tr");
    getTr.next().fadeToggle(100);
}

$("#main .main-panel .box .favorite ul li").hover(function () {
    $(".edit", this).fadeIn(200);
}, function () {
    $(".edit", this).fadeOut(0);
});

/*--------------------------------------showCard page---------------------*/
$("#main .main-showCard .content table tr td > .select").click(function () {
    $(this).toggleClass("active");
    $(this).parents("td").find(".options").slideToggle();
});
$("#main .main-showCard .content table tr td > .options .option").click(function () {
        getText = $(this).text();
        $(this).parents("td").find(">.select").text(getText);
        $(this).parents(".options").slideUp();
        $(this).parents("td").find("> .select").removeClass("active");
    }
);
/*---------------------------------showCard1 page ------------------*/
$("#main .main-showCard1 .header .order-steps ul li").click(function () {
    $(this).toggleClass("active");
});

/*-----------------------------showCard2 page-------------------------*/
$("#main .main-showCard2 .header .order-steps ul li").click(function () {
    $(this).toggleClass('active');
});

$("#main .main-showCard2 .content table").click(function () {
    $(this).toggleClass("active");
});

$("#main .main-showCard2 .content .choice-address .title .btn-gray").click(function () {
    $(".add-newaddres").fadeIn();
    $(".dark-page").fadeIn();
});

$(".add-newaddres .header i").click(function () {
    $(this).parents(".add-newaddres").fadeOut();
    $(".dark-page").fadeOut();
});

$(".selectpicker").selectpicker();

/*-------------------------------------showCard3 page-----------------*/

$("#main .main-showCard3 .header .order-steps ul li").click(function () {
    $(this).toggleClass("active");
});

$("#main .main-showCard3 .content table tr td > .select").click(function () {
    $(this).toggleClass("active");
    $(this).parents("td").find(".options").slideToggle();
});
$("#main .main-showCard3 .content table tr td > .options .option").click(function () {
        getText = $(this).text();
        $(this).parents("td").find(">.select").text(getText);
        $(this).parents(".options").slideUp();
        $(this).parents("td").find("> .select").removeClass("active");
    }
);
/*------------------------------------------showCard4 page -------------------*/
