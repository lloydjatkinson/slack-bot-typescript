import { Logger } from 'tslog';
import { transport as rotatingLogFileTransport } from './rotating-log-file-transport';

export const getLogger = ({ name }: { name: string }): Logger => {
    const logger: Logger = new Logger({
        name,
        maskValuesOfKeys: ['test', 'authorization', 'password', 'secret', 'token', 'key'],
        overwriteConsole: true,
        displayInstanceName: true,
    });

    logger.attachTransport(
        {
            silly: rotatingLogFileTransport,
            debug: rotatingLogFileTransport,
            trace: rotatingLogFileTransport,
            info: rotatingLogFileTransport,
            warn: rotatingLogFileTransport,
            error: rotatingLogFileTransport,
            fatal: rotatingLogFileTransport,
        },
        'debug',
    );

    return logger;
};