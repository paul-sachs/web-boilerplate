export const tap = prefix => arg => {
	console.log(prefix, arg);
	return arg;
};
