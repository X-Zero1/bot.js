const Discord = require('discord.js')
const client = new Discord.Client
const prefix = "+"
client.login("ODEwNzcwMDkyODMyOTgxMDI0.YCoefQ.GU2v_yiGQp4XjUqAiXOo_HsIJoc")
client.on("message", message => {
 if (message.content === "+help") {       
  const embed = new Discord.MessageEmbed()
  .setAuthor("Commands of "+client.user.username,"https://cdn.discordapp.com/attachments/755636694035857438/814802781474127882/image4-1.gif")
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
    
      .setDescription(`
 
**✅INFORMATION BOT 🤖
━─━─━─━─━─━─━
| THE WORK OF THIS BOT📌
:|:Moderation🤖
:|:Public✅
:|:info✅
━─━─━─━─━─━─━
✅Moderation🔐
+ban>+unban
+kick>+mute>+unmute
+vmute>+vunmute>+deaf>+kick
+Lock>+unlock>+clear
+add role>+ roleremove
━─━─━─━─━─━─━
✅Public
+ping>+calendar>+say
+covid>+perms+server>+bot
+avatar>+server avatar>+rank
+roleinfo>channelinfo
+kurdish>+love>+kiss>+bomm>+hug
━─━─━─━─━─━─━
✅info Bot🤖Commands🤖
【+Lock】【+unlock】
【+ban】【+unban】【+kick】
 【+vmute】【+vunmute】【+vkick】【+deaf】【+mute】
【+unmute】【+avatar】【+server avatar】【+ping】【+say】【+roleinfo】【+server】【+channelinfo】
【+clear】【+love】【+kiss】【+bomm】【+hug】【+calendar】【+kurdish】【+covid】【+perms】【+bot】
【+addrole】【+roleremove】【+rank】**
`)
  
    .setAuthor("Commands of "+client.user.username,"https://cdn.discordapp.com/emojis/768871868345221160.gif")
message.channel.send(embed)
 
}
});
2
client.on("message", msg => {
 if (msg.content.startsWith(prefix + "deaf")) {
  var bawan = "kurdfam"
  
    var deafuser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
    if (!deafuser) return msg.channel.send("kasek mention bka");

  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Deafen Voice")
    .addField("Deafen user", deafuser)
    .setFooter(`Deafen by ${msg.author.tag}`)
    .setTimestamp()
      deafuser.voice.setDeaf(true)
    msg.channel.send(muteEmbed);
    
  }
})
3
client.on("message", msg => {
 if (msg.content.startsWith(prefix + "vunmute")) {
  var bawan = "kurdfam"
  
    var muteUser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
    if (!muteUser) return msg.channel.send("kasek mention bka");

  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("unMute Voice")
    .addField("unMuted user", muteUser)
    .setFooter(`Muted by ${msg.author.tag}`)
    .setTimestamp()
      muteUser.voice.setMute(false)
    msg.channel.send(muteEmbed);
    
  }
})
4
  client.on("message", msg => {
 if (msg.content.startsWith(prefix + "vmute")) {
  var bawan = "kurdfam"
  
    var muteUser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
    if (!muteUser) return msg.channel.send("kasek mention bka");

  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("unMute Voice")
    .addField("unMuted user", muteUser)
    .setFooter(`Muted by ${msg.author.tag}`)
    .setTimestamp()
      muteUser.voice.setMute(false)
    msg.channel.send(muteEmbed);
    
  }
})
5
client.on("message", message => {
    
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});
6
client.on('message',async message => {
  if(message.content.startsWith(prefix + "vkick")) { 
   if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }

    if (!message.mentions.members.first())
      return message.channel.send(
        `kasek mention bka bo kick voice!`
      );

    let { channel} = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`am kasa la voice niya`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`sarkawtoobw!`)
  }
})
7
client.on('message',async message => {
  if(message.content.startsWith(prefix + "server avatar")) { 
  let bla = new Discord.MessageEmbed()
  
      bla.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      bla.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      bla.setColor("RANDOM")
    
      message.channel.send(bla)
    
  }
})
8
  
client.on('message',async message => {
  if(message.content.startsWith(prefix + "avatar")) {
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
//create by bawan dev in kurd fam discord server
        message.channel.send(embed);
    
  }})
