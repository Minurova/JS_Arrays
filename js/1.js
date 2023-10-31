function task1()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sum=arr.filter(index=>index%2==0).reduce((sum,elem)=>sum+Math.sqrt(elem),0);
    console.log(sum);
}
function task2()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
   console.log(arr.toString());
   let sum=arr.filter(elem>0 && elem<10).reduce((sum,elem)=>sum+elem,0);
   console.log(sum);
}
function task3()
{
    function isChet(arr)
    {
        return arr.every(elem=>elem%2==0);
    }
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr);
    console.log(isChet(arr));
}
function task4()
{
    function calcFive(arr)
    {
       let newArr=arr.filter(elem=>elem%5==0);
       return newArr;
    }
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr);
    console.log(calcFive(arr));
}
function task5()
{
    let arrAverage=function (arr)
    {
       let summ=arr.reduce((sum,elem)=>sum+elem,0);
       return summ/arr.length;
    }
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    console.log(arrAverage(arr).toFixed(1));
}
function task6()
{
    let newArr=function(arr)
    {
       let newArr=arr.push(arr.splice(0,1));
       return arr;
    }
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    console.log(newArr(arr).toString());
}
function task7()
{
    let arr=Array.from(Array(6),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let sumChet=arr.reduce((sum,elem,index)=>{
    if (index%2==0)
    sum+=elem;
    return sum;},0);
    let sumNechet=arr.reduce((sum,elem,index)=>{
    if (index%2!=0)
    sum+=elem;
    return sum;},0);
    console.log(sumChet/sumNechet);
}
function task8()
{
    let str=prompt("Введите число");
    if (isNaN(str)) alert ("Не числа");
   else
   {let numbers = Array.from(str);
    newArr=numbers.map(elem=>+elem+1);
    console.log(newArr.join(""));
   }
}
function task9() {
    let arr=['http://yandex.ru', 'http://vk.com', 'gooogle.com', 'http://travel.ru', 'net.com'];
    arr=arr.filter(elem=>elem.startsWith('http://'));
    console.log(arr.toString());
}
function task10() {
    let data = [
        {
        1: 11,
        2: 12,
        3: 13,
        },
        {
        1: 21,
        2: 22,
        3: 23,
        },
        {
        1: 24,
        2: 25,
        3: 26,
        },
        ];
        let sum=0;
        data.forEach(elem=>{
            for ([key, value] of Object.entries(elem)) {
               sum+=value; 
            }
        });
        console.log(sum);
}