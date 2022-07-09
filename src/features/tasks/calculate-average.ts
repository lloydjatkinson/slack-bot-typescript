import { createTask } from '../infrastructure';

export default createTask({
    name: 'CalculateAverage',
    async start({ logger }) {
        logger.info(__filename);
    },
});