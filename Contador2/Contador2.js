var createCounter = function(init) {

    let number = init ;
      function increment() {
            return ++number;
        } 
    
      function  decrement() {
            return --number;
        } 
    
      function  reset() {
            return (number = init );
        } 
        return {
           increment , decrement , reset };
        };
    
    
    const counter = createCounter(5)
    console.log(counter.increment()); // 6
    console.log(counter.reset()); // 5
    console.log(counter.decrement()); // 4
  