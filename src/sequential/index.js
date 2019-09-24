/**
 * Implement the function 'sequential'
 * to execute async functions in sequence.
 *
 * 'sequential' takes an array of async functions as parameter,
 * and execute each of them after previous one is done.
 */

/*example of async tasks:
 function asyncTask1(done) {
  setTimeout(() => {
    console.log('task 1 done');
    done(1);
  }, 500);
}
function asyncTask2(done) {
  setTimeout(() => {
    console.log('task 2 done');
    done(2);
  }, 400);
}
function asyncTask3(done) {
  setTimeout(() => {
    console.log('task 3 done');
    done(3);
  }, 300);
}
*/

/**
 * Implement function body
 */
function sequential(tasks = []) {}

exports.sequential = sequential;
