1. Not understanding async inside of try catch.
  Async code inside of a try catch statement. If your async code throws an error inside a try catch statement it will not end up in the catch, to many people's shock. 
  This is because of the async and sync flow. First the try catch is entered into. Then the async code fires. Then the try catch is completed. Then the async code throws the error. 
  It ends up in process since you didn't handle it correctly. For another example and explanation see [this](https://stackoverflow.com/questions/68102365/why-is-try-catch-not-working-with-async-await-function) link.
  
try {
  axios.post(config.requestUrl, {}).catch(e => {console.log(e)}); //with out the .catch, the error would remain unhandled
} catch (e) {
  console.log(e);
}

2. If you are ever hunting for unhandled errors in node, consider using the 'unhandledRejection' tool. There are also warnings, uncaughtExceptions, and more.
  You shouldn't leave these in code as some sort of last defense. But they are useful for finding difficult async bugs like the one listed above.

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
