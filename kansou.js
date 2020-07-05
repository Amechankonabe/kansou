'use strict';
const userNameInput = document.getElementById('user-name');
const tokumeiInput = document.getElementById('tokumei');
const dearNameInput = document.getElementById('dear-name');
const hajimeteInput = document.getElementById('hajimete');
const sakuhinInput = document.getElementById('sakuhin-name');
const kanjouInput = document.getElementById('kanjyou')
const pageNameInput = document.getElementById('page-name')
const pageInput = document.getElementById('page')
const kansoInput = document.getElementById('kanso')
const henshinInput = document.getElementById('henshin')
const copysubmit = document.getElementById('copy')

const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  const dearName = dearNameInput.value
  const sakuhin = sakuhinInput.value
  const pageName = pageNameInput.value
  const kansou = kansoInput.value

  if(dearName.length === 0) {
    alert("空欄があります");
    return false;
  }else if(sakuhin.length === 0) {
    alert("空欄があります");
    return false;
  }
  else if(pageName.length === 0) {
    alert("空欄があります");
    return false;
  }
  else if(kansou.length === 0) {
    alert("空欄があります");
    return false;
  }
  /**
  * 指定した要素の子どもを全て削除する
  * @param {HTMLElement} element HTMLの要素
  */
  function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }
  // 診断結果表示エリアの作成
  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '感想';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = `${dearName}様
                  ${hajimeteInput.value}` +
                 `${userName}` +
                 `${tokumeiInput.value}
          本日は、${sakuhin}につきまして、どうしても感想をお伝えしたく筆をとった次第です。
                  ${kanjouInput.value}` +
             `特に${pageName}${pageInput.value}` +
                 `${kansou}
                 
 お忙しいかと思いますが、無理のない範囲で創作を続けていただけると、大変うれしいです。
 最後になりましたが、これからも${dearName}様のこと、応援しております。乱文失礼しました。
 ${henshinInput.value}
 `;
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
};
