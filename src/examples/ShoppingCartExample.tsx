import { useReduxState, useReduxStateSelector } from 'use-redux-state';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface CartItem {
  productId: number;
  quantity: number;
}

const ShoppingCartExample = () => {
  const [products, setProducts] = useReduxState<Product[]>('cart-products', [
    { id: 1, name: 'Laptop', price: 999, image: '💻', category: 'Electronics', inStock: true },
    { id: 2, name: 'Mouse', price: 25, image: '🖱️', category: 'Electronics', inStock: true },
    { id: 3, name: 'Keyboard', price: 75, image: '⌨️', category: 'Electronics', inStock: true },
    { id: 4, name: 'Headphones', price: 150, image: '🎧', category: 'Electronics', inStock: false },
    { id: 5, name: 'Desk', price: 200, image: '🪑', category: 'Furniture', inStock: true },
    { id: 6, name: 'Chair', price: 150, image: '🪑', category: 'Furniture', inStock: true },
  ]);

  const [cart, setCart] = useReduxState<CartItem[]>('shopping-cart', []);
  const [selectedCategory, setSelectedCategory] = useReduxState<string>('selected-category', 'all');

  // Selectors for derived state
  const filteredProducts = useReduxStateSelector<Product[]>('cart-products', (products) => {
    if (selectedCategory === 'all') return products;
    return products.filter((product) => product.category === selectedCategory);
  });

  const cartItems = useReduxStateSelector<Array<CartItem & { product: Product }>>(
    'shopping-cart',
    (cart) => {
      return cart
        .map((item) => ({
          ...item,
          product: products.find((p) => p.id === item.productId)!,
        }))
        .filter((item) => item.product);
    }
  );

  const cartTotal = useReduxStateSelector<number>('shopping-cart', (cart) => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  });

  const cartItemCount = useReduxStateSelector<number>('shopping-cart', (cart) => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  });

  const addToCart = (productId: number) => {
    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map((item) => (item.productId === productId ? { ...item, quantity } : item)));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    alert(`Order placed! Total: $${cartTotal.toFixed(2)}`);
    clearCart();
  };

  return (
    <div className="example-container">
      <h2>Shopping Cart</h2>
      <p className="description">
        An e-commerce application demonstrating complex state management with products, shopping
        cart, and checkout functionality.
      </p>

      <div className="demo-section">
        <div className="cart-header">
          <div className="cart-summary">
            <span>🛒 Cart ({cartItemCount} items)</span>
            <span>Total: ${cartTotal.toFixed(2)}</span>
          </div>
          <div className="cart-actions">
            <button onClick={clearCart} disabled={cart.length === 0}>
              Clear Cart
            </button>
            <button onClick={checkout} disabled={cart.length === 0}>
              Checkout
            </button>
          </div>
        </div>

        <div className="shop-container">
          <div className="products-section">
            <div className="category-filter">
              <h3>Products</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}
                >
                  <div className="product-image">{product.image}</div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <p className="category">{product.category}</p>
                    <span
                      className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}
                    >
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <button onClick={() => addToCart(product.id)} disabled={!product.inStock}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-section">
            <h3>Shopping Cart</h3>
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.productId} className="cart-item">
                    <div className="cart-item-info">
                      <span className="cart-item-image">{item.product.image}</span>
                      <div>
                        <h4>{item.product.name}</h4>
                        <p>${item.product.price}</p>
                      </div>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.productId)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface CartItem {
  productId: number;
  quantity: number;
}

const ShoppingCartExample = () => {
  const [products, setProducts] = useReduxState<Product[]>('cart-products', []);
  const [cart, setCart] = useReduxState<CartItem[]>('shopping-cart', []);

  // Selectors for derived state
  const cartItems = useReduxStateSelector('shopping-cart', (cart) => {
    return cart.map(item => ({
      ...item,
      product: products.find(p => p.id === item.productId)!
    })).filter(item => item.product);
  });

  const cartTotal = useReduxStateSelector<number>('shopping-cart', (cart) => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  });

  const addToCart = (productId: number) => {
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
      setCart(cart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
  };
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Complex state relationships between products and cart</li>
          <li>Derived state calculations for totals and item counts</li>
          <li>State filtering and categorization</li>
          <li>Real-time cart updates and calculations</li>
          <li>Type-safe state management with interfaces</li>
          <li>Performance optimization with memoized selectors</li>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCartExample;