9
client.on('message',async message => {
  if(message.content.startsWith(prefix + "roleinfo")) {
  let args = message.content.split(" ").slice(1).join(" ");
if (!args[0]) return message.channel.send("**Please Mention A Role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");
        const status = {
            false: "No",
            true: "Yes"
        }
        let roleembed = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
              .addField("**Time Create**",role.createdAt.toLocaleString(),true)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
})
10
client.on('message',async message => {
  if(message.content.startsWith(prefix + "channelinfo")) { 
  let args = message.content.split(" ").slice(1)
let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");
        let channelembed = new Discord.MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**Channel ID**", channel.id, true)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Topic**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
           .setFooter('Bawan')
        .setColor("RANDOM")
        message.channel.send(channelembed);
    }
})
11

13
client.on("message", msg => {
if(msg.content.startsWith(prefix+"clear")) {
 let args = msg.content.split(" ").slice(1);
 if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}})
14
client.on('message', message => {

 
      if(message.content === prefix + "Lock") {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return
        message.delete()
                    
        if(!message.channel.guild) return 
 
 let bwan = new Discord.MessageEmbed()
        
        .setAuthor("Commands of "+client.user.username,"https://cdn.discordapp.com/emojis/783663031846305802.gif")
              .setFooter('🔒')       
                .setColor('RANDOM') 
                .setTitle('CHANNEL CLOSED')
        message.channel.send(bwan)
         
        
        
    

             message.channel.updateOverwrite(message.guild.id, {

            SEND_MESSAGES: false
             })}
 
              })


client.on('message', message => {
      if(message.content === prefix + "unlock") { 
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return 
        message.delete()
                    
        if(!message.channel.guild) return message.reply('SORRY IM IN SERVER');
 let bwan = new Discord.MessageEmbed()
                    
        .setAuthor("Commands of "+client.user.username,"https://cdn.discordapp.com/emojis/783663031846305802.gif")
                .setFooter("🔓")
                .setColor('RANDOM') 
                .setTitle('CHANNEL NOW OPEN')
        message.channel.send(bwan)
         
             message.channel.updateOverwrite(message.guild.id, {

            SEND_MESSAGES: true
             })}
 
              })


16
client.on('message',async message => {
  if(message.content.startsWith(prefix + "userrole")) { 

let member_r = message.mentions.members.first() || message.member,
  user = member_r.user;
let bawan= new Discord.MessageEmbed()
  .addField('this member have this Roles:', member_r.roles.cache.map(r => `${r}`).join(', '), true)

message.channel.send()
}})
17
18
client.on("message", msg => {
 if (msg.content.startsWith(prefix + "unmute")) {
   var bawan = "kurdfam"
   var muteRole = msg.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
    var muteUser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
   if (!muteUser) return msg.channel.send("kasek mention bka");
   if (!muteRole) return msg.channel.send("rolek ba nawe muted bwny niya tkaya drwsty bka");
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
     
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("unMute")
    .addField("unMuted user", muteUser)
    .setFooter(`unMuted by ${msg.author.tag}`)
    .setTimestamp()
    muteUser.roles.remove(muteRole);
    msg.channel.send(muteEmbed);
    
  }
})
19
client.on("message", msg => {
if(msg.content.startsWith(prefix+"kick")) {
 let args = msg.content.split(" ").slice(1);
  
  if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("You don't have permission to kick members.");
        let toKick = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('Please mention someone to kick');
        if(!toKick) return msg.channel.send(`${args[0]} is not a member.`);
        if(!reason) return msg.channel.send('Specify a reason.');
 let kurdfam= ''
        if(!toKick.kickable){
            return msg.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
        }
 
        if(toKick.kickable){
            let x = new Discord.MessageEmbed()
            .setTitle('kick')
            .addField('Member kick', toKick)
            .addField('kicked by', msg.author)
            .addField('Reason', reason)
            .addField('Date', msg.createdAt)
            .addField('')
            .setColor('RANDOM');
 
            msg.channel.send(x);
            toKick.kick();
        }
    }
})
20
client.on('message', async message=>{
  
  if(message.content.startsWith(prefix+'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo unban krdn')
const reason = args[1] || "be hokar"
let unban = await client.users.fetch(args[0])

message.guild.members.unban(unban,reason)
const qala = new Discord.MessageEmbed()
    
  .setTitle('unBan')  
    .addField('kase unban kraw ',unban)
   
.addField('un ban kra la layan',message.author)

.addField('ba hokare',reason)
.setFooter('')
message.channel.send(qala)

  }})
21
client.on('message',message => {

if(message.content.startsWith(prefix+ 'ban')) {
let args = message.content.split(" ").slice(1)
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
   
let Ban = message.mentions.members.first();
let hokar = args.slice(1).join(" ");
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo ban krdn')
if(!Ban) return message.channel.send(`${args[0]}      am kasa bwny niya la server`)
if(!hokar) return message.channel.send('hokarek dyare bka')

if(!Ban.bannable) {
return message.channel.send('to natwane am kasa ban bkai')

}

if(Ban.bannable) {

const embed = new Discord.MessageEmbed()
.setTitle('Ban')
.setColor('RANDOM')
.addField('kase ban kraw', Ban)
.addField('ban kra la layan', message.author)
.addField('ba hokare', hokar)
.setFooter('')
message.channel.send(embed)

Ban.ban();
}}})

22
const fetch = require('node-fetch');
client.on('message',async message => {
  if(message.content.startsWith(prefix + "covid")) {
  
  
  let args = message.content.split(" ").slice(1)

        let countries = args.join(" ");
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some args (ex: ;covid all || ;covid iraq)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
.setFooter('')
                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
    }
}
          )
23
client.on('message',async message => {
  if(message.content.startsWith(prefix + "roleadd")) { 

if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
    
      const embed = new Discord.MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} added ${shla}`)
      
      await message.channel.send(embed)
      
      qawrma.roles.add(shla)
    
  }
})
24
client.on('message',async message => {
  if(message.content.startsWith(prefix + "roleremove")) { 

if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
    
      const embed = new Discord.MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} removed ${shla}`)
      
      await message.channel.send(embed)
      
      qawrma.roles.remove(shla)
    
  }
})
25
client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var embed = new Discord.MessageEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:embed});
 
    }
});
26
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'senddm')) {
  
   if(!msg.member.hasPermission('ADMINISTRATOR')) return
   let args = msg.content.split(' ').slice(1)
     
      
      if (!args[0]) return msg.channel.send(``)
      if (!args[1]) return msg.channel.send(``)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.channel.send()
      let alphaEmbed = new Discord.MessageEmbed()
      .setTitle("")
      .setDescription(args.join(" "))

      client.users.cache.get(`${alpha.id}`).send(alphaEmbed)
      msg.channel.send('```DONE```')
    }
});
27
client.on('message', message => {

    if (message.content === prefix + "calendar") {
         
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
      

            var bawan= new Discord.MessageEmbed()
            .setTitle("[ TODAY]  ")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.send(bawan);
    }
});
 28
