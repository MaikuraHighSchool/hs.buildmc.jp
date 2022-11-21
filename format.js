let header = $("header");
// console.log(header.innerText);
let schoolImg = "https://media.discordapp.net/attachments/890957623627776000/1043504255480381460/gennan2.png";
let headerBackImg = "https://media.discordapp.net/attachments/859350806775332905/1008741476123037816/57.png?width=586&height=410";
let headPage = [
	["HOME", "index.html"], 
	["受験生の方へ", "for-examinee.html"], 
	["高校生活", "life.html"], 
	["学科一覧", "department.html"], 
	["教員", "teachers.html"], 
	["アクセス", "access.html"]
];
let headPagetag = "";
for(i = 0; i < headPage.length; i++){
	let tmp = '<a href="' + headPage[i][1] + '">' + headPage[i][0] + "</a>";
	if(headPage[i][0] == header.innerText) tmp = '<span>' + headPage[i][0] + '</span>';
	headPagetag += tmp;
}
header.innerHTML = '<div style="display: flex; background-image: url('+ headerBackImg +');background-size: 50%; background-position: right;"><img src="'+ schoolImg +'" alt="校章" style="height: 6em;object-fit: cover;" /><div style="text-shadow: 1px 0px 0px white, 1px 1px 0px white, 0px 1px 0px white;"><h1>私立真意倉高等学校</h1><span>Maikura High School</span><br /><span>為せば成る、為さなくてもなるようにはなる</span></div></div><div id="topmenu" style="display: flex;min-width:max-content;background-color: black;">'+ headPagetag +'</div>';

let sideMenu = $("sideMenu");
//横のメニューバーの内容
let sidePage = [
	["HOME", "index.html"],
	["受験生の方へ", "for-examinee.html"], 
	["高校生活", "life.html"], 
	["学科一覧", "department.html"], 
	["教員", "teachers.html"], 
	["アクセス", "access.html"],
	["せ", ""],
	["、", ""],
	["せ", ""],
	["と", ""],
	["く", ""],
	["れ", ""],
	["え", ""],
	["え", ""]
];
//広告欄の内容[タイトル,画像元,リンク先]
let ad = [
	["1デカい飴とはねよし", "https://media.discordapp.net/attachments/890957623627776000/1043554968134750338/2022-11-19_214809.png", ""],
	["2モチベは常に低迷期", "https://pbs.twimg.com/profile_banners/1359482140568678401/1660702984", ""]
]
let sidePageTag = '<h3>MENU</h3>';
for(i = 0; i < sidePage.length; i++){
	let tmp = '<a href="' + sidePage[i][1] + '">' + sidePage[i][0] + "</a>";
	if(sidePage[i][0] == sideMenu.innerText) tmp = '<span style="font-weight:bold;background-color:gold">' + sidePage[i][0] + '</span>';
	sidePageTag += tmp;
}
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