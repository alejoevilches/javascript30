const addItems=document.querySelector(".add-items");
const itemList=document.querySelector(".plates");
const items=JSON.parse(localStorage.getItem("items")) || [];

function addItem(e){
    e.preventDefault();
    const name=(addItems.querySelector("[name=item]")).value;
    items.push({
        name,
        done:false
    })
    fillList(items,itemList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

function fillList(plates=[], platesList){
    platesList.innerHTML=plates.map((plate, i)=>{
        return `
        <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done==true ? "checked" :  ""}">
        <label for="item${i}">${plate.name}</label>
        </li>
        `
    }).join("")
}


fillList(items,itemList);


addItems.addEventListener("submit",addItem)