var cats = [
 
"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
 
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
         var cat = new Discord.MessageEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
.setColor(0xd3d0c4)
   .setFooter(``)
message.channel.send(cat);
 
    }
});
29
client.on('message', message => {
    if(message.content === "+bot") {
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
**NAME**  ~ toxic-test
**Servers**🌐 **__${client.guilds.cache.size}__**
**Users**👥 **__${client.users.cache.size}__**
**Channels**📚 **__${client.channels.cache.size}__**
**Owner** ~  **toxic**
`)
               message.channel.send(embed);
           }
});
30
client.on('message', message => {
if (message.content.startsWith(prefix+"add")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.roles.create(`${argrst}`)
 
        }
});
31
client.on('message', message => {
     if (message.content === "$servers") {
     let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField("**| serverakan |**" , client.guilds.cache.size)
  message.channel.send(embed);
    }
});
32
client.on('message',  (message) => {
        if(message.content.startsWith('+kiss')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to Kiss')
  var kiss = [
"https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",       
"https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
"https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif",  

  
  
  ];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} kiss ${user.username}!`)

.setImage(kiss[Math.floor(Math.random() * kiss.length)])

message.channel.send(embed)
        }})
33
client.on('message',  (message) => {
        if(message.content.startsWith('+love')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to love')
  let loves = [
"https://media.discordapp.net/attachments/738277612039962688/775017084848439296/image0.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017085545086996/image2.gif", 
"https://media.discordapp.net/attachments/738277612039962688/775017085721116732/image3.gif",  
"https://media.discordapp.net/attachments/738277612039962688/775017085948133406/image4.gif", 
"https://media.discordapp.net/attachments/738277612039962688/775017086127702047/image5.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017086300717068/image6.gif",  
"https://media.discordapp.net/attachments/738277612039962688/775017086522228766/image7.gif", 
"https://media.discordapp.net/attachments/738277612039962688/775017086757634128/image8.gif",
 "https://media.discordapp.net/attachments/738277612039962688/775017087004442634/image9.gif",
 "https://media.discordapp.net/attachments/738277612039962688/775017087004442634/image9.gif"   
  ];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Love ${user.username}!`)

.setImage(loves[Math.floor(Math.random() * loves.length)])

message.channel.send(embed)
        }})
34
client.on('message',  (message) => {
        if(message.content.startsWith('+boom')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to boom')

  let bombs = [
    "https://media.discordapp.net/attachments/738277612039962688/775016118678454282/image0.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016118938894407/image1.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016119148740608/image2.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016119328833566/image3.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016119588225094/image4.gif",
   "https://media.discordapp.net/attachments/738277612039962688/775016119778017290/image5.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016119966629928/image6.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016120393924698/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775016120577949706/image9.gif" 
  
  
  ];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} boom ${user.username}!`)

.setImage(bombs[Math.floor(Math.random() * bombs.length)])

message.channel.send(embed)
        }})
