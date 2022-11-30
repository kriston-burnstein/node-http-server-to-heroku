const EventEmitter = require('events');
const uuid = require('uuid'); //uuid module we installed earlier
//uuid will generate a certain format of a generated id

class Logger extends EventEmitter {
  log(msg) {
    // Call event (or raise an event)
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
