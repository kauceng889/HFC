let cart = [];

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemPrice = document.getElementById('item-price').value;

    const item = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        price: parseFloat(itemPrice),
        total: parseInt(itemQuantity) * parseFloat(itemPrice)
    };

    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let totalAmount = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>Rp ${item.price.toFixed(2)}</td>
            <td>Rp ${item.total.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Hapus</button></td>
        `;

        cartItems.appendChild(row);
        totalAmount += item.total;
    });

    document.getElementById('total-amount').innerText = `Rp ${totalAmount.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Pembayaran berhasil!');
    cart = [];
    updateCart();
}
