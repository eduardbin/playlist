'use strict';

var playList = [{
	author: "led zeppelin",
	song: "stairway to heaven",
	duration: "2:03"
},
{
	author: "queen",
	song: "bohemian rhapsody",
	duration: "2:30"
},
{
	author: "lynyrd skynyrd",
	song: "free bird",
	duration: "1:56"
},
{
	author: "deep purple",
	song: "smoke on the water",
	duration: "3:03"
},
{
	author: "jimi hendrix",
	song: "all along the watchtower",
	duration: "2:53"
},
{
	author: "AC/DC",
	song: "back in black",
	duration: "2:43"
},
{
	author: "queen",
	song: "we will rock you",
	duration: "2:13"
},
{
	author: "metallica",
	song: "enter sandman",
	duration: "3:03"
}
];


let songTmplt = document.querySelector('#playlist-li').innerHTML;
let playListUl = document.querySelector('#playlist');

playListUl.innerHTML = '';

for (let i = 0; i < playList.length; i++) {
	let song = songTmplt
		.replace(/{{duration}}/, playList[i]['duration'])
		.replace(/{{author}}/, playList[i]['author'])
		.replace(/{{song}}/, playList[i]['song']);

	playListUl.innerHTML += song;
};