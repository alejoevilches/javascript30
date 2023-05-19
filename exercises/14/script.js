const addItems=document.querySelector(".add-items");
const itemList=document.querySelector(".plates");
const items=[];

function addItem(e){
    e.preventDefault();
    const name=(addItems.querySelector("[name=item]")).value;
    items.push({
        name,
        done:false
    })
    fillList(items,itemList);
    this.reset();
}

function fillList(plates=[], platesList){
    platesList.innerHTML=plates.map(plate=>{
        return `
        <li>
        <label for="">${plate.name}</label>
        </li>
        `
    }).join("")
}





addItems.addEventListener("submit",addItem)
