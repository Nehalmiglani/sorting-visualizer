//decalring variables

let array=[];

var delay=250; //default this delay time helps us to see the visuals clearly as loop runs very fast
let input_size=document.getElementById('input_size');
let bars = document.querySelector("#bars");


//generating array

 generate();

window.onload=generate();
let newarr=document.querySelector("#newarr");
newarr.addEventListener("click", function(){
    console.log("From newArray " + n);
    enable();
    generate();
});
function generate(){
    bars.innerHTML=" ";
    array=[];
    for(let i=0;i<input_size.value ;i++){

        array[i]=Math.floor(Math.random() * 0.5*(input_size.max - input_size.min) ) + 10;
         
        
         
    }
    console.log(array);
    for(let i=0;i<parseInt(input_size.value);i++){
    
        const bar=document.createElement('div');
        bar.classList.add('bar');
        bar.classList.add(`barNo${i}`);
        bar.classList.add('flex-item');
        bar.style.height=`${array[i]*7}px`;
        bar.style.width=`${100/input_size.value}%`;
       
        bars.appendChild(bar);
       
       
       }
    
}



function disable(){
    document.querySelector(".Bubblesort").disabled = true;
    console.log("disabled");
    document.querySelector(".Insertionsort").disabled = true;
    document.querySelector(".Mergesort").disabled = true;
    document.querySelector(".Quicksort").disabled = true;
    document.querySelector(".Selectionsort").disabled = true;
    document.querySelector("#newarr").disabled = true;
    document.querySelector("#input_size").disabled = true;
}
function enable(){
    document.querySelector(".Bubblesort").disabled = false;
    document.querySelector(".Insertionsort").disabled = false;
    document.querySelector(".Mergesort").disabled = false;
    document.querySelector(".Quicksort").disabled = false;
    document.querySelector(".Selectionsort").disabled = false;
    document.querySelector("#newarr").disabled = false;
    document.querySelector("#input_size").disabled = false;

}

//for async function

function wait(milisec) { 
    console.log("in wait");
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
        // console.log("resolving");
    }) 

}

//swap
function swap(a ,b){
    // console.log("in swap");
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}

//speed
let delayElement = document.querySelector('#input_speed');

delayElement.addEventListener("input", function(){
   
    delay = 280- parseInt(delayElement.value);
});

 //size 
input_size.addEventListener("input", ()=>{
    console.log(input_size.value, typeof(input_size.value));  //using parseInt to convert string 
    generate();
});





