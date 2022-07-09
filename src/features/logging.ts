// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable dot-notation */
// import winston, { format } from 'winston';
// import 'winston-daily-rotate-file';

// const {
//     combine, timestamp, json, colorize, errors, align, printf,
// } = format;

// const logFileTransport = new winston.transports.DailyRotateFile({
//     dirname: 'logs',
//     filename: 'slack-bot-log-%DATE%.log',
//     datePattern: 'YYYY-MM-DD',
//     zippedArchive: true,
//     maxSize: '1gb',
//     maxFiles: '60d',
//     format: combine(
//         errors({ stack: true }),
//         timestamp({
//             format: 'YYYY-MM-DD HH:mm:ss',
//         }),
//         json(),
//     ),
//     level: 'verbose',
// });

// const logConsoleTransport = new winston.transports.Console({
//     format: combine(
//         colorize({ all: true }),
//         timestamp({
//             format: 'YYYY-MM-DD hh:mm:ss.SSS A',
//         }),
//         align(),
//         printf((info) => `[${info['timestamp']}] ${info.level}: ${info.message}`),
//     ),
//     level: 'debug',
// });

// const logger = winston.createLogger({
//     level: 'verbose',
//     transports: [
//         logFileTransport,
//         // logConsoleTransport,
//     ],
// });

// export const getLogger = () => logger;