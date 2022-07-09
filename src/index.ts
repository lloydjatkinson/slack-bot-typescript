import 'dotenv/config';
import { createCalculateAverage } from './features/tasks/calculate-average';
// import { createTask2 } from './features/infrastructure';

// async function delay(ms) {
//     // return await for better async stack trace support in case of errors.
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

(async () => {
    // await createTask({
    //     name: 'ExampleTask',
    //     async start({ logger }) {
    //         logger.info('I am inside a task');

    //         setInterval(() => {
    //             logger.info('...');
    //         }, 1000);
    //     },
    // });

    // await createTask({
    //     name: 'ExampleTask',
    //     async start({ logger }) {
    //         logger.warn('I am inside a task as well');

    //         setInterval(() => {
    //             logger.fatal('---');
    //         }, 4000);
    //     },
    // });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const task = await createTask2({
    //     name: 'ExampleTask',
    //     async start({ logger }) {
    //         logger.warn('I am inside a task as well');
    //         logger.info('yay');
    //     },
    // });

    // await task();

    const calculateAverage = await createCalculateAverage();
    await calculateAverage();
})();