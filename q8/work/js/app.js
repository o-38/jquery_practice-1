$(function(){
  $(".search-btn").on("click" , function(){
    const searchWord = $("#search-input").val();
    const pageCount = 1;
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      console.log(response)
      console.log(response['@graph'][0]['items']);
      const items = response['@graph'][0]['items'];
      const $ul = $('.lists');
      for (let i = 0; i < items.length; i++){
        const item = items[i];
        console.log(item);
        const title = item['title'];
        const publisher = item['dc:publisher'][0];
        const creator = item['dc:creator'];
        const link = item['@id'];
        console.log(publisher);
        console.log(title);
        console.log(creator);
        console.log(link);
        const litag = '<li class="lists-item">' +
        `<span class="list-inner"><p>タイトル：${title}</p></span>` +
        `<span class="list-inner"><p>作者：${creator}</p></span>` +
        `<span class="list-inner"><p>出版社：${publisher}</p></span>` +
        `<span class="list-inner"><a href="${link}" target="_blank">書籍情報</a></span>` +
        '</li>';
        $ul.append(litag);
      }
      //const result = response['@graph'];
      //displayResult(result)
     }).fail(function (err) {
      const divtag = '<div class="message">正常に通信できませんでした。<br>' +
      'インターネットの接続の確認をしてください。</div>';
      const $ul = $('.lists');
      $ul.after(divtag);
      console.log(err);
       //displayError(err)
    });
  })
})
