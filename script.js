                                                     //Add and remove friend

var add = document.querySelector("#add");
var istatus = document.querySelector("h5");


/*

var remove = document.querySelector("#remove");

add.addEventListener("click",function(){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
})

remove.addEventListener("click",function(){
    istatus.innerHTML ="Stranger";
    istatus.style.color = "red";
})

*/


    let flag = 0;
    add.addEventListener("click",function(){
    if(flag===0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        add.innerHTML = "Remove Friend";
        flag = 1;
    }
    else if(flag===1){
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        add.innerHTML = "Add Friend";
        flag = 0;
    }

})


                                                         //Double click (Like)


var card1 = document.querySelector(".card1");
var love = document.querySelector("i");

card1.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = "0.8";

    setTimeout(() => {
        love.style.opacity = "0";
    }, 1000);
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },1000);

})



                    