35
client.on('message',  (message) => {
        if(message.content.startsWith('+hug')) {
  let user = message.mentions.users.first() 
  if (!user) return message.reply('mention someone to Hug')

  
  let hugs = [
    "https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif"
  ,"https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"
  
  
  ];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Hugs ${user.username}!`)

.setImage(hugs[Math.floor(Math.random() * hugs.length)])
.setFooter(' ')
message.channel.send(embed)
           
        }})
36
client.on('message',async (msg,target) => {
  if(msg.content.startsWith(prefix + "badge")) { 

   let args = msg.content.split(" ").slice(1)

const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
    HYPESQUAD_EVENTS: 'HypeSquad Events',
    HOUSE_BRAVERY: 'House of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
     const member = msg.mentions.members.last() || msg.guild.members.cache.get(target) || msg.member;
          const userFlags = member.user.flags.toArray();

    var embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${member} Badges`)
            .setDescription(`❯ All Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`)
            msg.channel.send(embed)
   
}
})
37
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "embed")) {
      let say = message.content.split(" ").slice(1).join(" ");
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${say}`)
      message.channel.send(embed)
message.channel.send(``)
      message.delete()
 
}
});

111
          
client.on("message", async message  => {
if(message.content.startsWith(prefix+"serve77")) {

  if(message.author.bot) return;
if(!message.channel.guild) return;

let args = message.content.split(" ").slice(1);

const os = require('os')

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} server Info`)
            .addFields(
                {
                    name: "Owner: ",
                    value: `${message.guild.owner}`,
                    inline: true
                },
                {
                    name: "All Members: ",
                    value: ` ${message.guild.memberCount} users`,
                    inline: true
                },
                {
                    name: "Members Online: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online`,
                    inline: true
                },
                {
                    name: "All Bots: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.bot).size} bots`,
                    inline: true
                },
                {
                    name: "Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles Number: ",
                    value: ` ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Not verified`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? ` ${message.guild.premiumSubscriptionCount} Boosters` : ` no boosters Found`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `All emojis ${message.guild.emojis.cache.size} !` : ' no emojis Found' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}

)          

222
client.on('message', message => {
     if (message.content === "+servers") {
     let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField("**| serverakan |**" , client.guilds.cache.size)
  message.channel.send(embed);
    }
}); 
333
client.on('message', message => {
     if (message.content === "$servers") {
     let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField("**| serverakan |**" , client.guilds.cache.size)
  message.channel.send(embed);
    }
}); 
444
    
