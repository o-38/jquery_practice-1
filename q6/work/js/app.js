$(function (){
  $(".select-box").on("change" , function(){
    //value値を取り出す
    const selectValue = $(this).val();
    //.food-list要素配下のliタグ要素を取得(複数個)
    const $foods = $(".food-list li");
    //value値が'all'の場合は表示かつcontinue
    if (selectValue == "all"){
      $foods.show()
      return
    }
    //liタグ要素のループ
    for (let i = 0; i < $foods.length; i++){
      const $foodli = $($foods[i])
      //liタグ要素のdata-category-type属性を取得
      const categoryType = $foodli.attr("data-category-type");
      //value値とdata-category-typeの値が一致すれば表示
      if (selectValue == categoryType){
        $foodli.show()
        //else非表示
      }else {
        $foodli.hide()
      }
    }
  })
})