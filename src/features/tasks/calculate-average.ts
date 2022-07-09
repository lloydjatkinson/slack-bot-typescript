import { createTask2 } from '../infrastructure';

export default createTask2({
    name: 'CalculateAverage',
    async start({ logger }) {
        logger.info(__filename);
    },
});