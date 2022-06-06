// GENERATE BUTTON
const genBtn = document.getElementById('generate');
genBtn.addEventListener ('click',
    function() {
        
        // User Data
        const userName = document.getElementById('user-name').value;
        const userKm= parseInt(document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;
        
        // Price 
        const price = userKm * 0.21;
        let discount = 0;
        let rate = 'Tariffa Standard'

        // Discount
        if(userAge === 'minorenne'){
            discount = price * 20 / 100;
            rate = 'Tariffa Minorenne';
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
            rate = 'Tariffa Over';
        }

        // Final Price
        const finalPrice = parseInt(price - discount);

        // PRINT
        const ticketName = document.getElementById('name');
        const ticketRate = document.getElementById('rate');
        const ticketPrice = document.getElementById('price');
        const ticketCarriage = document.getElementById('carriage');
        const ticketCp = document.getElementById('cp-code');
        
        ticketName.innerHTML = userName;
        ticketRate.innerHTML = rate;
        ticketPrice.innerHTML = finalPrice.toFixed(2) + ' Euro';
        ticketCarriage.innerHTML = Math.floor(Math.random() * 10);
        ticketCp.innerHTML = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

        // Active Div
        let ticketDiv = document.querySelector('.ticket');
        ticketDiv.classList.add('active')

    }

)

// RETURN BUTTON
const deleteBtn = document.getElementById('return');
deleteBtn.addEventListener ('click', 
    function () {
        
        // Delete Value
        const userName = document.getElementById('user-name').value = '';
        const userKm = document.getElementById('user-km').value = '';
        const userAge = document.getElementById('user-age').value = 'maggiorenne';

        // Remove div
        let ticketDiv = document.querySelector('.ticket');
        ticketDiv.classList.remove('active')

        
    }
)