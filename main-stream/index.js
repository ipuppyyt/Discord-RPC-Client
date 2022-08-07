const rpc = require("discord-rpc")
const os = require("os");
const timestamp = require('time-stamp');
const open = require('open');
var center = require('center-align');
var colors = require('colors');
const dots = ['.', '..','...'];
const config = require("../config.json")
const popup = require("popup-prompt");
const fs = require("fs");
const info = new popup.Popup();
const setTitle = require('node-bash-title');
const { exec } = require("child_process");
setTitle('Discord RPC Client v1.1 ~ iPuppyYT');
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	console.clear()

	console.log("\n\n\tRPC Run Info".yellow);
	const rpcinfo = "\n\tDate : "+timestamp('DD-MM-YYYY')+"\n\tTime : "+timestamp('HH:mm')
	console.log(rpcinfo.cyan)
	console.log("\n\n\tPC Info".yellow);
	const osinfo = "\n\tOperating System : "+os.version()+"\n\tRelease : "+os.release()+"\n\tArchitecture : "+os.arch()+"\n\tType : "+os.type()+"\n\tUptime : "+os.uptime()+" sec"
	console.log(osinfo.cyan)
	console.log(center("\n\n\n\tDiscord RPC Is Active.".green))
	console.log(center(`\n\n
	█▀▄ █ █▀ █▀▀ █▀█ █▀█ █▀▄   █▀█ █▀█ █▀▀   █▀▀ █   █ █▀▀ █▄ █ ▀█▀   █▄▄ █▄█   █ █▀█ █ █ █▀█ █▀█ █▄█ █▄█ ▀█▀
	█▄▀ █ ▄█ █▄▄ █▄█ █▀▄ █▄▀   █▀▄ █▀▀ █▄▄   █▄▄ █▄▄ █ ██▄ █ ▀█  █    █▄█  █    █ █▀▀ █▄█ █▀▀ █▀▀  █   █   █`.red))
	const website = "\n\tWebsite : "+'https://ipuppytech.tk'
	console.log(website.magenta)
	function runpopup() {
		exec("popup.vbs");
	  }
	setTimeout(runpopup, 1000);
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : config.details,
state: config.smalltext2,
assets : {
large_image : config.largeimage,
large_text : "Rich Presence By iPuppyYT",
small_image : config.smallimage,
small_text : config.smalltext1
},
instance : false,
buttons : [{label : config.button1 , url : config.url1},{label : config.button2,url : config.url2}]
}
}
)
})
client.login({ clientId : config.clientid }).catch(console.error);