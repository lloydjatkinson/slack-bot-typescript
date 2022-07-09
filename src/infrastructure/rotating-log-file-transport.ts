import { ILogObject } from 'tslog';
import { createStream } from 'rotating-file-stream';

const stream = createStream('slack-bot.log', {
    size: '10M', // rotate every 10 MegaBytes written
    interval: '1d', // rotate daily
});

export const transport = (logObject: ILogObject) => {
    stream.write(`${JSON.stringify(logObject)}\r\n`);
};