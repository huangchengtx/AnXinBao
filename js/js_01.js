// 清除登录页面的输入信息
$(function(){
	$(".c1").click(function(){
		$(".user").val("");
	});
	$(".c2").click(function(){
		$(".pwd").val("");
	});
});



// $(function () {
// 	$(".third").click(function () {
// 		var i = $(this).index();
// 		$(this).addClass("menuOn").siblings().removeClass("menuOn");
// 		console.log($("#content").eq(i));
// 		$("#content").eq(i).removeClass("contentNo").siblings().removeClass("contentNo");
//     });
// });
var tabsSwiper = new Swiper('.swiper-container',{
    speed:500,
    onSlideChangeStart: function(){
        $(".tabs .active").removeClass('active');
        $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
    }
});

$(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active');
    $(this).addClass('active');
    tabsSwiper.swipeTo($(this).index());
});

$(".tabs a").click(function(e){
    e.preventDefault();
});
/*
window.onload=function(){
	var n = document.getElementsByTagName("span")[0];
	var m = document.getElementsByTagName("span");
	// console.log(n);
	// console.log(m);
	for (var i = 1; i <= 5; i++) {
		var x = m[i].innerText;
		x = x.replace(/,/g, "");
		var y = n.innerText;
		y = y.replace(/,/g, "");
		var s = x/y;
		// console.log(x);
		// console.log(y);
		// console.log(s);
		var div = document.getElementsByClassName("space")[i-1].getElementsByTagName("div")[0];
		// console.log(div);
		div.style.width=(s*100)+"%";
	};
}



$(function(){
   $(".blist").on("click","li",function(){
     // 设index为当前点击
     var index = $(this).index();
     // 点击添加样式利用siblings清除其他兄弟节点样式
     $(this).addClass("active").siblings().removeClass("active");
     // 同理显示与隐藏
     $(this).parents(".wrap").find(".blsit-list li").eq(index).show().siblings().hide();
   })
})



导航栏切换
$(function(){

	var width = $(".content").width()； //跟外面盒子的宽度一样，或者写成 var width = $(".content").width();
	var ulNum = $(".content ul").length; //获取ul的个数
	var contentWidth = width * ulNum; //获取整个box应该的长度，刚开始box设置成了1100，但是应该把所有的ul防到一行里面去，这样box向左移动的时候才是无缝滚动

	$(".box").width(contentWidth); //给box设置宽度  .width() 是获取宽度  .width(value)是设置宽度

	$(".nav span").click(function(){

		//$(this)表示点击的这个元素 ，.addClass()表示添加的样式名称，.siblings()表示这个元素的所有兄弟级元素，此处表示span，
		// .removeClass()表示删除的样式名称
		$(this).addClass('active').siblings().removeClass('active');

		var clickNum = $(this).index(); //判断点击的是第几个span .index()方法返回第几个，从0开始算起
		//alert(clickNum);

		var moveLeft = clickNum * width * -1; //应该向左移动的距离

		$(".box").animate({'left':moveLeft}, 600);  
	})

});



$(function() {
	function setCurrentSlide(ele, index) {
		$(".tab .content").removeClass("menuOn");
		ele.addClass("menuNo");
		//swiper1.initialSlide=index;
	}

	var swiper1 = new Swiper('.tab', {
//					设置slider容器能够同时显示的slides数量(carousel模式)。
//					可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
//					loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
		slidesPerView: 5.5,
		paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
		spaceBetween: 10,//slide之间的距离（单位px）。
		freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
		loop: false,//是否可循环
		onTab: function(swiper) {
			var n = swiper1.clickedIndex;
		}
	});
	swiper1.slides.each(function(index, val) {
		var ele = $(this);
		ele.on("click", function() {
			setCurrentSlide(ele, index);
			swiper2.slideTo(index, 500, false);
			//mySwiper.initialSlide=index;
		});
	});

	var swiper2 = new Swiper('.content', {
		//freeModeSticky  设置为true 滑动会自动贴合  
		direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
		loop: false,
//					effect : 'fade',//淡入
		//effect : 'cube',//方块
		//effect : 'coverflow',//3D流
//					effect : 'flip',//3D翻转
		autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
		onSlideChangeEnd: function(swiper) {  //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
			var n = swiper.activeIndex;
			setCurrentSlide($(".tab .content").eq(n), n);
			swiper1.slideTo(n, 500, false);
		}
	});
});



window.onload = function(){
	var oA = getElementsByClassName("third");
	var aCon = getElementsByClassName("content");
	var timer = null;
	for (var i = 0;i < oA.length;i++) {
		oA[i].index = i;
		oA[i].onClick = function(){
			show(this.index);
		}
	}
	function show(a){
		index = a;
		var alpha = 0;
		for(var i = 0;j < oA.length;j++){
			oA[j].className = "";
			aCon[j].className = "content_none";
			aCon[j].style.opacity = 0;
			aCon[j].style.filter = "alpha(opacity=0)";
		
		}
		oA[index].className = "menuOn";
		clearInterval(timer);
		timer = setInterval(function(){
			alpha += 2;
			alpha > 100 && (alpha = 100);
			aCon[index].style.opacity = alpha/100;
			aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
			alpha == 100 && clearInterval(timer);
		},
		5)
	}
	
}

*/