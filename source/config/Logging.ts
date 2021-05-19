const getTimestamp = (): string => {
    return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimestamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimestamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimestamp()}] [WARN] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimestamp()}] [WARN] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimestamp()}] [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimestamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimestamp()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimestamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
