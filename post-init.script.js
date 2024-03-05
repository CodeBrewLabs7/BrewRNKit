#!/usr/bin/env node
const {green, blue, white,gray } = require('kleur');

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
                        ${white('Code Brew Labs')}  
                ${gray('Software company in Chandigarh')}                                                   
`;

printCenteredAsciiArt(asciiArt);

processComplete();

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
