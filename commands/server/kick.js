module.exports = {
    name: '추방',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "유저 추방 기능입니다.",
    execute(client, message, cmd, args, Discord){
            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`<@${member.id}>을(를) 추방했습니다.`);
                console.log(`<@${member.id}>을(를) 추방했습니다.`);
            } else {
                message.channel.send("당신은 해당 멤버를 추방하실 수 없습니다.");
            }
    }
}