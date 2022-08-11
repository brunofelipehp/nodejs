const flagValue = require('./flags')

console.log(`Olá ${flagValue('--name')} ${flagValue('--greeting')}`);