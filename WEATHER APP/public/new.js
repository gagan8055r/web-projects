// var myName='gagan'
// // console.log(myName);
// var iAmgagan='gah'-'gah'
// console.log(iAmgagan);
// console.log(typeof(iAmgagan));
// var myNum="67858979a8"
// if(isNaN(myNum)){
// console.log("plzz enter valid number");}
// else{
//     console.log("this is valid number");
// }
// console.log(`is x and y are equal:${x==y}`);
// var num=15
// var myNum =--num+5
// console.log(num);
// console.log(myNum);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(a>b && b < 0);
// console.log(!(a<b || b < 0));
// console.log(3**3);
// 3**3 this is a power exponentation operator
// var a=5
// var b='5'
// // var c=b
// // b=a
// // a=c
// // // console.log(b=a);
// // a=a+b
// // b=a-10
// // a=a-b
// console.log(a==b);
// console.log(a===b);
// // console.log(b);
// var year=2100
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("this is a leap year");
//         }else{
//             console.log("this is not a leap year");    
//         }
//         console.log("this is not a leap year");

//     }else{
//         console.log("this is a leap year");
// //     }

// // }else{
// // console.log("not a leap year");
// // }
// // there are 5 false statements in js:0,null,undefined,NaN,false
// // if these are present then always only else part is executed
// // if(0){
// // console.log('this is true');
// // }else{
// //     console.log('this is false');
// // }
// // var age=2
// // console.log((age>=18)?"you can vote":"you can't vote");


// var area='circle'
// var pi=3.14
// r=3,l=4,b=5
// switch (area) {
//     case 'circle':
//         {
//             console.log("this is area of circle  "+ pi*r*r);
//         }
//         break;
//         case'triangle':{
//             console.log("this is area of triangle "+ ((l*b)/2));
//         }
//         break;
//         case'rectangle':{
//             console.log("this is area of rectangle "+ (l*b));
//         }
//         break;
//     default:{
// console.log("plzz enter valid data");
//     }
//         break;
// }

// var num=10
// for (let num = 0; num <=10; num++) {
//     // const element = array[num];
//     debugger;
//     console.log(num);
    
// }
// for (let num = 1; num <=10; num++) {
//     // const element = array[num];
//     console.log("the table of 8 is "+8*num);
    
// }
// for (let num = 1; num <=10; num++) {
//     // const element = array[num];
//     console.log("the table of 9 is "+9*num);
    
// }
// for (let num = 1; num <=10; num++) {
//     // const element = array[num];
//     console.log("the table of 12 is "+12*num);
    
// }
// var tableof=15
// for (let num = 1; num <=10; num++) {
//     // const element = array[num];
//     console.log(tableof +"*"+num+"="+`${tableof*num}`);
    
// }
// function sum(a,b) {
//     // var a=10,b=10
//     var total=a+b
//     console.log(total);
// }
// // console.log("hello");
// sum(10,20)
// sum()
// function sum(a,b) {
//     // var a=10,b=10
// return total=a+b
// }
// // console.log("hello");
// var funExp=sum(10,20)
// console.log(funExp);
// // sum(10,20)

// // sum()
// var funExp=function(a,b) {
//     return total=a+b
// }
// // var funExp=sessionStorage
// var num=funExp(10,20)
// // var num2=funExp(15,20)
// console.log("the sum of two number "+num)
// var funExp=function(a,b) {
//     return total=a+b
// }
// // var funExp=sessionStorage
// var num=funExp(10,20)
// var num2=funExp(15,20)
// console.log(num2>num)

// function biodata() {
//     const firstName="gagan"
//     console.log(firstName);
//     if (true) {
//         const lastName='gundu'
//         console.log('inner'+lastName);
//         console.log('inner'+firstName);
        
//     }
//     console.log('inner'+lastName);
    
// }
// biodata()
// by this we can say var is :Functionscope where let and const are block scope
// function mult(a,b) {
//     return a*b
    
// }

// console.log(mult(3));
// if there are more arguments it will always asign to first parameter
// function sum(){
//     // var a=5,b=5
   
//     return(`the sum of two numbers ${(a=5)+(b=5)}`);
// }
// console.log(sum());
// const breeds=['pigs','goat','cows','chicken','dog','duck','panda']
// // breeds.push('chicken')
// console.log(breeds.shift('chicken'));
// console.log(breeds);
// console.log(breeds.pop('chicken'));
// console.log(breeds);
// const breeds=['pigs','goat','cows','chicken','dog','duck','panda']


// console.log(breeds.pop());
// console.log(breeds);
// console.log(breeds.pop());
// const months=['jan','march','april','June','July']
// // console.log(months.push('dec'));
// // months.push('Dec')
// const update=months.indexOf('June')
// // console.log(update);
// if (update!=-1) {
//     const NewMonth=months.splice(update,1)
//     console.log(months);
//     console.log(NewMonth);
//     // console.log();
    
