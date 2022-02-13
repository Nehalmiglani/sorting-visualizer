
console.log("merge sort");
async function merge(e, low, mid, high)
{
	
	let n1 = mid - low + 1;
	let n2 = high - mid;

	/* create temp arrays */
	let a=new Array(n1);
	let b=new Array(n2);

	/* Copy data to temp arrays */
	
	await wait(delay);
	for (let i = 0; i < n1; i++)
	{
		await wait(delay);
		e[low+i].style.background="pink";
		a[i] = e[low+i].style.height;
	
		
	}
	for (let i = 0; i < n2; i++)
	{    
		await wait(delay);
		e[mid+1+i].style.background="lightblue";
		b[i] = e[mid + 1 + i].style.height;
		
	}
	
	await wait(delay);
    
	/* Merge the temp arrays back */
	let i = 0; // Initial index of first subarray
	let j = 0; // Initial index of second subarray
	let k = low; // Initial index of merged subarray
	while (i < n1 && j < n2)
	 {   
		await wait(delay);
		if (parseInt(a[i]) <= parseInt(b[j])) {

			if((n1 + n2) == e.length){
                e[k].style.background = 'green';
            }
            else{
                e[k].style.background = 'lightgreen';
            }
			
			e[k].style.height = a[i];
		
			i++;
		}
		else {
			if((n1 + n2) == e.length){
                e[k].style.background = 'green';
            }
            else{
                e[k].style.background = 'lightgreen';
            }
			
			e[k].style.height = b[j];
		
			j++;
		}
		k++;
	}
	await wait(delay);
	/* Copy the remaining elements of L[], if there
	are any */
	while (i < n1) {


		await wait(delay);
		if((n1 + n2) == e.length){
			e[k].style.background = 'green';
		}
		else{
			e[k].style.background = 'lightgreen';
		}
	
		e[k].style.height = a[i];
		i++;
		k++;
	}
	await wait(delay);
	/* Copy the remaining elements of R[], if there
	are any */
	while (j < n2) {
		await wait(delay);

		if((n1 + n2) == e.length){
			e[k].style.background = 'green';
		}
		else{
			e[k].style.background = 'lightgreen';
		}
		e[k].style.height = b[j];
	
		j++;
		k++;
	}


}

/* l is for left index and r is right index of the
sub-array of arr to be sorted */
async function mergeSort(e, low, high)
{
	if (low<high) {
		
		 const mid = low + Math.floor((high - low) / 2);

		// Sort first and second halves
		await mergeSort(e, low, mid);
	  await mergeSort(e, mid + 1, high);
       //then merge
		await merge(e, low, mid, high);
	}
	return;
	
}


const mer=document.querySelector(".Mergesort");
     mer.addEventListener("click", async function(){
		const a=document.querySelector(".flex-container-tc");
		a.innerHTML=`
      
		<h3>Time complexity of Merge Sort</h3>
		 <ol style="font-size:23px">
		   <li><b>Best Case</b> : Ω(nlogn)</li>
		   <li><b>Average Case</b> : θ(nlogn)</li>
		   <li><b>Worst case</b>  : O(n^2)</li>
		  
		 </ol> `;
        let e=document.querySelectorAll(".bar");
         let low=0;
         let high=parseInt(e.length)-1;
        disable();
       await mergeSort(e,low,high);
        
      enable();
   
     });


















// //let delay = 30;
// async function merge(ele, low, mid, high){
//     console.log('In merge()');
//     console.log(`low=${low}, mid=${mid}, high=${high}`);
//     const n1 = mid - low + 1;
//     const n2 = high - mid;
//     console.log(`n1=${n1}, n2=${n2}`);
//     let left = new Array(n1);
//     let right = new Array(n2);
   
//     for(let i = 0; i < n1; i++){
//         await wait(delay);
//         console.log('In merge left loop');
//         console.log(ele[low + i].style.height + ' at ' + (low+i));
//         // color
//         ele[low + i].style.background = 'orange';
//         left[i] = ele[low + i].style.height;
//     }
//     for(let i = 0; i < n2; i++){
//         await wait(delay);
//         console.log('In merge right loop');
//         console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
//         // color
//         ele[mid + 1 + i].style.background = 'yellow';
//         right[i] = ele[mid + 1 + i].style.height;
//     }
//     await wait(delay);
//     let i = 0, j = 0, k = low;
//     while(i < n1 && j < n2){
//         await wait(delay);
//         console.log('In merge while loop');
//         console.log(parseInt(left[i]), parseInt(right[j]));
        
//         // To add color for which two r being compared for merging
        
//         if(parseInt(left[i]) <= parseInt(right[j])){
//             console.log('In merge while loop if');
//             // color
          
            
//                 ele[k].style.background = 'lightgreen';
            
            
//             ele[k].style.height = left[i];
//             i++;
//             k++;
//         }
//         else{
//             console.log('In merge while loop else');
//             // color
           
        
//                 ele[k].style.background = 'lightgreen';
            
//             ele[k].style.height = right[j];
//             j++;
//             k++;
//         }
//     }
//     while(i < n1){
//         await wait(delay);
//         console.log("In while if n1 is left");
//         // color
//         // if((n1 + n2) === ele.length){
//         //     ele[k].style.background = 'green';
//         // }
        
//             ele[k].style.background = 'lightgreen';
        
//         ele[k].style.height = left[i];
//         i++;
//         k++;
//     }
//     while(j < n2){
//         await wait(delay);
//         console.log("In while if n2 is left");
//         // color
       
     
//             ele[k].style.background = 'lightgreen';
        
//         ele[k].style.height = right[j];
//         j++;
//         k++;
//     }

// 	for(let s=0;s<ele.length;s++){
// 		if(n1+n2==ele.length){
// 			ele[s].style.background="green";
// 		}
// 	}
// }

// async function mergeSort(ele, l, r){
//     console.log('In mergeSort()');
//     if(l >= r){
//         console.log(`return cause just 1 elemment l=${l}, r=${r}`);
//         return;
//     }
//     const m = l + Math.floor((r - l) / 2);
//     console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
//     await mergeSort(ele, l, m);
//     await mergeSort(ele, m + 1, r);
//     await merge(ele, l, m, r);
// }

// const mergeSortbtn = document.querySelector(".Mergesort");
// mergeSortbtn.addEventListener('click', async function(){
//     let ele = document.querySelectorAll('.bar');
//     let l = 0;
//     let r = parseInt(ele.length) - 1;
   
//     await mergeSort(ele, l, r);
   
// });

