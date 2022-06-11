import { clog, enableClog, disableClog, mountClog,  } from './lib/clog';

mountClog();

clog(1, 3);

export {
	enableClog,
	disableClog
};
