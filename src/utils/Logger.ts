const log = require('leekslazylogger');
const logger = new log()

export class Logger {
    public static info(message: string, ...args) {
        logger.info(message, args)
    }

    public static error(message: string, ...args) {
        logger.error(message, args)
    }

    public static debug(message: string, ...args) {
        logger.debug(message, args)
    }

    public static warn(message: string, ...args) {
        logger.warn(message, args)
    }
}
