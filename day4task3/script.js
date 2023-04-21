var request= new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all')
request.send()
request.onload=function(){
    var data=request.response
    console.log(JSON.parse(data))
    var r=(JSON.parse(data))
    
    for( i=0;i<r.length;i++){
   console.log(r[i].name.common)
    }
   for( i=0;i<r.length;i++){
   console.log(r[i].region)
   }
   for( i=0;i<r.length;i++){
   console.log(r[i].subregion)
   }
   for( i=0;i<r.length;i++){
   console.log(r[i].population)
}
}