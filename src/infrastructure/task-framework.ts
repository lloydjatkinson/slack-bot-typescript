import { Logger } from 'tslog';

// const delay = async (milliseconds: number) => new Promise((resolve) => {
//     setTimeout(resolve, milliseconds);
// });

export interface TaskParameters {
    readonly name: string;

    readonly logger: Logger;
}

interface Task {
    readonly name: string;

    start({
        name,
        logger,
    }: TaskParameters): Promise<unknown> | undefined;
}

const taskManagementLogger: Logger = new Logger({
    name: 'TaskManagement',
    overwriteConsole: true,
    displayInstanceName: true,
});

export const createTask = async (task: Task) => {
    const { name } = task;

    const taskLogger = taskManagementLogger.getChildLogger({
        name: task.name,
    });

    taskManagementLogger.debug(`Task "${name}" starting`);
    try {
        await task.start({
            name,
            logger: taskLogger,
        });
    } catch (error) {
        taskManagementLogger.fatal(error);
    }
    taskManagementLogger.debug(`Task "${name}" finished`);
};

export const createTask2 = async (task: Task) => {
    const { name } = task;

    const taskLogger = taskManagementLogger.getChildLogger({
        name: task.name,
    });

    const run = async () => {
        taskManagementLogger.debug(`Task "${name}" starting`);
        try {
            await task.start({
                name,
                logger: taskLogger,
            });
        } catch (error) {
            taskManagementLogger.fatal(error);
        }
        taskManagementLogger.debug(`Task "${name}" finished`);
    };

    return run;
};