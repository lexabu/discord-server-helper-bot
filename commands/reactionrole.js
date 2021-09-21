module.exports = {
  name: "reactionrole",
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
    const channel = "889752518404501551";
    const ogRole = message.guild.roles.cache.find((role) => role.name === "OG");
    const babyApeRole = message.guild.roles.cache.find((role) => role.name === "Baby Ape");

    const ogEmoji = "🦍";
    const babyEmoji = "🍼";

    let embed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Rules!")
      .setDescription(
        `:warning: Please read the server rules below: :warning:

        :one: - Ape into projects and bang your chest when you make profits
        
        :two: - Be nice, and respect all members. Do not use profanity, racial slurs, or offensive comments of any kind.
        
        :three: - Spam and promote excessively. Post NSFW content.
        
        :four: - Please only use bot commands in the #🤖bot-commands  channel.
        
        :five: - Use channels appropriately with keeping the channel topic in mind. If you have a project to promote, please only use the #🍇ape-vine .
        
        By reacting with the :gorilla:  emoji below, you accept these rules and can view the rest of the channels! 
        
        :gorilla: APES TOGETHER STRONG :gorilla:
          `
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(ogEmoji);
    //messageEmbed.react(babyEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;
      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === ogEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(ogRole);
        }
        //if (reaction.emoji.name === babyEmoji) {
        //await reaction.message.guild.members.cache.get(user.id).roles.add(babyApeRole);
        //}
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === ogEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(ogRole);
        }
        //if (reaction.emoji.name === babyEmoji) {
        //  await reaction.message.guild.members.cache.get(user.id).roles.remove(babyApeRole);
        //}
      } else {
        return;
      }
    });
  },
};
