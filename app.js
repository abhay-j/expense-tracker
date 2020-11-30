
const date_input = document.getElementById('date');
const inputType = document.querySelector('.list-exp select');
const description = document.getElementById('Description');
const amount = document.getElementById('Value');
const list = document.querySelector('.right-container ul');
const button = document.querySelector('.right-container button');
const submit_salery = document.getElementById('submit-salery');
const income = document.getElementById('income')
let current_balance = 0;
let totalmoneySpentOnExpenses = 0;
let totalMoneySaved = 0;
let totalMoneyInvested = 0 ;

submit_salery.addEventListener('click' , (e)=>{
    e.preventDefault();
    if(income.value===''){
        window.alert('enter your salery');
    }
    else{
        
        document.querySelector('.left-container h2').textContent = income.value;
        document.querySelector('.current-balance').textContent = income.value;
        current_balance = income.value;
    }
})







button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(description.value ==='' || amount.value ==='' || income.value === ''){
        window.alert('invalid entry');
    }
    else{
                
       
          

        const li = document.createElement('li');
        let date = document.createElement('span');
        const expense = document.createElement('span');
        const rupee_symbol = document.createElement('span');
        const moneySpent = document.createElement('span');
        
        // adding text content
        date.textContent = date_input.value;
        
        expense.textContent = description.value;
        rupee_symbol.innerHTML= '&#8377;'        
        moneySpent.textContent =amount.value;
        // adding css
        date.classList.add('date');
        expense.classList.add('expenditure')
        moneySpent.classList.add('amount');

        // appending date and amount to the li element 
        moneySpent.appendChild(rupee_symbol);
        li.appendChild(date);
        li.appendChild(expense);
        li.appendChild(moneySpent);
        list.appendChild(li);
        
        // calculating money_spent
         if(inputType.value === 'Expense'){

            totalmoneySpentOnExpenses = totalmoneySpentOnExpenses + Number(amount.value)
            document.querySelector('.exp').textContent = totalmoneySpentOnExpenses;
             console.log(totalmoneySpentOnExpenses , inputType.value);        
         }

         else if(inputType.value === 'Saving'){
            totalMoneySaved = totalMoneySaved + Number(amount.value);
            document.querySelector('.saved').textContent = totalMoneySaved;
            console.log(totalMoneySaved , inputType.value);
         }

         else{
            totalMoneyInvested = totalMoneyInvested + Number(amount.value);
            document.querySelector('.invested').textContent = totalMoneyInvested;
            console.log(totalMoneyInvested , inputType.value);
         }
        //updating current_salery
        current_balance = Number(current_balance) - Number(amount.value);
        document.querySelector('.current-balance').textContent = current_balance;                
    }
});        



