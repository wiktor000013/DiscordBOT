const lineReader = require('line-reader');
const http = require('http');
const fs = require('fs');
const Discord = require('discord.js');
//ssdd
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
var weather = require('openweather-apis');
const prefix = '!';
const readline = require('readline');
	weather.setLang('pl');
	weather.setCity('Brzesko');
 	weather.setUnits('metric');
	 	weather.setAPPID("dd673bda68b10d4951775b3f1c9e8f89");
client.on('ready', () => {
client.on('message', message => {
	 if (!message.content.startsWith(prefix)) return;
	 const args = message.content.trim().split(/ +/g);
	 const cmd = args[0].slice(prefix.length).toLowerCase();
	if (cmd === 'ping') message.reply('pong');
	 if (cmd === 'rand') {
    if (!args[1]) return console.log('Podaj liczbę drugą');
    if (!args[2]) return console.log('Podaj liczbę trzecią');

		x = Math.floor((Math.random() * (args[2] - args[1]) + args[1]));
		
	

message.channel.send(x);
    // command code
  }
});


client.on('messageReactionAdd', async (reaction, user) => {
	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
	// Now the message has been cached and is fully available


	if(reaction.emoji.name == "🗑️")
	{
		var msg = reaction.message;
		
		console.log(user);
		console.log(reaction);
		// if(user.id == reaction.message.author.id)
		// {
			// return;
		// }
		// console.log(user);
reaction.message.delete();

	var m;
	if(msg.content == "")
	{
			m=msg.attachments.attachment;
		
			msg.attachments.forEach(attachment => {
  
 m = attachment.url;
 
});
			
	}else{
		m=msg.content
	}
	const deleted = new Discord.MessageEmbed()
	.setColor('#ff0066')
	.setAuthor(msg.author.username)

	.addFields(
		{ name: 'Zawartość', value: m}
		)
.addFields(
		{ name: 'Usunięte przez', value: "<@" + user.id + ">"}
		)

	.setTimestamp()


 const chann = client.channels.cache.get('826529429722497065');
chann.send(deleted);
	}


});
var countDownDate = new Date("Jun 26, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

var channel = client.channels.cache.get('802126945252278294');

channel.setName('Wakacje: ' + days);
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(xs);
    console.log("");
  }
}, 1000);


var pogodaChannel = client.channels.cache.get('826853665004191774');
function pog(){
	weather.getSmartJSON(function(err, smart){
		console.log(smart);
		if(smart.rain != 0)
		{
			pogodaChannel.setName('Pogoda: ' +Math.floor(smart.temp)+"°C 🌧️");
		}
		else{
			pogodaChannel.setName('Pogoda: ' +Math.floor(smart.temp) +"°C");
		}
	});
}
setInterval(pog,7200000);
pog();
var countDownDates = new Date("Jan 1 , 2022 00:00:00").getTime();

// Update the count down every 1 second
var xs = setInterval(function() {

  // Get today's date and time
  var nows = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDates - nows;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

var channel = client.channels.cache.get('802920133982814220');

channel.setName('Nowy rok: ' + days);
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    console.log("");
  }
}, 1000);



	client.user.setActivity("PH - Model"); 

});


client.on('message', message => {
	
if(message.channel.id == 806114399445188609)
{
	 if(message.author.id == 802221609549168660 || message.author.id == 159985870458322944 || message.author.id == 234395307759108106)
	 {
	 }else{
	const emb = new Discord.MessageEmbed()
	.setColor('#66ff33')
	.setDescription(message)


 const channe = client.channels.cache.get('806114399445188609');
channe.send(emb);

	message.delete();
	 }
	
}
	        if (message.channel.id != 802117038058373140){
if (message.attachments.size > 0) {
   if(message.author.id == 802221609549168660)
   {
   }else{
       
	message.reply("Screeny lub zdjęcia wrzucaj na <#802117038058373140> lub <#802117309375315968>").then(message => {
    message.delete({ timeout: 10000 })
  })
   }
    
}
		
	}
        if (message.channel.id != 802116191019597844) {
		if (message.content.startsWith('!queue')| message.content.startsWith('!q') || message.content.startsWith('!lyrics') || message.content.startsWith('!p') || message.content.startsWith('!play') || message.content.startsWith('!P') || message.content.startsWith('!PLAY') ||message.content.startsWith('!song') || message.content.startsWith('!SONG')){
			message.reply("Pomyliłeś kanały" + " <#802116191019597844>") .then(message => {
    message.delete({ timeout: 10000 })
  })
		
			message.delete();
			
		   	return;
		    }
		
        }



});


	client.on('message', message => {
   if (message.channel.id != 802116191019597844 && message.author.id == 234395307759108106){

	message.delete();

}
	});
