module.exports = {
    name: '밴',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "유저 밴 기능입니다.",
    execute(client, message, cmd, args, Discord){
            const member = message.mentions.users.first();
            
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(`<@${member.id}>을(를) 밴했습니다.`);
                console.log(`<@${member.id}>을(를) 밴했습니다.`);
            } else {
                message.channel.send("당신은 해당 멤버를 밴하실 수 없습니다.");
            }
    }
}