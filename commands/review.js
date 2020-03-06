const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  const totalStars = args[0];

if(!totalStars || totalStars < 1 || totalStars > 5) return message.channel.send("Please give your stars between 1 and 5.");

const reviewMessage = args.splice(1, args.length).join(' ') || '**Please send a message**';

var reviewChannel = message.guild.channels.find("name", "review");
if(!reviewChannel) return console.log("review> Channel not found!");

var stars = "";

for(var i =0; i < totalStars; i++) {
  stars += ":star: ";
}

message.delete();

const reviewEmbed = new discord.RichEmbed()
.setTitle(`${message.author.username} has made a review! :tada:`)
.setColor("$00ff00")
.addField("Stars: ", `${stars}`)
.addField("Review: ", `${reviewMessage}`);

message.channel.send(":white_check_mark: You have succesfully made a review!");
return reviewChannel.send(reviewEmbed);

}


module.exports.help = {
  name: "review"
}
