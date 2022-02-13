async function insertion(){

    
  const bar=document.querySelectorAll(".bar");
  for(let i=1;i<input_size.value;i++){
    
    let temp=bar[i].style.height;   
    await wait(delay); 
    bar[i].style.background="red";
    j=i-1;
    
      await wait(delay);

    while(j>=0 && parseInt(bar[j].style.height)>parseInt(temp)){
      bar[j].style.background="blue";
      
        bar[j+1].style.height=bar[j].style.height;
        
        j--;
        
          await wait(delay);
         
        for(let k = i; k >= 0; k--){
          bar[k].style.background = "green";
      }
    }
    await wait(delay);
    bar[j+1].style.height=temp;
   
    bar[i].style.background="green";
  }

  
}

const inser=document.querySelector(".Insertionsort");
     inser.addEventListener("click", async function(){
      let elementin=document.querySelector(".flex-container-tc");
      elementin.innerHTML=`
                 <h3>Time complexity of Insertion sort</h3>
                  <ol style="font-size:23px">
                    <li><b>Best Case</b> : Ω(n)</li>
                    <li><b>Average Case</b> : θ(n^2)</li>
                  
                    <li><b>Worst case</b>  : O(n^2)</li>
                  </ol>
      `
    disable();
     await insertion();
     enable();
   
     });