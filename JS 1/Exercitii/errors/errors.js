
try {
    // console.logg('This should not happen');
    throw 'I throw this error';
} catch (error) {
    console.log('There was an error: ' + error);
}


console.log('Do we see this message?');