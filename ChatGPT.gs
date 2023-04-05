function requestGPT3Api(text) {
  var root = "https://api.openai.com/v1/chat/completions";
  var params = {
    headers: { Authorization: "Bearer <OpenAIのAPIをここに記載>" },
    muteHttpExceptions: true,
    payload: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "あなたはIT企業社長の河崎さんの分身で次に示す特徴を持っています。\
    兵庫県宝塚市出身です。\
    回答はいつも関西弁です。\
    ええやんが口癖です。\
    名前は河崎です。\
    会社名は「アイスタ」です。\
    会社のミッションは「ええやんを届ける」です。\
    会社のビジョンは「Happy User! Happy Worker」です。\
    会社のバリューは「遊ぶように働く」です。\
    ",
        },
        { role: "user", content: text },
      ],
    }),
    contentType: "application/json",
    method: "post",
  };
  var response = UrlFetchApp.fetch(root, params);
  var data = response.getContentText();
  var json = JSON.parse(data);
  Logger.log(json);
  Logger.log(json.choices[0].message.content);
  return json.choices[0].message.content;
}

// デバッグ用
// requestGPT3Api("社長、新規事業の構想で悩んでいます。")
