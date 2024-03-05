#!/usr/bin/env node
const { spawn } = require('child_process');
const readline = require('readline');
const {green, blue, } = require('kleur');


function printCenteredAsciiArt(asciiArt) {
    const terminalWidth = process.stdout.columns;
    const lines = asciiArt.split('\n');
    const maxLength = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const leftPadding = Math.max(Math.floor((terminalWidth - maxLength) / 2), 0);

    const centeredAsciiArt = lines.map(line => ' '.repeat(leftPadding) + line).join('\n');

    console.log(green(centeredAsciiArt));
}

const asciiArt = `
                                       *@@      
                         .@&      &@(            
                          &@*     @@             
                           .@@     @@/           
              #@&           (@/     .@/          
            @@%            (@%      /@/        
           @@*                     *@,                             
          ,@@                                      *@@          @@.           
          *@@                                      *@@           (@@&         
          *@@    ************,.                    *@@              &@@,      
          *@@   ********************************   *@@                (@@%    
       ,@@#    **********************************,   .@@#              (@@%
        (@@,   ,*********************************    %@@.            &@@. 
          &@&   ********************************   ,@@.            /@@#   
          .@@   .*******************************   /@            @@@,     
          .@@   .*******************************   /@@        /@@%        
          .@@   .*******************************   /@@      &@@,          
           @@   .*******************************   /@@     /%             
           @@.  .*******************************   #@#                                          
            (@@,                                 #@@                       
               #/                               @*                       
                                                                                                      
`;

printCenteredAsciiArt(asciiArt);


function prompt(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
        });
    });
}

prompt('Do you want to install required gems? (y/N): ')
    .then((installGems) => {
        if (installGems) {
            const gemInstall = spawn('gem', ['install', 'cocoapods']);
            gemInstall.stdout.on('data', (data) => console.log(`stdout: ${data}`));
            gemInstall.stderr.on('data', (data) => console.error(`stderr: ${data}`));
            gemInstall.on('close', (code) => {
                if (code === 0) {
                    console.log('Gems installation completed');
                    processComplete();
                } else {
                    console.log('Gems installation failed');
                    process.exit(1);
                }
            });
        } 
    })
    .catch((error) => {
        console.log('Error:', error);
        process.exit(1);
    });



function processComplete() {
    console.log('\n');
    console.log(
       blue('🚀 React-Native Boilerplate initialized successfully! 🚀')
    );
    console.log('\n');
    console.log(
        green('👏 Congratulations! Your project is now set up and ready to go.')
    );
    console.log('\n');
    
    console.log(
        green('🎉 Thank you for choosing our boilerplate. Happy coding! 🎉')
    );
    console.log('\n');
    process.exit(0);
}
