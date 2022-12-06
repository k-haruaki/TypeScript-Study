// 通常の関数を使ったパターン
function Person(age) {
    this.age = age;
    this.growOld = function() {
        this.age++;
    }
}

var person = Person(1);
setTimeout(person.growOld, 1000);

setTimeout(function() {
    console.log(person.age);
}, 2000);

// アロー関数で置き換えてみる
function Person(age) {
    this.age = age;
    this.growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // 2

setTimeout(function() { console.log(person.age); },2000); // 2
