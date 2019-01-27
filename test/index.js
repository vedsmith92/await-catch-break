const awcb = require('./..');


const foo = (resolveOrReject) => new Promise((resolve, reject) => {

	if(resolveOrReject) {
		resolve('Resolve with data !');
	} else {
		reject('Reject with error !');
	}

});


(async () => {

	let data;

	console.log('Running test..')
	console.log('Await for data code as normal await/async syntax.');

	data = await awcb(foo(true))
	.catch((error) => console.log({ catch: error }));
  
	console.log({ data });
	console.log('\n----\n');
  
	console.log('When reject an error, other code below `await` will not be executed.');

	data = await awcb(foo(false))
	.catch((error) => console.log({ catch: error }));
  
	console.log('This code should not be executed !');
	console.log({ data });
	console.log('----');
  
})();