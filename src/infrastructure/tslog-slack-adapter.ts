import { Logger, LogLevel } from '@slack/bolt';
import { getLogger } from './logging';

export const tslogSlackAdapter = (): Logger => {
    const logger = getLogger({ name: 'SlackInternal' });

    return {
        // Unfortunately Slack Bolt library seems to ignore the minimum level provided here
        // and it's very very noisy on the debug. We'll NOP debug because any useful information is
        // logged on the other levels.
        // debug: (...msgs) => logger.debug(`${JSON.stringify(msgs)}`),
        debug: () => {},
        info: (...msgs) => logger.info(`${JSON.stringify(msgs)}`),
        warn: (...msgs) => logger.warn(`${JSON.stringify(msgs)}`),
        error: (...msgs) => logger.error(`${JSON.stringify(msgs)}`),
        // Not sure of the intended use case for Slack here for the following three.
        // Don't want to have Slack changing the minimum level of the whole application.
        setLevel: () => {},
        getLevel: () => LogLevel.INFO,
        // setName: (name) => logger.setSettings({ name }),
        setName: () => {},
    };
};