client.on('message' , message => {

    if (message.content === "+support") {
        if(!message.channel.guild) return message.reply('**this command only for server**');
     const embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL())     
 .setDescription(" ***welcome To server support*** " + `
 **
Link server | https://discord.gg/QRmjYM4
 **
`);
  message.author.send(embed);
   }
});
  
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "say")) {
      let say = message.content.split(" ").slice(1).join(" ");
      const embed = new Discord.MessageEmbed()
      .setAuthor("Commands of "+client.user.username,"https://cdn.discordapp.com/emojis/768498314118299658.gif") 
      .setColor("RANDOM")
      .setDescription(`${say}`)
      message.channel.send(embed)
message.channel.send(``)
      message.delete()
 
}
});

client.on('message', message => {
    if (message.content === "rooms") {
        var channels = message.guild.channels.cache.map(channels => `${channels.name}, `).join('\n ')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('rooms:',`**[${channels}]**`)
        message.channel.send(embed);
    }
});

client.on("ready", () => { //When bot is ready
  console.log("I am Reday to Go")
  client.user.setActivity(client.get(`status`)) //It will set status :)
})

 client.on('message', message => {
 
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.MessageEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ move kra <@${usermentioned}>  `)
var embed = new Discord.MessageEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> kra!\nServer --> ${message.guild.name}**`)
 message.guild.members.cache.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.cache.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `sarkawtoo nabw`")
}
} else {

 
 }}}})
  
  client.on("message", message => {
 if (message.content === "+kurdi") {       
  const embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL())
      .setDescription(`
 
***TOXIC***
***owner***
 
`)
  
message.channel.send(embed)
 
}
});




client.on('message',  (message) => {
        if(message.content.startsWith('b/love')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to love')
  let loves = ["https://tenor.com/view/kurdish-flag-kurdistan-flag-flags-kurds-kurd-gif-13572098.image9.gif",];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Love ${user.username}!`)

.setImage(loves[Math.floor(Math.random() * loves.length)])

message.channel.send(embed)
        }})


client.on("message", message => {
 if (message.content === "+kurdish") {       
  const embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL())
      .setDescription(`
 
***پێشگری بۆت => + فرمانەکان

+banباند =>unbnaلەبردنی باند +muteناتوانی چات بکە +unmuteلەبردای چات ومیوت +kick  کیک

+avatar => وێنەی سێرڤەر

+roleinfo +serverinfo +channelinfo زانیار چات +userroleزانیاری ڕۆڵ

+vmute>میوت کردن و لە بردن +vunmute +کیک کردن +vkick

+قوفڵ +لە بەردنی قو فڵ  +Lock+unlock

+خاوێنکردنەوەی+clear 

+زیادکردنی لابردنی ڕۆڵی ڕۆڵ +role add  +roleremove
    
+بڵێ+say

+love =>+kiss +boom +hug
  
+covid
+perms ++bot***
 
`)
  
message.channel.send(embed)
 
}
});

function randomStatus() {
    let status = ["+help", "+!help<music command",] 
    let rstatus = Math.floor(Math.random() * status.length);
 
    client.user.setActivity(status[rstatus], {type: "PLAYING",}
)}; 
setInterval(randomStatus, 2000)
client.on ('message', async (Fathy) => {
   if (!Fathy.guild || Fathy.author.bot) return false;
   var prefix = '+';
   if (Fathy.content == prefix + 'ping') {
     const msg = await Fathy.channel.send ("Alpha");
     msg.delete ();
     Fathy.channel.send (`\`\`\`javascript\nDiscord API: ${Math.round (client.ping)}ms\nTime taken: ${msg.createdTimestamp - Fathy.createdTimestamp}\n\`\`\` `)
   }
 })


client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}mute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Server Muted",
          color: "#808080",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
    
  }
});
client.on("message", msg => {
 if (msg.content.startsWith(prefix + "mute")) {
  var bawan = "kurdfam"
   var muteRole = msg.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
    var muteUser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
    if (!muteUser) return msg.channel.send("kasek mention bka");
 if (!muteRole) return msg.channel.send("rolek ba nawe muted bwny niya tkaya drwsty bka");
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
     
   
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Mute")
    .addField("Muted user", muteUser)
    .setFooter(`Muted by ${msg.author.tag}`)
    .setTimestamp()
    muteUser.roles.add(muteRole);
    msg.channel.send(muteEmbed);
    
  }
})
