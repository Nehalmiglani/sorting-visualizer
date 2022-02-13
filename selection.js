console.log("selection sort");

async function selection(){
    
    const e=document.querySelectorAll(".bar");
    
    for(let i=0;i<e.length;i++){
      
        console.log("in for loop of i");
        let min_index=i;
        e[i].style.background="red";   //the first min
        for(let j=i+1;j<e.length;j++){
            console.log("in for loop of j");
            e[j].style.background="yellow";   //second pointer finds the nxt min
            console.log("before wait");
          
            await wait(delay);
            console.log("after wait");
            if(parseInt(e[j].style.height)<parseInt(e[min_index].style.height)){

                  if(min_index!=i){
                      e[i].style.background="red";  //orginial color of bars
                  }
                  min_index=j;        //update new min index
            }
            else{
             e[j].style.background="blue";   //back to original color
            }
        }
           await wait(delay);   // runs settimeouit for few milisec to make us see the changes
           swap(e[min_index],e[i]);    
           e[min_index].style.background="blue";    
     
           e[i].style.background="green";

    } 
        

}

    
           
     const selec=document.querySelector(".Selectionsort");
     selec.addEventListener("click", async function(){
        let element=document.querySelector(".flex-container-tc");
        element.innerHTML=`
                   <h3>Time complexity of selection sort</h3>
                    <ol style="font-size:23px">
                      <li><b>Best Case</b> : Ω(n^2)</li>
                      <li><b>Average Case</b> : θ(n^2)</li>
                      <li><b>Worst case</b>  : O(n^2)</li>
                    </ol>
        `
    
      disable();
    await selection();
    enable();
   
    
    
   
     });


