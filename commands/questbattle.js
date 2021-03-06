//battle in Puyo Puyo!! Quest! - asks for room code, type of room and a room name (optional)

const Discord = require('discord.js');
const config = require('../config.json');

var prefix = config.prefix

exports.run = (client, message, args) =>
{
  em = new Discord.RichEmbed();
  let roomcode = args[0];
  let roomtype = args[1];
  let roomname = args.slice(2).join(" ");

  let roomtypevalue = "";

  if (roomtype == "1")
  {
    roomtypevalue = "Standard PvP";
  }
  else if (roomtype == "2")
  {
    roomtypevalue = "Death Match";
  }
  else if (roomtype == "3")
  {
    roomtypevalue = "Fight Club";
  }
  else if (roomtype == "4")
  {
    roomtypevalue = "Target Practice";
  }
  else
  {
    roomtypevalue = "Standard PvP (unspecified)";
  }

  var testRegex = /^\d{6}$/;  //thanks, Anwonu
  if (testRegex.test(roomcode) == false)
  {
    message.channel.send("Room code invalid!");
    return;
  }

  em.setTitle("You are being challenged by " + message.author.username)
    .setColor("0x00FFFF")
    .setDescription("Room Code: " + roomcode + "\nRoom Type: " + roomtypevalue + "\nRoom Name: " + roomname + "\n\n" + "http://tapi.puyoquest.jp/multibattle/redirect/?room_no=" + roomcode);

  message.channel.send(em);
}
