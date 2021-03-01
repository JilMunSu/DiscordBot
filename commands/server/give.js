const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "기부",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  description: "다른 사람에게 돈을 기부합니다.",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (message.member.id != "361336155628765185") return message.channel.send(`해당 기능은 관리자만 이용가능합니다.`);
    if (!args.length) return message.channel.send("돈을 기부할 사람을 멘션해주세요.");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("해당 유저가 존재하지 않습니다.");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("정수로 입력해주세요.");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`해당 유저의 데이터베이스가 없습니다.`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      return message.channel.send(`${target}이(가) 관리자로부터 ${amount}원을 받았습니다.`);
    } catch (err) {
      console.log(err);
    }
  },
};