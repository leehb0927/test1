var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    //sectionsColor: ['#eb9ceb', '#1BBC9B', '#7E8F7C','#9cc6eb','#ebe69c'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    responsiveHeight:350,
    scrollBar:true,
    //navigation:true
    normalScrollElements : '#s2'
});
/*onescroll*/


$('.totalMitem').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});




/*document.querySelector('.scroll_guide').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});*/
/*scroll down을 누르면 한 페이지씩 내려감 */




$('.btn_total').click(function(){
    console.log('햄버거버튼 클릭!!')
    $('.total_menuZ').addClass('active')
});

$('.btn_totalClose').click(function(){
    $('.total_menuZ').removeClass('active')
});



myScroll = new IScroll('.total_menu');




new WOW().init();
/*페이지 내림과 동시에 애니메이션 작동 */










document.querySelector('.preS').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});

document.querySelector('.nextS').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});
/*페이지 이동 버튼_한 단계씩 위,아래로 이동가능
site/fullpage/fullpagejs_master*/





let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
//구글 맵