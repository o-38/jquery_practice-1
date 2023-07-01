$(function (){
  //変数に要素を入れる
  const btn = $(".drawer_button");
  const bg = $(".drawer_bg");
  const nav = $("nav");
  //ハンバーガーメニューをクリックするとメニューが出てくる
  btn.on("click" ,function(){
    btn.toggleClass("active");
    //フェードインの指示
    bg.fadeToggle();
    nav.toggleClass("open");
  //グレーの部分をクリックしても閉じる
  bg.on("click" , function(){
    bg.hide();
    //閉じる際class属性の削除
    btn.removeClass("active");
    nav.removeClass("open")
  }) 
  })
})





