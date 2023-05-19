const addItems=document.querySelector(".add-items");
const itemTextbox=document.getElementById("item_name")
const itemList=document.querySelector(".plates");
const items=[];

function addItem(e){
    e.preventDefault();
    const newItem=itemTextbox.value
    items.push(newItem)
}

addItems.addEventListener("submit",addItem)
