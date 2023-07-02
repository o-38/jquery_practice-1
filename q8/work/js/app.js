//クリックイベント外での宣言
//前回検索文字列
let backSerchWord = '';
//前回ページ数
let backPageCount = 0;
//html表示完了イベント
$(function(){
  //検索ボタンクリックイベント
  $(".search-btn").on("click" , function(){
    //検索文字列
    const searchWord = $("#search-input").val();
    //ページ数初期値
    let pageCount = 1;
    //前回検索文字列と今回検索文字列が同じなら前回ページ数+1を今回ページ数にする
    if (searchWord == backSerchWord){
      pageCount = backPageCount + 1
    }
    //次回用に今回の値を保存
    backSerchWord = searchWord
    backPageCount = pageCount
    //Ajaxのパラメーター
    //検索文字列とページ数はテンプレート文字でセット
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    //API実行
    $.ajax(settings)
    //正常時
    .done(function (response) {
      console.log(response)
      console.log(response['@graph'][0]['items']);
      //検索結果配列
      const items = response['@graph'][0]['items'];
      //ul要素
      const $ul = $('.lists');
      //ul要素の中身を空にする
      $ul.empty();
      //検索結果配列がない場合はメッセージを表示して終了
      if (!items){
        const litag = '<li class="message">検索結果が見つかりませんでした。<br>' +
        '別のキーワードで検索して下さい。</li>';
        $ul.append(litag);
        return
      }
      //検索結果配列のループ
      for (let i = 0; i < items.length; i++){
        //検索結果一件の取り出し
        const item = items[i];
        console.log(item);
        //タイトル、出版社、作者、書籍情報リンク
        const title = item['title'];
        const publisher = item['dc:publisher'][0];
        const creator = item['dc:creator'];
        const link = item['@id'];
        console.log(publisher);
        console.log(title);
        console.log(creator);
        console.log(link);
        //liタグの作成
        const litag = '<li class="lists-item">' +
        `<span class="list-inner"><p>タイトル：${title}</p></span>` +
        `<span class="list-inner"><p>作者：${creator}</p></span>` +
        `<span class="list-inner"><p>出版社：${publisher}</p></span>` +
        `<span class="list-inner"><a href="${link}" target="_blank">書籍情報</a></span>` +
        '</li>';
        //ul要素に追加
        $ul.append(litag);
      }
      //const result = response['@graph'];
      //displayResult(result)
      //エラー時
     }).fail(function (err) {
      const litag = '<li class="message">正常に通信できませんでした。<br>' +
      'インターネットの接続の確認をしてください。</li>';
      const $ul = $('.lists');
      //ul要素の中身を空にする
      $ul.empty();
      //ul要素に追加
      $ul.append(litag);
      console.log(err);
       //displayError(err)
    });
  })
  //リセットボタン
  $(".reset-btn").on("click" , function(){
    const $ul = $('.lists')
    //ul要素の中身を空にする
    $ul.empty();
    //検索文字列を空にする
    $("#search-input").val('');
  })
})
