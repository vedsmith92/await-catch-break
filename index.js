module.exports = (promise) => {

	let wrappedPromise = new Promise((resolve, reject) => {

		promise
		.then((...opts) => resolve(...opts))
		.catch((error) => {

			if(wrappedPromise.catchHandler)
				return wrappedPromise.catchHandler(error);

			return reject(error);

		});

	});

	wrappedPromise.catch = function(catchHandler) {
		this.catchHandler = catchHandler;
		return this;
	};

	return wrappedPromise;

};
