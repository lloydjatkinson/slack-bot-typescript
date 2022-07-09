import { createTask } from '../../infrastructure/task-framework';

export default createTask({
    name: 'CalculateAverage',
    async start({ logger }) {
        logger.info(__filename);
    },
});