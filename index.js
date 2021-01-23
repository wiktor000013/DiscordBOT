client.on('ready', () => {
	client.user.setActivity("Kocham cię Wiktor <3"); 
const embed = new Discord.MessageEmbed()

  .setTitle("Link do wtyczki")
  .setAuthor("TESTBrzesko - odpowiedzi", "https://cdn.discordapp.com/avatars/785855682841935902/7e9ab3eac7f537210474fd83298d0ded.webp?size=128")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://i.imgur.com/aHhOQii.png")

 

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
