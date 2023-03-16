let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
      value() { // значение -- это функция
        return Object.keys(this).join();
      }
    }
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";
  
  // apple и __proto__ выведены в цикле
  for(let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
  }
