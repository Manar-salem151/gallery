let photos=document.querySelectorAll(".photos img")
let photos2=document.querySelectorAll(".photos2 img")
let main=document.getElementsByName("main-img")[0]
console.log(photos,main)
photos.forEach(function(ele){
    ele.onclick=function(){
        main.src=ele.src
    }
})
photos2.forEach(function(ele){
    ele.onmouseenter=function(){
        main.src=ele.src
    }
})