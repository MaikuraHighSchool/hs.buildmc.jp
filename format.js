let header = $("header");
// console.log(header.innerText);
let schoolImg = "https://maikurahighschool.github.io/cdn.hs.buildmc.jp/files/logo.png";
let headerBackImg = "https://maikurahighschool.github.io/cdn.hs.buildmc.jp/files/headbg.png";
let headPage = [
	["HOME", "index.html"], 
	["受験生の方へ", "for-examinee.html"], 
	["高校生活", "life.html"], 
	["学科一覧", "department.html"], 
	["生徒・教員", "members.html"], 
	["アクセス", "access.html"],
	["せ、", ""],
	["せとくれええええ", ""]
];
let headPagetag = "";
for(i = 0; i < headPage.length; i++){
	let tmp = '<a href="' + headPage[i][1] + '">' + headPage[i][0] + "</a>";
	if(headPage[i][0] == header.innerText) tmp = '<span>' + headPage[i][0] + '</span>';
	headPagetag += tmp;
}
header.innerHTML = '<div style="display: flex; background-image: url('+ headerBackImg +');background-size: 50%; background-position: right;" id="title"><img src="'+ schoolImg +'" alt="校章" style="height: 6em;object-fit: cover;filter: drop-shadow(0 0 5px white)" /><div><h1>私立真意倉高等学校</h1><span>Maikura High School</span><br /><span>為せば成る、為さなくてもなるようにはなる</span></div><div>  <label for="switcher" style="display:block;box-sizing:border-box;margin:10px;width:100px;height:50px;background:#0006;border-radius:8px; border:solid 1px"><div id="switchBtn"><span>明</span><span>暗</span></div> </label>  </div></div><div id="topmenu" style="display:flex;white-space:nowrap;height:calc(1em + 30px);overflow-x:scroll ; background-color: black;">'+ headPagetag +'</div>';

let sideMenu = $("sideMenu");
//横のメニューバーの内容
let sidePage = [
	["HOME", "index.html"],
	["沿革", "history.html"], 
	["受験生の方へ", "for-examinee.html"], 
	["高校生活", "life.html"], 
	["小説作品", "novels.html"],
	["イラスト作品", "illusts.html"],
	["学科一覧", "department.html"], 
	["生徒・教員", "members.html"], 
	["アクセス", "access.html"],
	["せ", ""],
	["と", ""],
	["く", ""],
	["れ", ""],
	["え", ""],
	["え", ""]
];
//広告欄の内容[タイトル,画像元,リンク先]
let ad = [
	["1デカい飴とはねよし", "https://maikurahighschool.github.io/cdn.hs.buildmc.jp/files/ad_001.png", ""],
	["2モチベは常に低迷期", "https://maikurahighschool.github.io/cdn.hs.buildmc.jp/files/ad_002.png", ""]
]
let sidePageTag = '<h3>MENU</h3>';
for(i = 0; i < sidePage.length; i++){
	let tmp = '<a href="' + sidePage[i][1] + '">' + sidePage[i][0] + "</a>";
	if(sidePage[i][0] == sideMenu.innerText) tmp = '<span style="font-weight:bold;background-color:gold">' + sidePage[i][0] + '</span>';
	sidePageTag += tmp;
}
sidePageTag += '<br>';
for(i = 0; i < ad.length; i++){
	sidePageTag += '<a href="'+ ad[i][2] +'" style="background-image: url(' +  ad[i][1]+ ');" class="ad" target="_blank">'+ ad[i][0] +'</a>';
}
// console.log(sidePageTag);
sideMenu.innerHTML = sidePageTag;

let footer = $("footer");
let update = footer.innerText;
footer.setAttribute("style", "text-align: center; background-color:darkgoldenrod;padding: 2em 0;color: white;");
footer.innerHTML = '(c)2022 真意倉高等学校 | 更新：'+ update +'<br>powered by <a href="https://arrkmekawa.github.io/" target="_blank">芽河製作所</a> | All Rights Reserved.';


function $(id){
	return document.getElementById(id);
}