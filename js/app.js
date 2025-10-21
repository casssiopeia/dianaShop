// Основной модуль приложения
const RetroShop = {
    // Конфигурация приложения
    config: {
        currency: '₽',
        taxRate: 0.2,
        minOrderAmount: 1000,
        freeShippingAmount: 5000,
        shippingCost: 300
    },

    // Данные товаров
    products: {
        1: {
            id: 1,
            name: "Винтажное платье 70-х",
            price: 4500,
            originalPrice: 6000,
            image: "images/product1.jpg",
            category: "одежда",
            era: "1970-е",
            tags: ["хлопок", "ретро", "платье"],
            description: "Элегантное винтажное платье в стиле 1970-х годов",
            features: [
                "Натуральный 100% хлопок",
                "Ручная вышивка",
                "Оригинальные пуговицы",
                "Отличное состояние"
            ],
            details: [
                { label: "Материал", value: "100% хлопок" },
                { label: "Состав ткани", value: "Натуральный хлопок, подкладка - вискоза" },
                { label: "Вес", value: "450 г" },
                { label: "Страна производства", value: "СССР" },
                { label: "Год изготовления", value: "1975" },
                { label: "Состояние", value: "Отличное, минимальные следы носки" },
                { label: "Уход", value: "Ручная стирка при 30°C, не отбеливать" },
                { label: "Размер", value: "48-50 (современный)" },
                { label: "Длина", value: "110 см" },
                { label: "Особенности", value: "Ручная вышивка, оригинальные пуговицы" }
            ],
            legalInfo: {
                country: "СССР",
                manufacturer: "Московская швейная фабрика",
                condition: "Бывшее в употреблении, отличное состояние",
                certification: "Не подлежит обязательной сертификации",
                warranty: "14 дней",
                serviceLife: "Не ограничен",
                shelfLife: "Не ограничен",
                energyClass: "Не применяется",
                confiscated: "Нет"
            },
            stock: 3,
            isFeatured: true
        },
        2: {
            id: 2,
            name: "Ретро радиоприемник",
            price: 12000,
            originalPrice: 15000,
            image: "images/product2.jpg",
            category: "техника",
            era: "1960-е",
            tags: ["дерево", "радио", "ретро"],
            description: "Деревянный радиоприемник в идеальном рабочем состоянии",
            features: [
                "Натуральное дерево орех",
                "Полностью рабочий",
                "Оригинальная электроника",
                "Ретро дизайн"
            ],
            details: [
                { label: "Материал корпуса", value: "Натуральное дерево (орех)" },
                { label: "Вес", value: "3.2 кг" },
                { label: "Габариты", value: "40×25×18 см" },
                { label: "Страна производства", value: "Германия" },
                { label: "Год изготовления", value: "1968" },
                { label: "Состояние", value: "Рабочее, требуется чистка контактов" },
                { label: "Питание", value: "220В / 50Гц" },
                { label: "Диапазоны", value: "ДВ, СВ, КВ" },
                { label: "Мощность", value: "15 Вт" },
                { label: "Комплектация", value: "Приемник, инструкция, шнур питания" },
                { label: "Условия хранения", value: "Сухое помещение, защита от прямых солнечных лучей" }
            ],
            legalInfo: {
                country: "Германия",
                manufacturer: "Grundig",
                condition: "Бывшее в употреблении, рабочее",
                certification: "Не подлежит обязательной сертификации",
                warranty: "14 дней",
                serviceLife: "Не ограничен",
                shelfLife: "Не ограничен",
                energyClass: "Не применяется",
                confiscated: "Нет"
            },
            stock: 1,
            isFeatured: true
        },
        3: {
            id: 3,
            name: "Ретро часы",
            price: 8700,
            originalPrice: 11000,
            image: "images/product3.jpg",
            category: "декор",
            era: "1950-е",
            tags: ["латунь", "часы", "механические"],
            description: "Механические настенные часы с боем",
            features: [
                "Латунный корпус",
                "Механический механизм",
                "Каждый час бой",
                "Гиревой привод"
            ],
            details: [
                { label: "Материал корпуса", value: "Латунь, стекло" },
                { label: "Вес", value: "2.1 кг" },
                { label: "Диаметр циферблата", value: "35 см" },
                { label: "Страна производства", value: "Франция" },
                { label: "Год изготовления", value: "1955" },
                { label: "Состояние", value: "Требует обслуживания механизма" },
                { label: "Механизм", value: "Механический с гиревым приводом" },
                { label: "Тип боя", value: "Кукушка, каждый час" },
                { label: "Завод", value: "1 раз в 7 дней" },
                { label: "Комплектация", value: "Часы, гири, маятник" },
                { label: "Срок службы", value: "Не ограничен при правильном уходе" },
                { label: "Условия хранения", value: "Стабильная температура, защита от влаги" }
            ],
            legalInfo: {
                country: "Франция",
                manufacturer: "L'Époque Horlogerie",
                condition: "Бывшее в употреблении, требует обслуживания",
                certification: "Не подлежит обязательной сертификации",
                warranty: "14 дней",
                serviceLife: "Не ограничен",
                shelfLife: "Не ограничен",
                energyClass: "Не применяется",
                confiscated: "Нет"
            },
            stock: 2,
            isFeatured: false
        },
        4: {
            id: 4,
            name: "Зенит ЕТ",
            price: 6300,
            originalPrice: 8000,
            image: "images/product4.jpg",
            category: "техника",
            era: "1980-е",
            tags: ["фотоаппарат", "пленочный", "советский"],
            description: "Советский плёночный фотоаппарат-легенда",
            features: [
                "Металлический корпус",
                "Объектив Гелиос-44М",
                "Полная комплектация",
                "Рабочее состояние"
            ],
            details: [
                { label: "Материал", value: "Металлический корпус, кожзам" },
                { label: "Вес", value: "880 г" },
                { label: "Габариты", value: "138×93×96 мм" },
                { label: "Страна производства", value: "СССР" },
                { label: "Год изготовления", value: "1982" },
                { label: "Состояние", value: "Полная комплектация, рабочее" },
                { label: "Тип пленки", value: "35мм" },
                { label: "Объектив", value: "Гелиос-44М 58mm f/2" },
                { label: "Выдержка", value: "1/30 - 1/500 + B" },
                { label: "Диафрагма", value: "f/2 - f/16" },
                { label: "Комплектация", value: "Фотоаппарат, объектив, крышки, ремень" },
                { label: "Срок хранения", value: "Не ограничен" },
                { label: "Условия хранения", value: "Сухое место, защита от пыли" }
            ],
            legalInfo: {
                country: "СССР",
                manufacturer: "Красногорский механический завод",
                condition: "Бывшее в употреблении, рабочее",
                certification: "Не подлежит обязательной сертификации",
                warranty: "14 дней",
                serviceLife: "Не ограничен",
                shelfLife: "Не ограничен",
                energyClass: "Не применяется",
                confiscated: "Нет"
            },
            stock: 4,
            isFeatured: true
        },
        5: {
            id: 5,
            name: "Винтажный патефон",
            price: 18500,
            originalPrice: 22000,
            image: "images/product5.jpg",
            category: "техника",
            era: "1970-е",
            tags: ["винил", "патефон", "аудио", "ретро"],
            description: "Классический патефон с теплым аналоговым звуком",
            features: [
                "Деревянный корпус ручной работы",
                "Аналоговый звук высшего качества",
                "Ручной привод",
                "Идеальное состояние"
            ],
            details: [
                { label: "Материал корпуса", value: "Массив дерева (орех)" },
                { label: "Вес", value: "6.2 кг" },
                { label: "Габариты", value: "38×32×18 см" },
                { label: "Страна производства", value: "Чехословакия" },
                { label: "Год изготовления", value: "1976" },
                { label: "Состояние", value: "Идеальное, полностью рабочий" },
                { label: "Тип привода", value: "Ручной, механический" },
                { label: "Скорость вращения", value: "78 об/мин" },
                { label: "Игла", value: "Сапфировая, оригинальная" },
                { label: "Комплектация", value: "Патефон, 3 иглы, инструкция" }
            ],
            legalInfo: {
                country: "Чехословакия",
                manufacturer: "Tesla",
                condition: "Бывшее в употреблении, рабочее",
                certification: "Не подлежит обязательной сертификации",
                warranty: "14 дней",
                serviceLife: "Не ограничен",
                shelfLife: "Не ограничен",
                energyClass: "Не применяется",
                confiscated: "Нет"
            },
            stock: 1,
            isFeatured: true
        },
        6: {
            id: 6,
            name: "Печатная машинка",
            price: 9500,
            originalPrice: 12000,
            image: "images/product6.jpg",
            category: "канцелярия",
            era: "1960-е",
            tags: ["печатная машинка", "советская", "ретро", "канцелярия"],
            description: "Классическая печатная машинка в рабочем состоянии",
            features: [
                "Металлический корпус",
                "Кириллическая раскладка",
                "Механическая клавиатура",
                "Рабочее состояние"
            ],
            details: [
                { label: "Материал", value: "Металл, пластик" },
                { label: "Вес", value: "10.5 кг" },
                { label: "Габариты", value: "32×34×24 см" },
                { label: "Страна производства", value: "СССР" },
                { label: "Год изготовления", value: "1967" },
                { label: "Состояние", value: "Рабочее, требует чистки" },
                { label: "Раскладка", value: "Русская (кириллица)" },
                { label: "Количество клавиш", value: "44" },
                { label: "Цвет ленты", value: "Черная" },
                { label: "Комплектация", value: "Машинка, чехол" }
            ],
            legalInfo: {
                country: "СССР",
                manufacturer: "Ульяновский завод",
                condition: "Бывшее в употреблении, рабочее",
                certification: "Не подлежит обязательной сертификации",
                warranty: "14 дней",
                serviceLife: "Не ограничен",
                shelfLife: "Не ограничен",
                energyClass: "Не применяется",
                confiscated: "Нет"
            },
            stock: 2,
            isFeatured: false
        }
    },

    // Состояние модального окна
    modal: {
        isOpen: false,
        currentProductId: null,

        // Открытие модального окна
        open(productId) {
            const product = RetroShop.products[productId];
            if (!product) {
                console.error('Product not found:', productId);
                return;
            }
            
            const modal = document.getElementById('productModal');
            const modalBody = document.getElementById('modalBody');
            
            if (!modal || !modalBody) {
                console.error('Modal elements not found');
                return;
            }

            this.currentProductId = productId;

            let detailsHtml = '';
            product.details.forEach(detail => {
                detailsHtml += `
                    <div class="detail-item">
                        <span class="detail-label">${detail.label}</span>
                        <span class="detail-value">${detail.value}</span>
                    </div>
                `;
            });
            
            let featuresHtml = '';
            if (product.features && product.features.length > 0) {
                const featuresList = product.features.map(feature => `<li>${feature}</li>`).join('');
                featuresHtml = `
                    <div class="modal-features">
                        <h4>Особенности:</h4>
                        <ul>${featuresList}</ul>
                    </div>
                `;
            }

            // Юридическая информация для модального окна
            const legalDetails = [
                { label: "Страна происхождения", value: product.legalInfo.country },
                { label: "Изготовитель", value: product.legalInfo.manufacturer },
                { label: "Состояние товара", value: product.legalInfo.condition },
                { label: "Сертификация", value: product.legalInfo.certification },
                { label: "Гарантийный срок", value: product.legalInfo.warranty },
                { label: "Срок службы", value: product.legalInfo.serviceLife },
                { label: "Срок годности", value: product.legalInfo.shelfLife },
                { label: "Класс энергоэффективности", value: product.legalInfo.energyClass },
                { label: "Конфискованный товар", value: product.legalInfo.confiscated }
            ];

            let legalHtml = '';
            legalDetails.forEach(detail => {
                legalHtml += `
                    <div class="detail-item">
                        <span class="detail-label">${detail.label}</span>
                        <span class="detail-value">${detail.value}</span>
                    </div>
                `;
            });

            const addToCartButton = product.stock > 0 
                ? `<button class="add-to-cart-btn modal-add-btn" onclick="RetroShop.cart.addItem(${productId}); RetroShop.modal.close();">
                        <span>Добавить в корзину</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 17C16.5 17 16 17.4 16 18C16 18.6 16.5 19 17 19C17.5 19 18 18.6 18 18C18 17.4 17.5 17 17 17ZM9 18C9 18.6 8.5 19 8 19C7.5 19 7 18.6 7 18C7 17.4 7.5 17 8 17C8.5 17 9 17.4 9 18Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                   </button>`
                : '<button class="add-to-cart-btn modal-add-btn" disabled>Нет в наличии</button>';

            const originalPriceHtml = product.originalPrice 
                ? `<span class="original-price">${RetroShop.utils.formatPrice(product.originalPrice)}</span>`
                : '';

            modalBody.innerHTML = `
                <div class="modal-product">
                    <div class="modal-image-section">
                        <img src="${product.image}" alt="${product.name}" class="modal-image" 
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmQyZDJkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='">
                        ${addToCartButton}
                    </div>
                    <div class="modal-info-section">
                        <h2 class="modal-product-title">${product.name}</h2>
                        <div class="modal-product-price">
                            <span class="current-price">${RetroShop.utils.formatPrice(product.price)}</span>
                            ${originalPriceHtml}
                        </div>
                        <div class="modal-product-meta">
                            <span class="product-era">${product.era}</span>
                            <span class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                                ${product.stock > 0 ? 'В наличии: ' + product.stock + ' шт' : 'Нет в наличии'}
                            </span>
                        </div>
                        <p class="modal-product-description">${product.description}</p>
                        ${featuresHtml}
                        <div class="modal-details">
                            <h4>Характеристики:</h4>
                            <div class="details-grid">${detailsHtml}</div>
                        </div>
                        <div class="modal-legal">
                            <h4>Юридическая информация:</h4>
                            <div class="details-grid">${legalHtml}</div>
                        </div>
                    </div>
                </div>
            `;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modal.classList.add('modal-open');
                this.isOpen = true;
            }, 10);
        },

        // Закрытие модального окна
        close() {
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.classList.remove('modal-open');
                this.isOpen = false;
                this.currentProductId = null;
                
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        },

        // Инициализация обработчиков модального окна
        initHandlers() {
            const modal = document.getElementById('productModal');
            
            if (!modal) {
                console.error('Modal not found');
                return;
            }
            
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }
            
            modal.addEventListener('click', (event) => {
                if (event.target === modal && this.isOpen) {
                    this.close();
                }
            });
            
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });
            
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
        }
    },

    // Корзина
    cart: {
        items: [],
        total: 0,
        itemCount: 0,

        init() {
            this.loadFromStorage();
            this.updateUI();
            this.initCartEventListeners();
        },

        loadFromStorage() {
            try {
                const savedCart = localStorage.getItem('retroShopCart');
                if (savedCart) {
                    const cartData = JSON.parse(savedCart);
                    this.items = cartData.items || [];
                    this.calculateTotals();
                }
            } catch (error) {
                console.error('Ошибка загрузки корзины:', error);
                this.items = [];
                this.calculateTotals();
            }
        },

        saveToStorage() {
            try {
                const cartData = {
                    items: this.items,
                    total: this.total,
                    itemCount: this.itemCount
                };
                localStorage.setItem('retroShopCart', JSON.stringify(cartData));
            } catch (error) {
                console.error('Ошибка сохранения корзины:', error);
            }
        },

        addItem(productId, quantity = 1) {
            const product = RetroShop.products[productId];
            if (!product) {
                this.showNotification('Товар не найден', 'error');
                return false;
            }

            if (product.stock === 0) {
                this.showNotification('Товар отсутствует на складе', 'error');
                return false;
            }

            const existingItem = this.items.find(item => item.id === productId);
            
            if (existingItem) {
                const newQuantity = existingItem.quantity + quantity;
                if (newQuantity > product.stock) {
                    this.showNotification(`Максимальное количество: ${product.stock} шт.`, 'error');
                    return false;
                }
                existingItem.quantity = newQuantity;
            } else {
                if (quantity > product.stock) {
                    this.showNotification(`Максимальное количество: ${product.stock} шт.`, 'error');
                    return false;
                }
                this.items.push({
                    id: productId,
                    quantity: quantity,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    stock: product.stock
                });
            }

            this.calculateTotals();
            this.saveToStorage();
            this.updateUI();
            this.showNotification('Товар добавлен в корзину!', 'success');
            return true;
        },

        removeItem(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.calculateTotals();
            this.saveToStorage();
            this.updateUI();
            this.showNotification('Товар удален из корзины', 'info');
        },

        updateQuantity(productId, newQuantity) {
            if (newQuantity < 1) {
                this.removeItem(productId);
                return;
            }

            const item = this.items.find(item => item.id === productId);
            if (!item) return;

            const product = RetroShop.products[productId];
            if (newQuantity > product.stock) {
                this.showNotification(`Максимальное количество: ${product.stock} шт.`, 'error');
                return;
            }

            item.quantity = newQuantity;
            this.calculateTotals();
            this.saveToStorage();
            this.updateUI();
        },

        clear() {
            this.items = [];
            this.calculateTotals();
            this.saveToStorage();
            this.updateUI();
            this.showNotification('Корзина очищена', 'info');
        },

        calculateTotals() {
            this.itemCount = this.items.reduce((total, item) => total + item.quantity, 0);
            this.total = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        updateUI() {
            this.updateCartCount();
            this.updateCartPage();
            this.updateCheckoutSummary();
        },

        updateCartCount() {
            const cartCountElements = document.querySelectorAll('#cart-count, .cart-count');
            cartCountElements.forEach(element => {
                element.textContent = this.itemCount;
                element.style.display = this.itemCount > 0 ? 'inline' : 'none';
            });
        },

        updateCartPage() {
            const cartItems = document.getElementById('cart-items');
            if (!cartItems) return;

            if (this.items.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <h3>Корзина пуста</h3>
                        <p>Добавьте товары из каталога</p>
                        <a href="products.html" class="btn">Перейти к товарам</a>
                    </div>
                `;
                return;
            }

            let cartHTML = '';
            this.items.forEach(item => {
                const itemTotal = item.price * item.quantity;
                cartHTML += `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100/2d2d2d/ffffff?text=Товар'">
                        </div>
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p class="cart-item-price">${RetroShop.utils.formatPrice(item.price)}</p>
                        </div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="RetroShop.cart.updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="quantity-btn" onclick="RetroShop.cart.updateQuantity(${item.id}, ${item.quantity + 1})" ${item.quantity >= item.stock ? 'disabled' : ''}>+</button>
                            </div>
                            <button class="remove-btn" onclick="RetroShop.cart.removeItem(${item.id})" title="Удалить">×</button>
                        </div>
                        <div class="cart-item-total">
                            <strong>${RetroShop.utils.formatPrice(itemTotal)}</strong>
                        </div>
                    </div>
                `;
            });

            cartItems.innerHTML = cartHTML;
        },

        // Инициализация обработчиков событий для корзины
        initCartEventListeners() {
            // Делегирование событий для кнопок "Добавить в корзину"
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
                    const button = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
                    const productId = button.getAttribute('data-product');
                    
                    if (productId) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.addItem(parseInt(productId));
                    }
                }
            });

            // Делегирование событий для кнопок "Быстрый просмотр"
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn')) {
                    const button = e.target.classList.contains('quick-view-btn') ? e.target : e.target.closest('.quick-view-btn');
                    const productId = button.getAttribute('data-product');
                    
                    if (productId) {
                        e.preventDefault();
                        e.stopPropagation();
                        RetroShop.modal.open(parseInt(productId));
                    }
                }
            });
        },

        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <span>${message}</span>
                <button onclick="this.parentElement.remove()">×</button>
            `;

            this.addNotificationStyles();

            document.body.appendChild(notification);

            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 3000);
        },

        addNotificationStyles() {
            if (document.querySelector('.notification-styles')) return;

            const styles = document.createElement('style');
            styles.className = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    color: white;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    max-width: 400px;
                    animation: slideInRight 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    font-weight: 500;
                }
                .notification-success { 
                    background: linear-gradient(45deg, #27ae60, #2ecc71);
                    border-left: 4px solid #2ecc71;
                }
                .notification-error { 
                    background: linear-gradient(45deg, #e74c3c, #c0392b);
                    border-left: 4px solid #c0392b;
                }
                .notification-info { 
                    background: linear-gradient(45deg, #3498db, #2980b9);
                    border-left: 4px solid #2980b9;
                }
                .notification-warning { 
                    background: linear-gradient(45deg, #f39c12, #e67e22);
                    border-left: 4px solid #e67e22;
                }
                .notification button {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.2rem;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background-color 0.3s ease;
                }
                .notification button:hover {
                    background: rgba(255,255,255,0.2);
                }
                @keyframes slideInRight {
                    from { 
                        transform: translateX(100%); 
                        opacity: 0; 
                    }
                    to { 
                        transform: translateX(0); 
                        opacity: 1; 
                    }
                }
            `;
            document.head.appendChild(styles);
        },

        updateCheckoutSummary() {
            const summary = document.getElementById('order-summary');
            if (!summary) return;

            const shipping = this.total >= RetroShop.config.freeShippingAmount ? 0 : RetroShop.config.shippingCost;
            const tax = Math.round(this.total * RetroShop.config.taxRate);
            const finalTotal = this.total + shipping + tax;

            summary.innerHTML = `
                <div class="summary-card">
                    <h3>Сводка заказа</h3>
                    <div class="summary-line">
                        <span>Товары (${this.itemCount}):</span>
                        <span>${RetroShop.utils.formatPrice(this.total)}</span>
                    </div>
                    <div class="summary-line">
                        <span>Доставка:</span>
                        <span>${shipping === 0 ? 'Бесплатно' : RetroShop.utils.formatPrice(shipping)}</span>
                    </div>
                    <div class="summary-line">
                        <span>НДС:</span>
                        <span>${RetroShop.utils.formatPrice(tax)}</span>
                    </div>
                    ${this.total < RetroShop.config.freeShippingAmount ? `
                        <div class="free-shipping-message">
                            Добавьте товаров на ${RetroShop.utils.formatPrice(RetroShop.config.freeShippingAmount - this.total)} для бесплатной доставки!
                        </div>
                    ` : ''}
                    <div class="summary-total">
                        <span>Итого:</span>
                        <span>${RetroShop.utils.formatPrice(finalTotal)}</span>
                    </div>
                </div>
            `;
        }
    },

    // Система заказов
    orders: {
        orders: [],

        init() {
            this.loadFromStorage();
            this.updateUI();
        },

        loadFromStorage() {
            try {
                const savedOrders = localStorage.getItem('retroShopOrders');
                if (savedOrders) {
                    this.orders = JSON.parse(savedOrders);
                }
            } catch (error) {
                console.error('Ошибка загрузки заказов:', error);
                this.orders = [];
            }
        },

        saveToStorage() {
            try {
                localStorage.setItem('retroShopOrders', JSON.stringify(this.orders));
            } catch (error) {
                console.error('Ошибка сохранения заказов:', error);
            }
        },

        createOrder(customerInfo) {
            const order = {
                id: Date.now(),
                date: new Date().toLocaleDateString('ru-RU'),
                timestamp: Date.now(),
                status: 'processing',
                items: [...RetroShop.cart.items],
                total: RetroShop.cart.total,
                customer: customerInfo,
                trackingNumber: this.generateTrackingNumber(),
                estimatedDelivery: this.calculateDeliveryDate()
            };

            this.orders.unshift(order);
            this.saveToStorage();
            this.updateUI();
            return order;
        },

        generateTrackingNumber() {
            return 'RT' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
        },

        calculateDeliveryDate() {
            const date = new Date();
            date.setDate(date.getDate() + 7);
            return date.toLocaleDateString('ru-RU');
        },

        updateUI() {
            this.displayOrders();
        },

        displayOrders() {
            const ordersList = document.getElementById('orders-list');
            if (!ordersList) return;

            if (this.orders.length === 0) {
                ordersList.innerHTML = `
                    <div class="empty-orders">
                        <div class="empty-orders-icon">📦</div>
                        <h3>У вас пока нет заказов</h3>
                        <p>Сделайте свой первый заказ в нашем магазине</p>
                        <a href="products.html" class="btn">Перейти к товарам</a>
                    </div>
                `;
                return;
            }

            let html = '';
            this.orders.forEach(order => {
                const statusClass = RetroShop.getStatusClass(order.status);
                const itemsCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
                
                html += `
                    <div class="order-card">
                        <div class="order-header">
                            <div class="order-info">
                                <h3>Заказ #${order.id}</h3>
                                <span class="order-date">${order.date}</span>
                            </div>
                            <div class="order-status ${statusClass}">
                                ${RetroShop.getStatusText(order.status)}
                            </div>
                        </div>
                        <div class="order-details">
                            <div class="order-items">
                                ${order.items.map(item => `
                                    <div class="order-item">
                                        <div class="order-item-image">
                                            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60/2d2d2d/ffffff?text=Товар'">
                                        </div>
                                        <div class="order-item-info">
                                            <div class="order-item-name">${item.name}</div>
                                            <div class="order-item-meta">${item.quantity} × ${RetroShop.utils.formatPrice(item.price)}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="order-total">
                            Итого: ${RetroShop.utils.formatPrice(order.total)}
                        </div>
                        <div class="order-tracking">
                            <strong>Трек номер:</strong> ${order.trackingNumber}
                        </div>
                        <div class="order-expected">
                            <strong>Ожидаемая доставка:</strong> ${order.estimatedDelivery}
                        </div>
                    </div>
                `;
            });

            ordersList.innerHTML = html;
        }
    },

    // Утилиты
    utils: {
        formatPrice(price) {
            return price.toLocaleString('ru-RU') + ' ' + RetroShop.config.currency;
        },

        formatDate(dateString) {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('ru-RU', options);
        },

        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        validatePhone(phone) {
            const re = /^[\+]?[78][-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
            return re.test(phone.replace(/\s/g, ''));
        },

        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    },

    // Инициализация приложения
    init() {
        console.log('🚀 RetroShop initialized');
        
        // Инициализация модулей
        this.cart.init();
        this.orders.init();
        this.modal.initHandlers();

        // Инициализация страницы
        this.initPage();
    },

    // Инициализация конкретной страницы
    initPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';

        switch (page) {
            case 'products.html':
                this.initProductsPage();
                break;
            case 'cart.html':
                this.initCartPage();
                break;
            case 'orders.html':
                this.initOrdersPage();
                break;
            case 'checkout.html':
                this.initCheckoutPage();
                break;
            case 'info.html':
                this.initInfoPage();
                break;
            case 'complaint.html':
                this.initComplaintPage();
                break;
            default:
                this.initHomePage();
        }
    },

    // Инициализация главной страницы
    initHomePage() {
        this.displayFeaturedProducts();
    },

    // Инициализация страницы товаров
    initProductsPage() {
        this.displayAllProducts();
    },

    // Инициализация страницы корзины
    initCartPage() {
        // Уже обрабатывается в cart.init()
    },

    // Инициализация страницы заказов
    initOrdersPage() {
        // Уже обрабатывается в orders.init()
    },

    // Инициализация страницы оформления заказа
    initCheckoutPage() {
        this.initCheckoutForm();
    },

    // Инициализация страницы информации
    initInfoPage() {
        // Дополнительная инициализация если нужна
    },

    // Инициализация страницы обращений
    initComplaintPage() {
        // Инициализация формы обращений
        const complaintForm = document.getElementById('complaint-form');
        if (complaintForm) {
            complaintForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.processComplaint();
            });
        }
    },

    // Показ featured товаров на главной
    displayFeaturedProducts() {
        const featuredContainer = document.getElementById('featured-products');
        if (!featuredContainer) return;

        const featuredProducts = Object.values(this.products)
            .filter(product => product.isFeatured)
            .slice(0, 3); // Ограничиваем до 3 товаров
        
        if (featuredProducts.length === 0) {
            featuredContainer.innerHTML = '<p>Нет товаров для показа</p>';
            return;
        }

        let html = '';
        featuredProducts.forEach(product => {
            const badgeType = product.originalPrice ? '' : 'new';
            const badgeText = product.originalPrice ? 'Хит' : 'Новинка';
            
            html += `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/350x300/2d2d2d/ffffff?text=Изображение+товара'">
                        <div class="product-badge ${badgeType}">${badgeText}</div>
                        <div class="product-overlay">
                            <button class="quick-view-btn" data-product="${product.id}">Быстрый просмотр</button>
                        </div>
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <span class="current-price">${this.utils.formatPrice(product.price)}</span>
                            ${product.originalPrice ? 
                                `<span class="original-price">${this.utils.formatPrice(product.originalPrice)}</span>` : 
                                ''
                            }
                        </div>
                        <div class="product-meta">
                            <span class="product-era">${product.era}</span>
                            <span class="product-stock">${product.stock > 0 ? 'В наличии' : 'Нет в наличии'}</span>
                        </div>
                        <button class="add-to-cart-btn" data-product="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                            ${product.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
                        </button>
                    </div>
                </div>
            `;
        });

        featuredContainer.innerHTML = html;
    },

    // Показ всех товаров на странице товаров
    displayAllProducts() {
        const productsContainer = document.getElementById('products-grid');
        if (!productsContainer) return;

        const allProducts = Object.values(this.products);
        
        let html = '';
        allProducts.forEach(product => {
            const badgeType = product.originalPrice ? '' : 'new';
            const badgeText = product.originalPrice ? 'Хит' : 'Новинка';
            
            html += `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/350x300/2d2d2d/ffffff?text=Изображение+товара'">
                        <div class="product-badge ${badgeType}">${badgeText}</div>
                        <div class="product-overlay">
                            <button class="quick-view-btn" data-product="${product.id}">Быстрый просмотр</button>
                        </div>
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <span class="current-price">${this.utils.formatPrice(product.price)}</span>
                            ${product.originalPrice ? 
                                `<span class="original-price">${this.utils.formatPrice(product.originalPrice)}</span>` : 
                                ''
                            }
                        </div>
                        <div class="product-meta">
                            <span class="product-era">${product.era}</span>
                            <span class="product-stock">${product.stock > 0 ? 'В наличии' : 'Нет в наличии'}</span>
                        </div>
                        <button class="add-to-cart-btn" data-product="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                            ${product.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
                        </button>
                    </div>
                </div>
            `;
        });

        productsContainer.innerHTML = html;
    },

    // Инициализация формы оформления заказа
    initCheckoutForm() {
        const form = document.getElementById('checkout-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processCheckout();
        });

        this.cart.updateCheckoutSummary();
    },

    // Обработка оформления заказа
    processCheckout() {
        if (this.cart.items.length === 0) {
            this.cart.showNotification('Корзина пуста', 'error');
            return;
        }

        const formData = new FormData(document.getElementById('checkout-form'));
        const customerInfo = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            payment: formData.get('payment-method'),
            comments: formData.get('comments')
        };

        // Валидация
        if (!customerInfo.name || !customerInfo.phone || !customerInfo.email || !customerInfo.address) {
            this.cart.showNotification('Заполните все обязательные поля', 'error');
            return;
        }

        if (!this.utils.validateEmail(customerInfo.email)) {
            this.cart.showNotification('Введите корректный email', 'error');
            return;
        }

        if (!this.utils.validatePhone(customerInfo.phone)) {
            this.cart.showNotification('Введите корректный телефон', 'error');
            return;
        }

        // Создание заказа
        const order = this.orders.createOrder(customerInfo);
        
        // Очистка корзины
        this.cart.clear();
        
        this.cart.showNotification(`Заказ оформлен! Номер: #${order.id}`, 'success');
        
        // Перенаправление на страницу заказов
        setTimeout(() => {
            window.location.href = 'orders.html';
        }, 2000);
    },

    // Обработка формы обращений
    processComplaint() {
        const form = document.getElementById('complaint-form');
        if (!form) return;

        const formData = new FormData(form);
        const complaintData = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            type: formData.get('type'),
            product: formData.get('product'),
            description: formData.get('description'),
            requirement: formData.get('requirement'),
            timestamp: new Date().toISOString(),
            number: 'COMP-' + Date.now()
        };

        // Валидация
        if (!complaintData.name || !complaintData.phone || !complaintData.email || 
            !complaintData.type || !complaintData.product || !complaintData.description || !complaintData.requirement) {
            this.cart.showNotification('Заполните все обязательные поля', 'error');
            return;
        }

        if (!this.utils.validateEmail(complaintData.email)) {
            this.cart.showNotification('Введите корректный email', 'error');
            return;
        }

        if (!this.utils.validatePhone(complaintData.phone)) {
            this.cart.showNotification('Введите корректный телефон', 'error');
            return;
        }

        // Сохраняем обращение в localStorage
        let complaints = JSON.parse(localStorage.getItem('retroShopComplaints')) || [];
        complaints.push(complaintData);
        localStorage.setItem('retroShopComplaints', JSON.stringify(complaints));

        this.cart.showNotification(`Обращение отправлено! Номер: ${complaintData.number}`, 'success');
        form.reset();
    },

    // Функция для показа образцов документов
    showPaymentSamples() {
        const modal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="payment-samples">
                <h2>Образцы платежных документов</h2>
                <div class="sample-item">
                    <h3>📄 Кассовый чек</h3>
                    <div class="sample-content">
                        <p><strong>ООО "Ретро Винтаж Трейд"</strong></p>
                        <p>ИНН: 7705432109</p>
                        <p>Дата: ${new Date().toLocaleDateString('ru-RU')}</p>
                        <p>Кассир: Иванова М.П.</p>
                        <p>Сумма: 4 500 ₽</p>
                        <p>ФН: 9999078900001234</p>
                        <p>ФД: 12345</p>
                        <p>ФП: 9876543210</p>
                    </div>
                </div>
                <div class="sample-item">
                    <h3>🧾 Товарный чек</h3>
                    <div class="sample-content">
                        <p><strong>Товарный чек</strong></p>
                        <p>ООО "Ретро Винтаж Трейд"</p>
                        <p>№ ЧК: ${Date.now()}</p>
                        <p>Товар: Винтажное платье 70-х</p>
                        <p>Количество: 1</p>
                        <p>Цена: 4 500 ₽</p>
                        <p>Сумма: 4 500 ₽</p>
                        <p>Подпись: _________</p>
                    </div>
                </div>
                <button class="btn" onclick="closeProductModal()" style="margin-top: 2rem;">Закрыть</button>
            </div>
        `;
        
        modal.style.display = 'block';
    },

    // Вспомогательные методы для статусов
    getStatusClass(status) {
        const statusMap = {
            'processing': 'status-processing',
            'shipped': 'status-shipped',
            'delivered': 'status-delivered',
            'cancelled': 'status-cancelled'
        };
        return statusMap[status] || 'status-processing';
    },

    getStatusText(status) {
        const statusMap = {
            'processing': 'Обрабатывается',
            'shipped': 'Отправлен',
            'delivered': 'Доставлен',
            'cancelled': 'Отменен'
        };
        return statusMap[status] || 'Обрабатывается';
    }
};

// Глобальные функции для использования в HTML
function openProductModal(productId) {
    RetroShop.modal.open(productId);
}

function closeProductModal() {
    RetroShop.modal.close();
}

function addToCart(productId, quantity = 1) {
    return RetroShop.cart.addItem(productId, quantity);
}

function removeFromCart(productId) {
    RetroShop.cart.removeItem(productId);
}

function updateCartQuantity(productId, quantity) {
    RetroShop.cart.updateQuantity(productId, quantity);
}

function clearCart() {
    RetroShop.cart.clear();
}

// Функция для переключения юридической информации
function toggleLegalInfo(button) {
    const legalInfo = button.previousElementSibling;
    const toggleText = button.querySelector('.toggle-text');
    const toggleArrow = button.querySelector('.toggle-arrow');
    
    if (legalInfo.style.display === 'none' || !legalInfo.style.display) {
        legalInfo.style.display = 'block';
        toggleText.textContent = 'Скрыть юридическую информацию';
        toggleArrow.style.transform = 'rotate(180deg)';
        button.style.background = 'var(--primary-red)';
        button.style.color = 'var(--white)';
    } else {
        legalInfo.style.display = 'none';
        toggleText.textContent = 'Показать юридическую информацию';
        toggleArrow.style.transform = 'rotate(0deg)';
        button.style.background = 'transparent';
        button.style.color = 'var(--primary-red)';
    }
}

function showPaymentSamples() {
    RetroShop.showPaymentSamples();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    RetroShop.init();
});

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});
