$(function () {
  //読み込み時に文字の色変化
  $("#q1").css("color" , "green");
})
$(function() {
  //クリックしてボタンの色変更
    $("#q2").on('click' , function() {
    $(this).css("background-color" , "pink");
  })
})
$(function() {
  //クリックしてフェードアウト
  $("#q3").on('click' , function() {
  //フェードアウト3秒の処理
  $(this).fadeOut(3000);
  })
})
$(function (){
  //クリックしてサイズ変更
  $("#q4").on('click' , function(){
  //class属性追加でサイズ指示
  $(this).addClass("large");
  })
})
$(function (){
  //クリックしてDOMの挿入
  $("#q5").on("click" , function(){
  $(this).prepend("DOMの中の前").append("DOMの中の後").before("DOMの前").after("DOMの後");
  })
})
$(function (){
  //クリックして移動
  $("#q6").on('click' , function(){
  //移動指示
  $(this).animate({ "margin-top": 100 , "margin-left": 100}, 2000);
  })
})
$(function (){
  //クリックしてidのノードをコンソールで表示
  $("#q7").on('click' , function(){
  //コンソールに表示
  console.log(this);
  })
})
$(function (){
//ホバー時にサイズ変更
$("#q8").on({mouseenter : function (){
  //class属性を追加し大きくする
  $(this).addClass("large")}, mouseleave :function (){
  //class属性を追加しボタンから離れた際大きさ解除
  $(this).removeClass("large")
  }
 })
})
$(function (){
  //クリックして配列のアラート表示
  $("#q9 li").on('click' , function(){
  //リストの何番目にあるか返す
  const i =$(this).index();
  //アラート表示指示
  alert(i);
  })
})
$(function (){
  $("#q10 li").on('click' , function (){
    //順番指定で要素の取得x
    var i = $(this).index(); console.log($("#q11 li").eq(i));
    //Q11にclass属性追加しテキストを大きくする
    $("#q11 li").eq(i).addClass("large-text");
  })
})