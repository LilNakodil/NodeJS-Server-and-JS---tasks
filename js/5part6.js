function spy(func) {

    function wrapper(...args) {
      // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
}
function delay(f, ms) {

    return function(...args) {
      let savedThis = this; // сохраняем this в промежуточную переменную
      setTimeout(function() {
        f.apply(savedThis, args); // используем её
      }, ms);
    };
  
}
function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
}
function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }