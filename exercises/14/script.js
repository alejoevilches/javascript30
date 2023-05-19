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
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done==true ? "checked" :  ""}>
        <label for="item${i}">${plate.name}</label>
        </li>
        `
    }).join("")
}

function plateDone(e){
    if (!e.target.matches("input")){
        return
    }
    const el=e.target;
    const index=el.dataset.index;
    console.log(index);
    items[index].done = !items[index].done;
    fillList(items,itemList);
    localStorage.setItem("items", JSON.stringify(items));
}

fillList(items,itemList);


itemList.addEventListener("change", plateDone)
addItems.addEventListener("submit",addItem)
