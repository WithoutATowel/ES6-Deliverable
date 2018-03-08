// Fill in the following function with a single object literal with the format
// {make: "honda", model: "civic", drive: Function}, where the drive function
// logs "vroom" to the console

function car(make, model, options){
  let drive = function() {
    console.log('vroom');
  }
  return {make: make, model: model, drive: drive};
}

let auto = car("honda","civic")
// returns {make: "honda", model: "civic", drive: Function}
auto.drive()
// logs "vroom" to the console
