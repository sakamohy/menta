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

// 課題66
console.log(arr.slice(1,3))

// 課題67
console.log(arr.splice(2,1))

// 課題68
arr.forEach((x) => console.log(x))

// 課題69
const numbers = [1, 2, 3]
const doubleNumbers = numbers.map((x) => x * 2)
console.log(doubleNumbers)

// 課題70
const TripleNumbers = numbers.map((x) => x * 3)
console.log(TripleNumbers)

// 課題73
const array = ['いぬ','さる','きじ']
console.log(array.sort())

// 課題74
const array74 = [1975,11,20]
console.log(array74.sort((a,b) => a - b))

// 課題75
console.log(array74.sort((a,b) => b - a))

// 課題77
const array77 = ['りんご','みかん','いちご']
console.log(array77.join(','))

// 課題78
const array78 = [1,2,3,4,5]
const arrayClone = [...array78]
console.log(arrayClone)

// 課題79
const array79 = [...array78,6,7,8,9,10]
console.log(array79)

// 課題83
const object = [
    {'id': 1, 'name': 'ジョン', 'age': 15},
    {'id': 2, 'name': 'ボブ', 'age': 20},
    {'id': 3, 'name': 'マイケル', 'age': 30},
]
console.log(object)

// 課題85
console.log(object[2].age)

// 課題86
const found = object.filter((obj) => obj.name.length >= 3)
console.log(found)

// 課題87
const found87 = object.filter((obj) => obj.id != 1)
console.log(found87)

// 課題94
const array_94_1 = [1,2,3]
const array_94_2 = [4,5,6]
console.log([...array_94_1,...array_94_2])

// 課題95
const object95 = {'id':1,'name':'ベッキー','age':20}
const object95_clone = {...object95}
console.log(object95_clone)

// 課題96
const object96 = {...object95,'height': 175,}
console.log(object96)

// 課題97
const object97 = {'height': 175,'weight': 70}
const object97_merge = {...object96,...object97}
console.log(object97_merge)
















































