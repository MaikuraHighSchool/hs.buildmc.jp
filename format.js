let header = $("header");
// console.log(header.innerText);
let schoolImg = "https://media.discordapp.net/attachments/890957623627776000/1043504255480381460/gennan2.png";
let headerBackImg = "https://media.discordapp.net/attachments/859350806775332905/1008741476123037816/57.png?width=586&height=410";
let page = [
	["HOME", "index.html"], 
	["受験生の方へ", "for-examinee.html"], 
	["高校生活", "life.html"], 
	["学科一覧", "department.html"], 
	["教員", "teachers.html"], 
	["アクセス", "access.html"]
];
let pagetag = "";
for(i = 0; i < page.length; i++){
	let tmp = '<a href="' + page[i][1] + '">' + page[i][0] + "</a>";
	if(page[i][0] == header.innerText) tmp = '<span>' + page[i][0] + '</span>';
	pagetag += tmp;
}
header.innerHTML = '<div style="display: flex; background-image: url('+ headerBackImg +');background-size: 50%; background-position: right;"><img src="'+ schoolImg +'" alt="校章" style="height: 6em;object-fit: cover;" /><div style="text-shadow: 1px 0px 0px white, 1px 1px 0px white, 0px 1px 0px white;"><h1>私立真意倉高等学校</h1><span>Maikura High School</span><br /><span>為せば成る、為さなくてもなるようにはなる</span></div></div><div id="topmenu" style="display: flex;min-width:max-content;background-color: black;">'+ pagetag +'</div>';

let footer = $("footer");
let update = footer.innerText;
footer.setAttribute("style", "text-align: center; background-color:darkgoldenrod;padding: 2em 0;color: white;");
footer.innerHTML = '(c)2022 真意倉高等学校 | 更新：'+ update +'<br>powered by <a href="https://arrkmekawa.github.io/" target="_blank">芽河製作所</a> | All Rights Reserved.';

function $(id){
	return document.getElementById(id);
}