client.on('message', message => {
let args = message.content.split(' ');
let command = args.shift().toLowerCase();
if(command == '!test'){

const file = fs.createWriteStream("Odpowiedzi.txt",{encoding: 'utf8'});
const files = fs.createWriteStream("haslo.txt",{encoding: 'utf8'});




	if(message.author.id == 568073544337195009)
			{

				const file = fs.createWriteStream("odp.html",{encoding: 'utf8'});
				wyslji();
			}

function wyslji(){
	
	



const request = http.get("http://www.test.brzesko.edu.pl/" + args[0] + '/testy/' +args[1], function(response) {
	console.log("http://www.test.brzesko.edu.pl/" + args[0] + '/testy/' +args[1]);

  
   if(response.statusCode == 404 || response.statusCode == 301){
		 const channel = client.channels.cache.get('802601323018715206');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#8B0000')
	.setTitle(response.statusCode+' ERROR')
	.setDescription('Nie znaleziono testu')
	.setTimestamp()
channel.send(exampleEmbed);

   }else{
	    

	
	
	response.setEncoding('latin1');
	
	response.pipe(file)

  

	if (message.content.startsWith('!test')) {
		 message.react('1️⃣');
		message.react('2️⃣');
		 message.react('3️⃣');
		 message.react('4️⃣');
		 message.react('5️⃣');

			// .then(() => message.react('1️⃣'))
			// .then(() => message.react('2️⃣'))
			// .then(() => message.react('3️⃣'))
			// .then(() => message.react('4️⃣'))
			// .then(() => message.react('5️⃣'))
		
			// .catch(() => console.error('One of the emojis failed to react.'));
	}
	
var myInterface = readline.createInterface({

  input: fs.createReadStream("Odpowiedzi.txt")
});


myInterface.on('line', function (line) {



	var pytanie = line.indexOf( '`', line.indexOf( '`' ) + 1 );
	var firstChunk = line.substr( 0, pytanie );
	var secondChunk = line.substr( pytanie  );
	var output = firstChunk.replace('`',' <text style="color:green"> ');
    output = output.replace('³','ł');
	output = output.replace('³','ł');
	output = output.replace('³','ł');
	output = output.replace('³','ł');
	
	output = output.replace('¿','ż');
	output = output.replace('¿','ż');
	output = output.replace('¿','ż');
	output = output.replace('¿','ż');
	
	output = output.replace('±','ą');
	output = output.replace('±','ą');
	output = output.replace('±','ą');
	output = output.replace('±','ą');
	
	output = output.replace('ê','ę');
	output = output.replace('ê','ę');
	output = output.replace('ê','ę');
	output = output.replace('ê','ę');
	output = output.replace('æ','ć');
	output = output.replace('æ','ć');
	output = output.replace('æ','ć');
	output = output.replace('æ','ć');

output = output.replace('¶','ś');
	output = output.replace('¶','ś');
	output = output.replace('¶','ś');
	output = output.replace('¶','ś');



fs.appendFile("odp.html",'<table style="width:100%"><tr> <th>'+output+'</th><th></th></tr><tr><td></td></tr></table>', 'utf8', function (err)  {
  if (err) throw err;

});


});
setTimeout(function(){
	
	message.channel.send("Odpowiedzi", {
  files: [
    "odp.html"
  ]
});
},5000);




	}
});

}

function haslo(){
		const requests = http.get("http://www.test.brzesko.edu.pl/" + args[0] + '/testy/haslo', function(response) {
  response.pipe(files);
   lineReader.eachLine('haslo.txt',{encoding: 'latin1'}, function(line) {
    


const channel = client.channels.cache.get('785959769739362305');

channel.send((' ``` '+args[0]+'\n Haslo: '+line + '```'));
});
});
}


 }

});
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			
				


// const file = fs.createWriteStream("test.txt");
// const request = http.get("http://www.test.brzesko.edu.pl/staszek/testy/sieci/sieci_2", function(response) {
  // response.pipe(file);
// });
// lineReader.eachLine('test.txt', function(line) {
    // console.log(line);
// var arrStr = line.split(/[`]/);
// console.log(arrStr[0] + " Odpowiedź " +arrStr[1])

// });

client.login('ODAyMjIxNjA5NTQ5MTY4NjYw.YAsFGA._oI8eeaS8fz22KTbtTQlrxAN4Mg');
