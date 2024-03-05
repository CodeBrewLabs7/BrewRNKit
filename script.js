#!/usr/bin/env node
const ora = require('ora');
const { exec } = require('child_process');

const spinner = ora('Executing post init script ');

new Promise((resolve, reject) => {
    spinner.start();
    
    // Install pods
    const installPods = exec('cd ios && pod install');
    installPods.stdout.on('data', data => console.log(data));
    installPods.stderr.on('data', data => console.error(data));
    installPods.on('close', code => {
        if (code === 0) {
            resolve();
        } else {
            reject();
        }
    });
}).then(() => {
    spinner.succeed();
}).catch(() => {
    spinner.fail();
    throw new Error('Something went wrong during the post init script execution');
});
