const { Client, Intents, WebhookClient } = require('discord.js');
const client = new Client({
    partials: [
        'MESSAGE', 
        'REACTION'
    ], 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ] 
});

const PREFIX = "$";
const momo = "!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const family = ["mom", "dad", "brother", "sister", "uncle", "aunt", "grandpa", "grandma", "great grandpa", "great grandma", "cousin", "mom", "mother", "mom", "mother", "mom", "mother", "mom", "mother", "mom"]

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
 
    console.log(message.content);
    if (message.content === 'your' || message.content === 'Your' || message.content === 'ur' || message.content === 'Ur') {
        //message.reply('hello there!');
        const ran = Math.floor(Math.random()*20);

        message.channel.send(family[ran]);
    }

    if (message.content === 'joe' || message.content === 'Joe' || message.content === 'jo' || message.content === "Jo" || message.content === 'yo' || message.content === 'Yo') {
        message.channel.send('mama');
    }

    // if (message.content.startsWith(momo)) {
    //     for (var i=0; i<5; i++) {
    //         message.channel.send("<@250359545946177547>");
    //     }
    // }

    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
        console.log(CMD_NAME);
        console.log(args);
        const msg = args.join(' ');
        console.log(msg.toLowerCase().split(''));

        if (CMD_NAME === 'emoji') {
            const symbols = {
                '0': ':zero:',
                '1': ':one:',
                '2': ':two:',
                '3': ':three:',
                '4': ':four:',
                '5': ':five:',
                '6': ':six:',
                '7': ':seven:',
                '8': ':eight:',
                '9': ':nine:',
                '!': ':exclamation:',
                '?': ':question:',
                '>': ':arrow_right:',
                '<': ':arrow_left:',
                '^': ':arrow_up:',
                '#': ':hash:',
                '*': ':asterisk:',
                ' ': '  '
            }
            const lmsg = msg.toLowerCase().split('').map(Letter => {
                if (/[a-z]/g.test(Letter)) {
                    return `:regional_indicator_${Letter}:`
                } else if (symbols[Letter]) {
                    return `${symbols[Letter]}`
                }
                return Letter;
            }).join('');
            message.channel.send(lmsg);
            
        }
    }

});

client.on('messageReactionAdd', (reaction, user) => {
    console.log("Adding roles");
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '916126770804191252') {
        switch (name) {
            case '🧧':
                member.roles.add('916126029620326470');
                break;
            case '📙':
                member.roles.add('916126048578580500');
                break;
            case '🧈':
                member.roles.add('916125987605970944');
                break;
            case '🫐':
                member.roles.add('916126007369560066');
                break;
            case '🐙':
                member.roles.add('916125945910403073');
                break;
            
        }
    }
});
client.login("OTE2MDkzNDU5NzQ2NjgwOTQz.YalIhA.SywZecQaQ0r2DSqbsTP5XV-Penk");