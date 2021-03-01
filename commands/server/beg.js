const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "노동",
  cooldown: 10,
  aliases: [],
  permissions: [],
  description: "노동을 합니다.",
  async execute(client, message, cmd, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    return message.channel.send(`${message.author.username}, 당신은 ${randomNumber}원을 벌었습니다.`);
  },
};
