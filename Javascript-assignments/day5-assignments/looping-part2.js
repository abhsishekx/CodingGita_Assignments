Part B] For Loop (Additional advanced questions)

Q1
// let sum=0
// let arr=[28, 32, 25, 40, 18, 35];
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]>30){
//         sum+=1
//     }
    
// }
// console.log(sum)

Q2
// let sum=0
// let num=4729;
// for(i=0;i<=4;i++){
//     let last_digit=num%10
//     sum+=last_digit
//     num=Math.floor(num/10)
// }
// console.log(sum)

Q3
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0 && i%7!=0){
//         console.log(i)
//     }
// }

Q4
// let str="javascript"
// for(let i=0;i<=str.length-1;i++){
//     if(str[i]!="a" && str[i]!="e "&& str[i]!="i" && str[i]!="o" && str[i]!="u"){
//     console.log(str[i])
// }

// }

Q5
// let arr=[10,20,30,40,50]
// let max=0;
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }   
// }
// console.log(max)

Q6
// let num = 28;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }

// if (sum === num) {
//     console.log(num + " is a perfect number");
// } else {
//     console.log(num + " is not a perfect number");
// }

Q7
// for(let i=1;i<=128;i*=2){
//     console.log(i)
// }

Q8
// let num=20;
// let a=0
// let b=1
// for(let i=0;i<=num;i++){
//     console.log(a)
//     let c=a+b
//     a=b
//     b=c 
// }

Q9
// let c=0;
// let arr=[45, 78, 90, 32, 56, 88];
// let sum=0;
// for(let i=0;i<=arr.length-1;i++){
//     sum+=arr[i]
// }
// let avg=sum/arr.length
// console.log(avg)
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]>avg)
//     c+=1
// }
// console.log(c)

Q10
// let binary=""
// let num=13;
// for(i=0;num!=0;i++){
//     let remainder=num%2;
//     binary=remainder+binary
//     num=Math.floor(num/2)
// }
// console.log(binary)
