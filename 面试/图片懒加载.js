
$window.on('load scroll', function () {
    // 获取浏览器底边框距离body的距离
    let $browse = $window.outerHeight() + $window.scrollTop();

    // 循环每张图片区域，根据自己区域距离body的距离，计算出里面的图片是否加载
    $imgBoxs.each((index, item) => {
        let $item = $(item);
        let $itemA = $item.outerHeight() + $item.offset().top;
        let isLoad = $item.attr('isLoad');

        // 如果差值和处理标识都满足条件则执行处理
        if ($itemA <= $browse && isLoad !== 'true') {
            // 标识是否进行过处理
            $item.attr('isLoad', true);

            // 加载当前区域中的真实图片
            let $img = $item.children('img');
            $img.attr('src', $img.attr('data-img'));
            $img.on('load', () => {
                // 加载成功
                $img.stop().fadeIn();
            });
        }
    });
})
