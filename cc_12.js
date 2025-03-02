//Task 1  Business Dashboard – DOM Element Selection and Creation

const elementID=document.getElementById('dashboard');//select dashboard
const dashboardQuery=document.querySelector('.dashboard');//select dashboard
const revenueCard=document.createElement('div');//represent metric card
revenueCard.setAttribute("class","metric-card");//assign class
revenueCard.setAttribute("id","revenueCard");//assign id
revenueCard.innerHTML=`
<h3>Revenue</h3>
<p>$0</p>
`;//populate card with placeholder $0
dashboard.appendChild(revenueCard);//apend metric card


//Task 2  Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards=document.querySelectorAll('.metric-card');
const metricCardsArray=[...metricCards];
metricCardsArray.forEach(card=>{
    card.innerText += ' -Updated';
});


//Task 3 Dynamic Inventory Management- Adding and removing Items

function addInventoryItem(inventoryName){
    const inventoryList=document.getElementById('inventoryList');
    const newInventoryItem=document.createElement('li');
    newInventoryItem.setAttribute('class','inventory-item');
    newInventoryItem.innerText=inventoryName;
    newInventoryItem.addEventListener('click',()=>{
        removeInventoryItem(newInventoryItem);
    });
    inventoryList.appendChild(newInventoryItem);
};
function removeInventoryItem(item){
    const inventoryList=document.getElementById("inventoryList");
    inventoryList.removeChild(item);
};
document.getElementById('addItemButton').addEventListener("click",()=>{
    addInventoryItem("New Item")
});
addInventoryItem('Laptop');
addInventoryItem('Smartphone');