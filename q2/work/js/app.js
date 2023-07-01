$(function (){
  //変数に要素を入れる
  const open = $(".modal_open_button");
  const close = $(".modal_close_button");
  const container = $(".modal_win");
  //openをクリックするとモーダルを表示する
  open.on("click" , function(){
    container.fadeIn();
  //×ボタンをクリックするとモーダルが閉じる
  close.on("click" , function(){
    container.fadeOut();
  })
  })
})