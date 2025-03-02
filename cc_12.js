//Task 1  Business Dashboard – DOM Element Selection and Creation

const elementID=document.getElementById('dashboard');
const dashboardQuery=document.querySelector('.dashboard');
const revenueCard=document.createElement('div');
revenueCard.setAttribute("class","metric-card");
revenueCard.setAttribute("id","revenue-card");
revenueCard.innerHTML=`
<h3>Revenue</h3>
<p>$0</p>
`
dashboardId.appendChild(revenueCard);