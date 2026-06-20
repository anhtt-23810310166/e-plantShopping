// Hàm tính tổng số tiền của toàn bộ giỏ hàng
const calculateTotalAmount = () => {
  return cartItems.reduce((total, item) => {
    // Chuyển chuỗi "$15" thành số 15 để tính toán nếu cost chứa ký tự $
    const price = parseFloat(item.cost.replace('$', ''));
    return total + price * item.quantity;
  }, 0);
};

// Hàm xử lý khi nhấn dấu +
const handleIncrement = (item) => {
  dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
};

// Hàm xử lý khi nhấn dấu -
const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeItem(item.name));
  }
};

// Hàm xử lý khi nhấn nút xóa (Remove)
const handleRemove = (item) => {
  dispatch(removeItem(item.name));
};
