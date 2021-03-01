require('dotenv').config();
const cooldowns = new Map();
const profileModel = require("../../models/profileSchema");

module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (message.content.includes('🐻')) {
        message.react('🐻');
    } else if (message.content.includes('🐳')) {
        message.react('🐳');
    } else if (message.content.includes('🐖')) {
        message.react('🐖');
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
            });
            profile.save();
        }
    } catch (err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    // commands 파일에 없는 명령어의 이름일 경우 catch로 안가고 name이 없다고 뜸
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`${command.name}을(를) 쓰려면 ${time_left.toFixed(1)}초 기다려주세요.`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try {
        command.execute(client, message, cmd, args, Discord, profileData);
    } catch (err){
        message.reply("알 수 없는 명령어입니다. 명령어를 확인하려면 \'..도움\'을 입력해주세요. ");
        console.log(err);
    }
}