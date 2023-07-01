$(function(){
  //変数に要素を入れる
  const menu = $(".dropdwn li");
  //メニューがホバー時にイベント発火
  menu.on({"mouseenter" : function(){
    //下にスライドしながらメニューの中を表示する
    $(this).children("ul").stop().slideDown()},
    //メニューのホバーを辞めるとイベント発火
    mouseleave : function(){
      //上にスライドしながら非表示にする
      $(this).children("ul").stop().slideUp()}
    })
  })





