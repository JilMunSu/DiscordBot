module.exports = {
    name: '투표',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: '투표를 하자!',
    execute(client, message, cmd, args, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'bot');
        if(!channel) return message.channel.send('투표채널이 존재하지 않습니다.');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}