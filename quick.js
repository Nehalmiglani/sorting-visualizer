console.log("quick sort");

 async function partition(ele,low,high)
 {
    
    let i = low -1; //points to next element to pivot
   
    ele[high].style.background="red"; //pivot
    
    for (let j = low ; j <= high-1 ; j++)
     {
          console.log("in j");
          ele[j].style.background="cyan";
          
           await wait(delay);
      // If current element is smaller than the pivot
        if (parseInt(ele[j].style.height) < parseInt(ele[high].style.height))
        {
              // increment index of smaller element
              

            i++;
            ele[j].style.background="orange";
            ele[i].style.background="orange";
            await wait(delay);
            swap(ele[i], ele[j]);
            ele[j].style.background="yellow";
            ele[i].style.background="yellow";
            await wait(delay);
          
        }
   
          else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    await wait(delay);
     i++;
     ele[i].style.background="pink";
     ele[high].style.background="pink";
     swap(ele[i], ele[high]);
     ele[i].style.background="green";
     ele[high].style.background="pink";
     
    await wait(delay);
    
    return i;
}

 async function quicksort(ele,low,high)
 {

   if(low<high)
   {
      
     var pi= await partition(ele,low ,high);
     
     await quicksort(ele,low,(pi-1));
    
    await quicksort(ele,(pi+1),high);

   }
   
    if(low >= 0 && high>= 0 && low <ele.length && high <ele.length){
        ele[high].style.background = 'green';
        ele[low].style.background = 'green';
    }
   
  }



const quick=document.querySelector(".Quicksort");
     quick.addEventListener("click", async function(){
      const a=document.querySelector(".flex-container-tc");

      a.innerHTML=`
      
               <h3>Time complexity of Quick Sort</h3>
                <ol style="font-size:23px">
                  <li><b>Best Case</b> : Ω(nlogn)</li>
                  <li><b>Average Case</b> : θ(nlogn)</li>
                  <li><b>Worst case</b>  : O(n^2)</li>
                 
                </ol> `;
        let ele=document.querySelectorAll(".bar");
         let low=0;
         let high=ele.length-1;
        disable();
         await quicksort(ele,low,high);
        enable();
   
   
     });

    
     


    