// }else{
//     console.log("No such data found");
// }  
// months.filter

// console.log(NewMonth);
// let arr=[12,6,8,9]
// var sqrt=arr.map((Curelm)=>
//      Curelm*2
// ).filter((Curelm)=>
//     Curelm>10
// ).reduce((accumulator,Curelm)=>{
//     debugger;
//         return accumulator+=Curelm
//     },4)
//     console.log(sqrt)
//     let sum=arr.reduce((accumulator,Curelem)=>{
// debugger
// return accumulator+=Curelem;
//     },4)

// console.log(sum)
// map()
    
// const items="ehjhk,jhcfih,pig"
// var flag=items.slice(0,4)
// console.log(flag)

// const myTweets='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vero porro tempore voluptates et a ab, neque accusamus deserunt, obcaecati unde quod, sunt consectetur repudiandae? Mollitia nobis veritatis aliquid culpa?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias maxime eos repellat, possimus repellendus, similique suscipit ducimus laboriosam rem magni quasi! Odio quia minus quas, sit commodi exercitationem maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti inventore maiores sequi officiis, quos enim? Dolore facere minus id cum suscipit cupiditate, commodi numquam excepturi, praesentium eveniet recusandae tempore saepe?'
// const tweets=myTweets.slice(0,280)
// console.log(tweets.length);
// const newThings=things.replace('neW','NEW')
// console.log(newThings);
// const things='this is a new bicycle'
// console.log(things[1]);
// let myName='gagan'
// let lastName='gagan'
// console.log(myName  . concat  ( lastName))
// let namey='          hello           aggan   '
// console.log(namey.trim());
// let letters='a,f,|,g,h,j'
// console.log(letters.split(""))
// all this are set date method
// console.log(namE.toString());
// console.log(namE.toLocaleString());
// console.log(namE.getDate());
// console.log(namE.getDay());
// console.log(namE.getFullYear());
// console.log(namE.toString());
// only get  time methods return only in milliseconds that start from 1 jan 1970
// const namE = new Date ();
// console.log(new Date ().toLocaleString());
// console.log(namE.getTime());
// console.log(namE.getHours());
// console.log(namE.getMinutes());
// console.log(namE.getSeconds());
// console.log(namE.getMilliseconds());
// console.log(namE.setFullYear(2002));
// console.log(Math.floor(2.4));
// console.log(Math.trunc(2.4));
// console.log(Math.ceil(-2.4));
// console.log(Math.trunc(-2.4));
// let arr=['gagan','vinay',23]
// let[myName,myLname,myAge,myHobby='playing']=arr
// console.log(myAge);
// console.log(myLname);
// console.log(myName);
// console.log(myHobby);
// let myBiodata={
//     myName:'gagan',
//     mySkill:'web dev',
//     myAge:23
// }
// console.log(object.myName);
// console.log(object.myAge);
// let{myName,mySkill,myAge}=myBiodata;
// console.log(myAge) 
// console.log(nAme.padStart(70));
// console.log(nAme.padEnd(100));
// spread operaters
// let colors=['red','pink','blue']
// let myColors=['red','pink','blue','purple','white']
// let favColors=[...colors,'purple','white']
// console.log(favColors);
// let myName='gagan'
// let putty={
//     [myName]:'how are you',
//   [20+3]:'this is my age'
// }
// console.log(putty)
// to access key and values entities directly
// let famous={
//     namy:'gagan',
//     age:14
// }
// console.log(Object.values(famous));
// console.log(Object.entries(famous));
// let obj=Object.entries(famous)
// console.log(Object.fromEntries(obj));
// let arr=['zone 1','zone 1','zone 1','zone 1','zone 1','zone 1',['zone 1','zone 1',['zone 1','zone 1',['zone 1','zone 1']]]]

// let kammi=arr.reduce((accumulator,curtvalue)=>{
//     return accumulator.concat(curtvalue)

// })
// console.log(kammi);
// console.log(arr.flat(Infinity));

// let num=Number.MAX_SAFE_INTE9007199254740991GER
// let number=Number.MAX_SAFE_INTEGER              
// let number1=console.log(9007199254740991n+14n);
// console.log(typeof number1);

// const foo=null??"default"
// const foo=false??"default"
// const foo=false||"default"
// console.log(foo);
// 'use strict'
// let x=3.14
// console.log(x);
// const add=(a,b)=>{
//     return a+b
// }
// const sub=(a,b)=>{
//     return a-b
// }
// const mul=(a,b)=>{
//     return a*b
// }

// const calculator=(num1,num2,operator)=>{
//     return operator(num1,num2)
// }
// console.log(calculator(5,6,mul));
// const container=document.getElementById(#container)
// const request=new XMLHttpRequest()
// request.open('GET','')
// request.send()