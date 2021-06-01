if (command === "ecojoin"){
        FS.readFile('./economy.json', (err, data) => {
            if (err) {
                console.log(err)
            }
            const userID = message.author.id.toString()
            if(!data.includes(userID)){
                
                const SuccessEmbed = new Discord.MessageEmbed()
                    .setColor('#FFFFFF')
                    .setTitle('**Mighty Economy**')
                    .setDescription('You have successfully joined the economy system!')
                    .attachFiles('./images/icon.png')
                    .setThumbnail('attachment://icon.png')

                FS.readFile('./economy.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                    obj = JSON.parse(data);
                    obj.table.push({userID: userID, bCoins: 50});
                    json = JSON.stringify(obj);
                    FS.writeFile('./economy.json', json, 'utf8', (err) => {
                        if(err){console.log(err)};
                    })
                }});

                message.channel.send(SuccessEmbed);
            }else{
                const errorEmbed2 = new Discord.MessageEmbed()
                    .setColor('#FFFFFF')
                    .setTitle('Mighty Error')
                    .setDescription('`The command you tried to run returned an error.`')
                    .addFields(
                        {
                            name: 'What can I do now?',
                            value: 'Try running the command again and make sure that you have included all arguments needed, or have tagged a person and not just spoken words.'
                        },
                        {
                            name: 'What could have caused this?',
                            value: 'A lot of things happen that can cause an error, maybe you or me are missing permissions to do something, or the command simply will not work, and sometimes you forget to add something.'
                        }
                    )
                    .attachFiles('./images/icon.png')
                    .setThumbnail('attachment://icon.png')
                return message.channel.send(errorEmbed2)
            }
        })
    }
