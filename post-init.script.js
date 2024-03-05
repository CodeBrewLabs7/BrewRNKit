#!/usr/bin/env node
const ora = require('ora');
const { spawn } = require('child_process');
const readline = require('readline');

const spinner = ora('Executing post init ');

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

spinner.start();

prompt('Do you want to install required gems? (y/N): ')
    .then((installGems) => {
        if (installGems) {
            const gemInstall = spawn('gem', ['install', 'cocoapods']);
            gemInstall.stdout.on('data', (data) => console.log(`stdout: ${data}`));
            gemInstall.stderr.on('data', (data) => console.error(`stderr: ${data}`));
            gemInstall.on('close', (code) => {
                if (code === 0) {
                    console.log('Gems installation completed');
                    installPods();
                } else {
                    spinner.fail('Gems installation failed');
                    process.exit(1);
                }
            });
        } else {
            installPods();
        }
    })
    .catch((error) => {
        spinner.fail('Error:', error);
        process.exit(1);
    });

function installPods() {
    // Install pods
    const installPods = spawn('pod', ['install'], { cwd: 'ios' });

    installPods.stdout.on('data', (data) => console.log(`stdout: ${data}`));

    installPods.stderr.on('data', (data) => console.error(`stderr: ${data}`));

    installPods.on('close', (code) => {
        if (code === 0) {
            spinner.succeed('Pods installation completed');
        } else {
            spinner.fail('Pods installation failed');
            process.exit(1);
        }
    });
}
