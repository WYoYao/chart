var a = { name: 'leo' };


Object.defineProperty(a, 'name', {
    get() {
        console.log('getting');
        return a._name;
    },
    set(newVal) {
        console.log('setting')
        a._name = newVal;
    }
});

console.log(a.name);
a.name = 'jack';
console.log(a.name);

console.dir(a);