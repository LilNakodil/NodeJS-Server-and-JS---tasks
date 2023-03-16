function sumByCycle(n){
    let summer =0;
    for(let i =1;i<=n;i++){
        summer+=i;
    }
}
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  function sumToAnother(n) {
    return n * (n + 1) / 2;
  }
  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); // выводим текущий элемент
  
    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
  
  }
  function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }