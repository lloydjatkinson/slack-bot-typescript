import 'dotenv/config';
import { App } from '@slack/bolt';
import { tslogSlackAdapter } from './infrastructure/tslog-slack-adapter';
import { getLogger } from './infrastructure/logging';

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    logger: tslogSlackAdapter(),
});


(async () => {
    await app.start(3000);

    app.message('hello', async ({ message, say }) => {
        const logger = getLogger({ name: 'HelloTask' });
        logger.info('Replying to hello message');

        await say(`Hey there <@${message}>!`);
    });

    app.client.chat.postMessage({
        channel: 'bot-task-log',
        text: 'Started running',
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'plain_text',
                    text: 'Started running',
                },
            },
        ],
    });
})();