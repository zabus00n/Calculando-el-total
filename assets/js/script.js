let qtyInput = document.querySelector('#input-qty');
let colorInput = document.querySelector('#input-color');

let totalAmount = document.querySelector('.amount');
let totalQty = document.querySelector('.qty');
let productColor = document.querySelector('.circle')

const price = 400000;

let btn = document.querySelector('.cta-btn');

btn.addEventListener('click', function(){
    let qty = qtyInput.value;
    let color = colorInput.value;

    totalAmount.textContent = new Intl.NumberFormat ('es-CL', {currency: 'CLP', style: 'currency'}).format(qty * price);
    totalQty.textContent = qty;
    productColor.style.backgroundColor = color;
});