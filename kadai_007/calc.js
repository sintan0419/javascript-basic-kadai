let num = Math.floor(Math.random() * 99) + 1;

console.log('算出された数字は' + num + 'です！');

if(num % 3 ==0 && num % 5 ==0){
  console.log('3と5の倍数です！');
}
else if(num % 3 == 0){
  console.log('3の倍数です！');
}
else if(num % 5 ==0){
  console.log('5の倍数です！');
}
else{
  console.log(num)
}