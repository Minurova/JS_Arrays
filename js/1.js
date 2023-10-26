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