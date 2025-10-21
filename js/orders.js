function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersList = document.getElementById('orders-list');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p>У вас пока нет заказов</p>';
        return;
    }
    
    ordersList.innerHTML = '';
    orders.reverse().forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        
        let itemsHtml = '';
        let orderTotal = 0;
        
        order.items.forEach(item => {
            const product = products[item.id];
            const itemTotal = product.price * item.quantity;
            orderTotal += itemTotal;
            itemsHtml += `<p>${product.name} - ${item.quantity} × ${product.price} ₽</p>`;
        });
        
        orderCard.innerHTML = `
            <h3>Заказ #${order.id}</h3>
            <p><strong>Дата:</strong> ${order.date}</p>
            <p><strong>Статус:</strong> <span class="status-${getStatusClass(order.status)}">${order.status}</span></p>
            <div class="order-items">
                <h4>Товары:</h4>
                ${itemsHtml}
            </div>
            <p><strong>Итого:</strong> ${orderTotal} ₽</p>
            <p><strong>Адрес доставки:</strong> ${order.customer.address}</p>
            <p><strong>Способ оплаты:</strong> ${order.customer.payment === 'card' ? 'Банковская карта' : 'Наложенный платеж'}</p>
        `;
        
        ordersList.appendChild(orderCard);
    });
}

function getStatusClass(status) {
    const statusMap = {
        'Обрабатывается': 'processing',
        'Отправлен': 'shipped',
        'Доставлен': 'delivered'
    };
    return statusMap[status] || 'processing';
}

// Загружаем заказы при загрузке страницы
document.addEventListener('DOMContentLoaded', loadOrders);