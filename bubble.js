
console.log("Bubble sort");


async function  bubblesort(e)
{
	let i, j;
    let n=e.length;
	for (i = 0; i < n-1; i++)
    {    await wait(delay);
	                                        // Last i elements are already in place
	    
	  for (j = 0; j < n-i-1; j++)
      {    await wait(delay);
	    	if (parseInt(e[j].style.height) >parseInt(e[j+1].style.height)){
                
                e[j].style.background="yellow";
               e[j+1].style.background="yellow";
               await wait(delay);
			         swap(e[j],e[j+1]);
               e[j].style.background="orange";
               e[j+1].style.background="orange";
            }

      }
      await wait(delay);
       e[j].style.background="green";
      
      

    }
    
    e[i].style.background="green";
    e[0].style.background="green";
}

    

const bubble=document.querySelector(".Bubblesort");
     bubble.addEventListener("click",async function (){
      const b=document.querySelector(".flex-container-tc");

      b.innerHTML=`
      
               <h3>Time complexity of Bubble Sort</h3>
                <ol style="font-size:23px">
                  <li><b>Best Case</b> : Ω(n)</li>
                  <li><b>Average Case</b> : θ(n)</li>
                  <li><b>Worst case</b>  : O(n^2)</li>
                 
                </ol> `;
        let e=document.querySelectorAll(".bar");
          disable();
           await bubblesort(e);
        enable();
    
     });


