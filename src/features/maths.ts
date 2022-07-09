/* eslint-disable @typescript-eslint/no-unused-vars */

import { Logger } from 'tslog';

export const add = (a: number, b: number) => a + b;

export const divide = (a: number, b: number): number => {
    // const log: Logger = new Logger({ name: 'myLogger' });
    // // log.silly('I am a silly log.');
    // // log.trace('I am a trace log with a stack trace.');
    // // log.debug('I am a debug log.');
    // // log.info('I am an info log.');
    // // log.warn('I am a warn log with a json object:', { foo: 'bar' });
    // // log.error('I am an error log.');
    // // log.debug(new Error('I am a pretty Error with a stacktrace.'));
    // log.debug('doing maths', { a, b });

    const logger: Logger = new Logger({
        // name: 'MainLogger',
        maskValuesOfKeys: ['test', 'authorization', 'password'],
        maskAnyRegEx: ['pass.*'], // mask every string that starts with "pass"
        overwriteConsole: true,
        displayInstanceName: true,
    });

    const childLogger: Logger = logger.getChildLogger({ name: 'FirstChild' });

    const grandchildLogger: Logger = childLogger.getChildLogger({
        name: 'GrandChild',

    });

    logger.info('main1');

    childLogger.info('child');

    grandchildLogger.info('grandchild');

    // grandchildLogger.getChildLogger({  })

    return a / b;
};