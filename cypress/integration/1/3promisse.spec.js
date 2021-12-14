// const getSomething = () => {
// 	setTimeout(() => {
// 		console.log("getSomething");
// 		return "cypress";
// 	}, 1000);
// };

////refatoração 1
// const getSomething = (callback) => {
// 	setTimeout(() => {
// 		console.log("getSomething");
// 		callback("cypress");
// 	}, 1000);
// };

////refatoração 2
const getSomething = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("getSomething Promise");
			resolve("cypress");
		}, 1000);
	});
};

// const main = () => {
// 	console.log("init");
// 	getSomething().then((value) => {
// 		console.log("Result: ", value);
// 	});
// 	console.log("end");
// };

const main = async () => {
	console.log("init");
	const value = await getSomething();
	console.log("Result: ", value);
	console.log("end");
};

main();
