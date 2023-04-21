 var request= new XMLHttpRequest();
 request.open('Get','https://restcountries.com/v3.1/all')
 request.send()
 request.onload=function(){
 var data=request.response
console.log(JSON.parse(data))
 var arr=(JSON.parse(data))
 console.log(arr[0].flags)

for( i=0;i<arr.length;i++){
console.log(arr[i].flags)
 }
 }
