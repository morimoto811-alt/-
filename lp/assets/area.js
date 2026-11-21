(function () {
  var names = [
    "熊本市", "八代市", "人吉市", "荒尾市", "水俣市", "玉名市", "山鹿市", "菊池市",
    "宇土市", "上天草市", "宇城市", "阿蘇市", "天草市", "合志市",
    "美里町", "玉東町", "南関町", "長洲町", "和水町",
    "大津町", "菊陽町",
    "南小国町", "小国町", "産山村", "高森町", "西原村", "南阿蘇村",
    "御船町", "嘉島町", "益城町", "甲佐町", "山都町",
    "氷川町", "芦北町", "津奈木町",
    "錦町", "多良木町", "湯前町", "水上村", "相良村", "五木村", "山江村", "球磨村", "あさぎり町",
    "苓北町"
  ];

  function resolve(raw) {
    if (raw == null) return null;
    var s = String(raw).replace(/^\s+|\s+$/g, "").replace(/\u3000/g, "");
    if (!s) return null;
    var i;
    for (i = 0; i < names.length; i++) {
      if (names[i] === s) return names[i];
    }
    var hits = [];
    for (i = 0; i < names.length; i++) {
      if (names[i].replace(/(市|町|村)$/, "") === s) hits.push(names[i]);
    }
    return hits.length === 1 ? hits[0] : null;
  }

  var params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch (e) {
    return;
  }
  var name = resolve(params.get("area"));
  if (!name) return;
  var nodes = document.querySelectorAll("[data-area]");
  for (var j = 0; j < nodes.length; j++) {
    nodes[j].textContent = name;
  }
  document.title = name + "の個別相談｜解体・建替え｜株式会社Morimoto";
})();
