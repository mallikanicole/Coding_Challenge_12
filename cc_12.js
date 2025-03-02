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

