let hasPressedStop = new Boolean(false);


async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            if (hasPressedStop == true) {
                // setTimeout(bubble, 30000);
                return;

            }
            ele[j].style.background = 'red';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'yellow';
    }
    ele[0].style.background = 'yellow';
}


// dynamic content
function descript() {
    const titleCon = document.createElement("h1");
    const content = document.createTextNode("DESCRIPTION");
    titleCon.appendChild(content);
    document.querySelector(".para").appendChild(titleCon);

    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    const description3 = document.createElement("p");

    const node1 = document.createTextNode(`Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water.
The bubbles represents the elements of the data structure.`);

    const node2 = document.createTextNode(`The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one,
swapping them if they are in the wrong order.`);

    const node3 = document.createTextNode(`It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as <a href="/selectionsort">Selection Sort</a> or <a href="/insertionsort">Insertion Sort</a> perform better.<br>
It has several variants to improve its performances, such as <a href="/shakersort">Shaker Sort</a>, <a href="/oddevensort">Odd Even Sort</a> and <a href="/combsort">Comb Sort</a>.`)

    description1.appendChild(node1);
    description2.appendChild(node2);
    description3.appendChild(node3);

    document.querySelector(".sort-description").appendChild(description1);
    document.querySelector(".sort-description").appendChild(description2);
    document.querySelector(".sort-description").appendChild(description3);
}





// calling ....
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    // descript();
    await bubble();
    if (hasPressedStop == true) {
        disableSpeedSlider();
    }
    else {
        enableSortingBtn();
        enableSizeSlider();
    }
    
    enableNewArrayBtn();
    disableStopSortingBtn();
});


// play and pause btn
// let pausebtn = document.querySelector(".stopbtn");
// pausebtn.addEventListener("click", function () {
//     stats = 1;
// })
