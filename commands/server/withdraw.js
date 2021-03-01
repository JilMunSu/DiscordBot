const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "출금",
  description: "은행에서 돈을 출금합니다.",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("출금 금액은 정수여야 합니다.");

    try {
      if (amount > profileData.bank) return message.channel.send(`맡긴 돈이 부족합니다.`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`당신은 은행에서 ${amount}원을 출금했습니다.`);
    } catch (err) {
      console.log(err);
    }
  },
};