$(function (){
  //変数に要素を入れる
  const nav = $("nav li");
  const content = $(".description li");
  //ホームをクリックするとイベント発火
  nav.on("click" , function(){
    //タブがクリックされた際に何番目のタブがクリックされたか取得
    let index = $(".nav li").index(this);
    //ホームコンテンツにクラス属性を追加
    content.addClass("is-hidden");
    //クリックされたタブに該当するコンテンツ選択
    content.eq(index).removeClass("is-hidden")
  })
})













