import { Logger } from 'tslog';
import { transport as rotatingLogFileTransport } from './rotating-log-file-transport';

const logger: Logger = new Logger({
    name: 'DefaultLogger',
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

export const getLogger = ({ name }: { name: string }): Logger => {
    const instance = logger.getChildLogger({ name});

    return instance;
};