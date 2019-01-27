module.exports = (prom) => ({
	catch: (catchCallback) => {
		return new Promise((resolve, reject) => {
			prom
			.then((...opts) => resolve(...opts))
			.catch((error) => catchCallback(error))
		})
	}
});