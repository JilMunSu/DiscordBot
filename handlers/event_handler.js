const fs = require('fs');
const path = require('path');

const readFilesSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {

        filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? readFilesSync(path.join(dir, file), filelist)
            : filelist.concat(path.join(dir, file));
    });
    return filelist;
}

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {

        const event_files = readFilesSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for(const file of event_files){
            const event = require(path.join(__dirname,`../${file}`));
            const event_name = file.split('.')[0].split('\\');
            client.on(event_name[event_name.length - 1], event.bind(null, Discord, client));
        }
    }
    ['client', 'guild'].forEach(e => load_dir(e));
}