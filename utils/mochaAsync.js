/**
 * @param {function} takes the test as a function and will return promise with done
 */
export default (fn) => {
    return (done) => {
        fn.call().then(done, (err)=>{done(err)});
    };
};