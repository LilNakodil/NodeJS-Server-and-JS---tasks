function sum(a) {

    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
}
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
}
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
  
  
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5
