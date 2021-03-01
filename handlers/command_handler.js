const fs = require('fs');
const path = require('path');

module.exports = (client, Discord) => {
    const readFilesSync = (dir, filelist = []) => {
        fs.readdirSync(dir).forEach(file => {
    
            filelist = fs.statSync(path.join(dir, file)).isDirectory()
                ? readFilesSync(path.join(dir, file), filelist)
                : filelist.concat(path.join(dir, file));
        });
        return filelist;
    }

    const commandFiles = readFilesSync(path.join(__dirname, '../commands/')).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(file);
        client.commands.set(command.name, command);
    }
}