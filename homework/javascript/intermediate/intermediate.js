// 課題8
const return_only_str = (str) => {
    if (typeof (str) == "string" || str instanceof String) {
        return str;
    }
    throw new Error('引数には文字列を設定してください。');
};
console.log(return_only_str('課題8'));

// 課題15
const getFirstChar = (str) => {
    return str.slice(0, 1)
};
console.log(getFirstChar('12345'));

// 課題16
const popString = (str) => {
    return str.slice(0, -1);
}
console.log(popString('12345'));

// 課題17
const popFirstStr = (str) => {
    return str.slice(1);
}
console.log(popFirstStr('12345'));

// 課題18
const toggleBoolean = (bool) => {
    return !bool;
}
console.log(toggleBoolean(Boolean(true)));
console.log(toggleBoolean(Boolean(false)));

// 課題19
const answer = (arr) => {
    return arr.join(',');
}
console.log(answer(['apple', 'oraneg', 'melon']));

// 課題25
let str = 'あいうえお'
console.log(str.replace('あ', 'お'));

// 課題26
str = 'ああああああ';
console.log(str.replace(/あ/g, 'お'));

// 課題27
str = 'あいうえお';
console.log([...str]);

// 課題28
str = 'あいうえおかきくけこ';
ret = str.match('あいうえお');
if (ret) {
    console.log(ret[0]);
}

// 課題30
const greeting = 'Hi my name is Bob!';
const splitedArray = greeting.split('');
splitedArray.forEach(x => { console.log(x) });

// 課題33
const name = '名前';
if (confirm(`${name}で間違いないですか？`)) {
    console.log(`ようこそ${name}さん!!`);
} else {
    console.log('もう一度やりなおしてください。');
}

// 課題38
const obj = {
    name: '名前'
}
console.log(obj.name);

// 課題39
const showNameprop = (obj) => {
    console.log(obj.name);
}
showNameprop(obj);

// 課題46
const library = {
    book: {
        author: "Tom Sawyer",
        year: "11/12/2021"
    }
}
library.book.year = "10/22/1876";
console.log(library);

// 課題48
const object = { name: 'Bob', age: '35' };
const addWeight = (obj, weight) => {
    obj.weight = weight;
    console.log(obj);
}
addWeight(object, 40);

// 課題49
const person = { name: 'Bob', age: 35 };
person.hobby = ['cooking', 'reading'];
console.log(...person.hobby);

// 課題52
const delObjProp = (obj, delProp) => {
    delete obj[delProp];
    console.log(obj);
}
delObjProp(person, 'hobby');

// 課題71
const fruits = ["apple", "grape", "fig"];
let answer71 = fruits.filter(value => {
    return value.length == 3;
});
console.log(answer71);

// 課題76
const array76 = [1, 2, 3, 4, 5, 6];
const answer76 = array76.reduce((sum, cuurent) => sum + cuurent, 0);
console.log(answer76);

// 課題80
const array80 = [1, 2, 3, 4, 5, 6];
const array80_etc = [7, 8, 9, 10];
const array80_sum = [...array80, ...array80_etc];
console.log(array80_sum);

// 課題84
const object84 = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
console.log(object84[1]);

// 課題87
const object87 = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
answer87 = object87.find(obj => obj.id === 2);
console.log(answer87);

// 課題88
const object88 = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
const answer88 = object88.filter(obj => obj.age === 15);
console.log(answer88);

// 課題90
const object90 = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
const answer90 = object90.filter(obj => obj.age != 15);
console.log(answer90);

// 課題98
const object98 = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
for (let obj of object98) {
    ++obj.age;
}
console.log(object98);

// 課題109
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data));

// 課題120
function redirectUrl(language) {
    let url = "www.example.com";
    switch(language) {
        case "English":
            url += "/eng";
            break;
        case "Japanese":
            url += "/jpn";
            break;
        case "Korea":
            url += "/kor";
            break;
    }
    return url;
}
console.log(redirectUrl("English"));
console.log(redirectUrl("Japanese"));
console.log(redirectUrl("Korea"));



