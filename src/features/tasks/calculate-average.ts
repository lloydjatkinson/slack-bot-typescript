import { createTask2 } from '../infrastructure';

// export const createCalculateAverage = await createTask2({
//     name: 'CalculateAverage',
//     async start({ logger }) {
//         logger.info(__filename);
//     },
// });

export const createCalculateAverage = async () => createTask2({
    name: 'CalculateAverage',
    async start({ logger }) {
        logger.info(__filename);
    },
});