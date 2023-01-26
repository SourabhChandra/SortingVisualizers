let hasPressedStop = new Boolean(false);

async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'yellow';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        if(hasPressedStop==true){
            return;
        }

        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';

        await waitforme(delay);
        if(hasPressedStop==true){
            return;
        }

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            if(hasPressedStop==true){
                return;
            }
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);
            if(hasPressedStop==true){
                return;
            }

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'yellow';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'yellow';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    
    enableNewArrayBtn();
    disableStopSortingBtn();
});


