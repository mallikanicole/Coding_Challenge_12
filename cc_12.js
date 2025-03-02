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

const metricCards=document.querySelectorAll('.metric-card');//select elements
const metricCardsArray=[...metricCards];//convert nodes to array
metricCardsArray.forEach(card=>{
    card.innerText += ' -Updated';
});//add -updated to inner text


//Task 3 Dynamic Inventory Management- Adding and removing Items

function addInventoryItem(inventoryName){
    const inventoryList=document.getElementById('inventoryList');
    const newInventoryItem=document.createElement('li');//represent product with li
    newInventoryItem.setAttribute('class','inventory-item');
    newInventoryItem.innerText=inventoryName;
    newInventoryItem.addEventListener('click',()=>{
        removeInventoryItem(newInventoryItem);
    });//
    inventoryList.appendChild(newInventoryItem);//append product item
};
function removeInventoryItem(item){
    const inventoryList=document.getElementById("inventoryList");
    inventoryList.removeChild(item);
}
    addInventoryItem("New Item")

addInventoryItem('Laptop');
addInventoryItem('Smartphone');


//Task 4 Business Customer Section- Handling Event Bubbling

const customerSection=document.getElementById('customerSection');
customerSection.addEventListener('click',()=>{
    console.log('Customer Section Clicked');
});
const customerCards=document.querySelectorAll('.customer-card');
customerCards.forEach((card)=>{
    card.addEventListener('click',function(event){
        console.log('Customer Card Selected')
        event.stopPropagation();
    });
});