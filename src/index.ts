import 'dotenv/config';
// import calculateAverageTask from './features/tasks/calculate-average';

// (async () => {
//     await calculateAverageTask;
// })();

import { App } from '@slack/bolt';
import { tslogSlackAdapter } from './infrastructure/tslog-slack-adapter';

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    logger: tslogSlackAdapter(),
});

(async () => {
    // Start your app
    await app.start(3000);

    // console.log('⚡️ Bolt app is running!');

    // Listens to incoming messages that contain "hello"
    app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
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