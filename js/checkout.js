// Дополнительные функции для страницы оформления заказа
function validateCheckoutForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const privacyPolicy = document.getElementById('privacy-policy').checked;
    const terms = document.getElementById('terms').checked;

    // Сброс ошибок
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    let isValid = true;

    if (!name) {
        document.getElementById('name-error').textContent = 'Введите ФИО';
        isValid = false;
    }

    if (!phone) {
        document.getElementById('phone-error').textContent = 'Введите телефон';
        isValid = false;
    } else if (!RetroShop.utils.validatePhone(phone)) {
        document.getElementById('phone-error').textContent = 'Введите корректный телефон';
        isValid = false;
    }

    if (!email) {
        document.getElementById('email-error').textContent = 'Введите email';
        isValid = false;
    } else if (!RetroShop.utils.validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Введите корректный email';
        isValid = false;
    }

    if (!address) {
        document.getElementById('address-error').textContent = 'Введите адрес доставки';
        isValid = false;
    }

    if (!privacyPolicy) {
        alert('Необходимо согласие с политикой конфиденциальности');
        isValid = false;
    }

    if (!terms) {
        alert('Необходимо принять условия пользовательского соглашения');
        isValid = false;
    }

    return isValid;
}

// Маска для телефона
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.startsWith('7') || value.startsWith('8')) {
                value = value.substring(1);
            }
            
            let formattedValue = '+7 (';
            if (value.length > 0) formattedValue += value.substring(0, 3);
            if (value.length > 3) formattedValue += ') ' + value.substring(3, 6);
            if (value.length > 6) formattedValue += '-' + value.substring(6, 8);
            if (value.length > 8) formattedValue += '-' + value.substring(8, 10);
            
            e.target.value = formattedValue;
        });
    }
});