module.exports = {
    name: '클리어',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "메시지 삭제 기능입니다.",
    async execute(client, message, cmd, args, Discord){
            if(!args[0] || isNaN(args[0])) return message.channel.send("숫자를 입력해주세요.");
            if(args[0] > 100 || args[0] < 1) return message.channel.send("1~100까지의 숫자만 입력가능합니다.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            })
    }
}