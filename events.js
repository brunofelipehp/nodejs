const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')

chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`))

console.log('oh! E agora quem poderá me defender?');
chapolin.emit('help')