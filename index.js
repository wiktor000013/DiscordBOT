const Discord = require('discord.js');
const client = new Discord.Client();

const http = require('http');
const fs = require('fs');
const lineReader = require('line-reader');
const file = fs.createWriteStream("odpowiedzi.txt");
const files = fs.createWriteStream("haslo.txt",{encoding: 'utf8'});

const prefix = '!';
// client.channels.cache.get('785959804166340620').send('sddddddddddddddd').then(msg => {
	// let embed = new Discord.MessageEmbed() //For discord v11 Change to new Discord.RichEmbed()
        // .setDescription(`g`)
    // msg.edit(embed)
// })

client.on('ready', () => {
const embed = new Discord.MessageEmbed()

  .setTitle("Link do wtyczki")
  .setAuthor("TESTBrzesko - odpowiedzi", "https://cdn.discordapp.com/avatars/785855682841935902/7e9ab3eac7f537210474fd83298d0ded.webp?size=128")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://i.imgur.com/aHhOQii.png")

  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://addons.opera.com/pl/extensions/details/b79651613cd59a27d60247060a64ec328fa6c3e2/")

  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addFields({ name: "Przeglądarka", value: "Opera", inline: true })
client.channels.cache.get('802159508179910707').send(embed).then(msg => {
	
	
  /*
   * Blank field, useful to create some space.
   */

 
})
client.channels.cache.get('802159508179910707').send('------------------').then(msg => {
	setInterval(function(){
		  var d = new Date();
  var n = d.getDay();
  var h = d.getHours();
  msg.edit("```Hasło: "+120 * h * n * 18 + "```");
	},1000);
	
});
});

var countDownDate = new Date("Jun 1, 2021 00:00:00").getTime();

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
  console.log(days);
var channel = client.channels.cache.get('802126945252278294');

channel.setName('Wakacje: ' + days);
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    console.log("");
  }
}, 1000);
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase();


  if (cmd === 'pobierz') {
	
	console.log(args[1]);
client.channels.cache.get(`785959769739362305`).send('Odpowiedzi dla nauczyciela **' + args[1] + '**');

    // command code
  
const request = http.get("http://www.test.brzesko.edu.pl/" + args[1] + '/testy/' +args[2], function(response) {
	response.setEncoding('latin1');
	response.pipe(file);
	

    lineReader.eachLine('odpowiedzi.txt', function(str,last) {
	var pytanie = str.indexOf( '`', str.indexOf( '`' ) + 1 );
	var firstChunk = str.substr( 0, pytanie );
	var secondChunk = str.substr( pytanie  );
	
 var output = firstChunk.replace('`','\n\nPoprawna odpowiedź: ');

	if (message.content.startsWith('!pobierz')) {
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
	
	console.log(output);
	if(!last){

 message.channel.send("```"+output+"```");
	}
  });
 




});
};


});




function funkcja(output)
{
	
			fs.writeFile('2pasc.txt', output, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});
}
		function haslo(){
		const requests = http.get("http://www.test.brzesko.edu.pl/" + args[0] + '/testy/haslo', function(response) {
  response.pipe(files);
   lineReader.eachLine('haslo.txt',{encoding: 'latin1'}, function(line) {
    


const channel = client.channels.cache.get('572880995557310466');

channel.send((' ``` '+args[0]+'\n Haslo: '+line + '```'));
});
});
}

	


  

client.login('ODAxNTM5Njg5MzM2Mjc0OTQ0.YAiKAQ.6DaEH2gvOSbheUy8QW53DKarK7g');
