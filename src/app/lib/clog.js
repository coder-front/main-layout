let secretKey = 'coder';

const printHour = () => {
	const currentDate = new Date();
	
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	hours = hours > 10 ? `${hours}` : `0${hours}`;
	minutes = minutes > 10 ? `${minutes}` : `0${minutes}`;
	seconds = seconds > 10 ? `${seconds}` : `0${seconds}`;

	return `[${hours}:${minutes}:${seconds}]`;
}

const getClogStatus = () => {
	return (window.localStorage.getItem('clog-current-status') === 'true') ? true : false;
}

export const mountClog = () => {
	let initStatus = ($is_dev) ? true : false;
	if (window.localStorage.getItem('clog-current-status') === null) {
		window.localStorage.setItem('clog-current-status', initStatus);
	}
}

export const clog = (...params) => {
	if (getClogStatus()) {
		console.log(printHour(), ...params);
		return 'clog run';
	};

	return 'clog is disabled';
}

export const enableClog = (key = '') => {
	if (key === secretKey) {
		window.localStorage.setItem('clog-current-status', true);
		return 'clog enabled';
	}

	return 'clog not enabled';
}

export const disableClog = () => {
	window.localStorage.setItem('clog-current-status', false);
	return 'clog disabled';
}
