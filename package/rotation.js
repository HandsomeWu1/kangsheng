(function() {
    var $box = $("#rotationbox"),
        $picLi = $("#rotationbox .pic li"),
        $tabLi = $("#rotationbox .tab li"),
        len = $tabLi.length,
        timer;
    $box.height($picLi.height());
    first = 0;
    //初始化设置
    $picLi.hide().eq(0).show(); //隐藏$picLi 然后显示第一个
    $tabLi.eq(0).addClass("on");
    //tab区域
    $tabLi.click(function() {
        var x = $(this).index(); //tabLi[i].index = i;
        if (x != first) {
            change(x);
        }
    });
    auto();
    $box.hover(function() {
        clearInterval(timer);
    }, auto);
    //实现点击图片到具体页面
    $picLi.click(function() {
        var x = $(this).index(); //picLi[i].index = i;
        var boxes = document.querySelectorAll(".box1");
        var navs = document.querySelectorAll('#nav');
        console.log(boxes);
        console.log(x);
        boxes[0].className = "box1";
        boxes[x].className = "box1 current";
        navs[0].className = "hide interval";
        navs[x].className = "navchecked interval";
    });

    function auto() {
        timer = setInterval(function() {
            var x = first;
            x++;
            x %= len;
            change(x);
        }, 3000)
    }
    //变化函数
    function change(i) {
        $picLi.eq(first).fadeOut(2000);
        $tabLi.eq(first).removeClass("on");
        first = i;
        $picLi.eq(first).fadeIn(2000);
        $tabLi.eq(first).addClass("on");
    }
})();