function fn() {}

fn.prototype.config = {
    name: 'leo'
}


var f = new fn();

console.log(f.config);