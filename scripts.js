    document.addEventListener("DOMContentLoaded", () => {
        const cartItems = document.getElementById('cart-items');
        const userInfoSection = document.querySelector('.address-info');

        window.addToCart = (product) => {
            let item = document.createElement('li');
            item.textContent = product;
            cartItems.appendChild(item);

            // Cập nhật giỏ hàng
            if (cartItems.firstElementChild.textContent === 'Giỏ hàng trống') {
                cartItems.innerHTML = '';
            }

            let cartItemCount = document.getElementById('cart-item-count');
            if (!cartItemCount) {
                cartItemCount = document.createElement('p');
                cartItemCount.id = 'cart-item-count';
                cartItems.parentNode.insertBefore(cartItemCount, cartItems);
            }
            cartItemCount.textContent = `Tổng số sản phẩm: ${cartItems.childElementCount}`;

            alert(product + ' đã được thêm vào giỏ hàng!');
        };

        window.buyNow = (product) => {
            alert('Bạn đã mua ' + product + ' thành công! Hãy nhập thông tin địa chỉ để hoàn tất đơn hàng.');

            // Cuộn đến mục nhập thông tin địa chỉ
            userInfoSection.scrollIntoView({ behavior: 'smooth' });

            // Bạn có thể thêm logic xử lý mua hàng ở đây
        };
    });
