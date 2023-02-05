// alert("hello world");

// let a = {
//     name:`Tuan`,
//     age:25,
//     fullName: function(){
//         return this.name;
//     }
// };

// let b = [];

// c=1;
// d='3'
// a.getAge=()=>{
//     return a.age;
// }





// let arr = [1,2,3,4,5,6,7,8,9,10];

// let arrFilter = arr.filter((element,index)=>{
//     return element&&element>=5&&element<9;
// })

// let arrFind = arr.find((element,index)=>{
//     return element&&element===3;
// })

// let arrMap = arr.map((element,index)=>{
//     return element*element;
// })

// let tong = (x,y)=>{
//     return x+y;
// }

// console.log(tong(2,7));

// let tong_arr = arr.reduce((accumlator,currentValue)=>{return accumlator+currentValue},0);
// console.log(tong_arr);

// let arr_sort = arr.sort((a,b)=>{
//    return b-a;
// })

// callbacks
let sum = (a,b,callback)=>{
    tong = a+b
    callback(tong)
}
sum(89,3,(message)=>{
    console.log(message)
})