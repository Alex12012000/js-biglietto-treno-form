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
        const rate = 'Tariffa Standard'

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
        
        ticketName.innerHTML = userName;
        ticketRate.innerHTML = rate;
        ticketPrice.innerHTML = finalPrice.toFixed(2) + ' Euro';
    }

)

