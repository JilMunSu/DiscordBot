const ytdl = require('ytdl-core');
const ytSerch = require('yt-search');
const queue = new Map();

module.exports = {
    name: '재생',
    aliases: ['스킵', '그만'],
    description: 'music bot',
    async execute(client, message, cmd, args, Discord){
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send("먼저 음성채널에 들어가주세요.");

        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') | !permissions.has('SPEAK')) return message.channel.send("당신은 권한이 없습니다.");
        
        const server_queue = queue.get(message.guild.id);
        if(cmd == '재생') {
            if (!args.length) return message.channel.send("제목을 입력해주세요");
            let song = {};

            if(ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = {title: song_info.videoDetails.title, url: song_info.videoDetails.video_url};
            } else {
                const video_finder = async (query) => {
                    const videoResult = await ytSerch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video){
                    song = {title: video.title, url: video.url};
                } else {
                    message.channel.send('노래를 찾을 수 없어요.');
                }
            }

            if (!server_queue){
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
    
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err){
                    queue.delete(message.guild.id);
                    message.channel.send('연결하는 동안 오류가 발생했습니다.');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`-----${song.title}----- 해당 곡이 대기열에 추가됨`);
            }
        } 
        
        else if (cmd === '스킵') skip_song(message, server_queue);
        else if (cmd === '그만') stop_song(message, server_queue);
    }
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if(!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }

    const stream = ytdl(song.url, {filter: 'audioonly'});
    song_queue.connection.play(stream, {seek: 0, volume: 0.5})
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`재생중인 곡 -----${song.title}-----`);
}

const skip_song = (message, server_queue) => {
    if(!message.member.voice.channel) return message.channel.send('먼저 음성채널에 들어와주세요.');
    if(!server_queue) {
        return message.channel.send(`대기열에 곡이 없습니다.`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if(!message.member.voice.channel) return message.channel.send('먼저 음성채널에 들어와주세요.');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
    message.channel.send(`모든 대기열을 초기화하고 나갑니다.`);
}