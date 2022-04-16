// 課題2
const apple = 'リンゴ'
console.log(apple)

// 課題3
let weight = 70
weight = 60
console.log(weight) 

// 課題4
const twice = (num) => {
    return num * 2
}
console.log(twice(3))

// 課題5
const addOne = (num) => {
    return num + 1
}
console.log(addOne(3))

// 課題6
const minOne = (num) => {
    return num - 1
}
console.log(minOne(3))

// 課題7
const getLength = (str) => {
    return str.length
}
console.log(getLength('apple'))

// 課題9
const judgeLength = (str) => {
    if (str.length >= 10 ) {
        return false
    } else {
        return true
    }
}
console.log(judgeLength('apple'))

// 課題10
const judgeLength2 = (str) => {
    if (str.length >= 5 && str.length < 10) {
        return true
    } else {
        return false
    }
}
console.log(judgeLength2('apple'))

// 課題11
const isString = (parameter) => typeof parameter === 'string'
console.log(isString('3'))
console.log(isString(3))

// 課題13
const getsum = (num1,num2) => num1 + num2
console.log(getsum(1,2))

// 課題14
const getFullName = (firstName,lastName) => firstName + lastName
console.log(getFullName('Tanaka','Taro'))


// 課題22
let answer = 'あいうえお'
console.log(answer)

// 課題23
answer = 'あいうえおかきくけこ'
console.log(answer)

// 課題24
answer = 'あいうえおかきくけこ'
console.log(answer)

// 課題29
const str = 'Menta'
console.log(str.slice(0,3))
const alphabet = "abcde"
console.log(alphabet.slice(-1))

// 課題32
// const name = 'Menta'
// if (confirm(name + 'さんで間違いないですか？')) {
//     console.log('こんにちわ')
// } else {
//     console.log('もう一度お願いします。')
// }

//　課題36
let empty = {}
console.log(empty)

// 課題37
let human = {
    'name': 'ボブ',
    'age': 20
}
console.log(human)

// 課題40
human.age = 30
console.log(human)

// 課題41
const changeAgeprop = (obj,age) => {
    obj.age = age
    return obj
}
console.log(changeAgeprop(human,41))


// 課題42
human.age += 1
console.log(human)

// 課題43
console.log(addOne(human.age))

// 課題44
let library = {
    'openHour': '0am ~ 11am'
}
library.openHour = '8am ~ 9pm'
console.log(library)

// 課題45
const changeOpenHour = (obj,openHour) => {
    obj.openHour = openHour
    return obj
}
console.log(changeOpenHour(library,'8am ~ 10pm'))

// 課題47
let object47 = {}
object47.weight = '50kg'
console.log(object47)

// 課題50
const obj50 = {
    'name' : 'obj50'
}
delete obj50.name
console.log(obj50)

// 課題55
let arr = []

// 課題56
arr = ['りんご','みかん','いちご']

// 課題57
console.log(arr[1])

// 課題58
arr[2] = "もも"
console.log(arr[2])

// 課題59
arr.push('すいか')
console.log(arr)

// 課題60
arr.pop()
console.log(arr)

// 課題61
arr.unshift('すいか')
console.log(arr)

// 課題62
arr.shift()
console.log(arr)

// 課題63
arr.reverse()
console.log(arr)

// 課題64
console.log(arr.indexOf('みかん'))

// 課題65
console.log(arr.includes('りんご'))































