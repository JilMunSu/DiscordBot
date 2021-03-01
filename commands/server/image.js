var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
});

module.exports = {
    name: '이미지',
    aliases: [],
    permissions: [],
    description: '이미지를 디스코드 채널에 보냅니다.',
    async execute(client, message, cmd, args, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('검색할 이미지 제목을 넣어주세요');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}