var $body = $('body');
            var $head_right_div = $('.head_right_div');

            $body.on('click', function(e){
                var target = e.target;
                var currentTarget = e.currentTarget;
                if($(target).parents('.head_right_ul').length > 0) {
                    if($head_right_div.css('opacity') == 1){
                        $head_right_div.css('display', 'none')
                        $head_right_div.animate({
                            opacity: 0,
                            top: '200px'
                        }, 0) 
                    }else {
                        $head_right_div.css('display', 'initial');
                        $head_right_div.animate({
                            opacity: 1,
                            top: '51px'
                        },500)
                    }
                }else {
                    $head_right_div.css('display', 'none')
                    $head_right_div.animate({
                        opacity: 0,
                        top: '200px'
                    }, 0)
                }
            })

            // var $nva_ul_li4_ul = $('.nva_ul_li4_ul');

        
            // $('.nva_ul_li4_div').on('click', function(){
            //     if($nva_ul_li4_ul.css('opacity') == 1){   
            //         $nva_ul_li4_ul.css({
            //             opacity: 0,
            //             width: 0,
            //             height: 0
            //         })
            //     }else {
            //         $nva_ul_li4_ul.css({
            //             opacity: 1,
            //             width: '220px',
            //             height: '80px'
            //         })
            //     }
            // })


            // var $nva_ul_li4_a_span_i = $('.nva_ul_li4_a_span_i');
            // var $nva_ul_li4_a_span_i1 = $('.nva_ul_li4_a_span_i1');

            // $('.nva_ul_li4_div').on('click', function(){
            //     if($nva_ul_li4_a_span_i.css('opacity') == 1){
            //         $nva_ul_li4_a_span_i.css({
            //             opacity: 0,
            //         })
            //     }else {
            //         $nva_ul_li4_a_span_i.css({
            //             opacity: 1,
            //         })
            //     }
            // })

            // $('.nva_ul_li4_div').on('click', function(){
            //     if($nva_ul_li4_a_span_i1.css('opacity') == 0){
            //         $nva_ul_li4_a_span_i1.css({
            //             opacity: 1,
            //         })
            //     }else {
            //         $nva_ul_li4_a_span_i1.css({
            //             opacity: 0,
            //         })
            //     }
            // })


            // var $nva_ul_li5_ul = $('.nva_ul_li5_ul');

            // $('.nva_ul_li5_a').on('click', function(){
            //     if($nva_ul_li5_ul.css('opacity') == 1){
            //         $nva_ul_li5_ul.css({
            //             opacity: 0,
            //             width: 0,
            //             height: 0
            //         })
            //     }else {
            //         $nva_ul_li5_ul.css({
            //             opacity: 1,
            //             width: '220px',
            //             height: '80px'
            //         })
            //     }
            // })
            

            // var $nva_ul_li6_ul = $('.nva_ul_li6_ul');
            // $('.nva_ul_li6_a').on('click', function(){
            //     if($nva_ul_li6_ul.css('opacity') == 1){
            //         $nva_ul_li6_ul.css({
            //             opacity: 0,
            //             width: 0,
            //             height: 0
            //         })
            //     }else {
            //         $nva_ul_li6_ul.css({
            //             opacity: 1,
            //             width: '220px',
            //             height: '80px'
            //         })
            //     }
            // })

            // $('.menu-title').on('click', function(ev) {
            //     var $menuTitle = $(ev.currentTarget);  // .menu-title
            //     var $menuArrow = $menuTitle.find('.menu-arrow');
            //     var $menuList = $menuTitle.next('.menu-list');

            //     if('none' === $menuList.css('display')) {
            //         $menuList.css('display', 'initial');

            //         $menuArrow.children('i').last().css('display', 'none');
            //         $menuArrow.children('i').first().css('display', 'initial');
            //     } else {
            //         $menuList.css('display', 'none');

            //         $menuArrow.children('i').first().css('display', 'none');
            //         $menuArrow.children('i').last().css('display', 'initial');
            //     }
            // })

            // menu-div  menu-div-span   menu-URL
            $('.menu-div').on('click',function(click){
                var $div = $(click.currentTarget);
                var $divspan = $div.find('.menu-div-span');
                var $ul = $div.next('.menu-ul');

                if('none' === $ul.css('display')){
                    $ul.css('display','initial');

                    $divspan.children('i').last().css('display','initial');
                    $divspan.children('i').first().css('display','none');
                } else {
                    $ul.css('display','none');

                    $divspan.children('i').first().css('display','initial');
                    $divspan.children('i').last().css('display','none');
                } 
            })