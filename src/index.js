
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ((matrix==undefined)||(matrix.join()=='')) return [];
  return  matrix.map((x,i)=>i%2==0?x.join():x.reverse().join()).join().split(',')

}
