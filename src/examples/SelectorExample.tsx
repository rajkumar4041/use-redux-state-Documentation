import { useReduxState, useReduxStateSelector } from 'use-redux-state';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const SelectorExample = () => {
  const [products, setProducts] = useReduxState<Product[]>('products', [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 2, name: 'Mouse', price: 25, category: 'Electronics', inStock: true },
    { id: 3, name: 'Keyboard', price: 75, category: 'Electronics', inStock: false },
    { id: 4, name: 'Desk', price: 200, category: 'Furniture', inStock: true },
    { id: 5, name: 'Chair', price: 150, category: 'Furniture', inStock: true },
  ]);

  // Selectors for derived state
  const totalValue = useReduxStateSelector<number>('products', (products) =>
    products.reduce((sum, product) => sum + product.price, 0)
  );

  const electronicsProducts = useReduxStateSelector<Product[]>('products', (products) =>
    products.filter(product => product.category === 'Electronics')
  );

  const inStockProducts = useReduxStateSelector<Product[]>('products', (products) =>
    products.filter(product => product.inStock)
  );

  const averagePrice = useReduxStateSelector<number>('products', (products) =>
    products.length > 0 ? products.reduce((sum, product) => sum + product.price, 0) / products.length : 0
  );

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: `Product ${products.length + 1}`,
      price: Math.floor(Math.random() * 500) + 50,
      category: Math.random() > 0.5 ? 'Electronics' : 'Furniture',
      inStock: Math.random() > 0.3,
    };
    setProducts([...products, newProduct]);
  };

  const toggleStock = (id: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, inStock: !product.inStock } : product
    ));
  };

  return (
    <div className="example-container">
      <h2>State Selectors</h2>
      <p className="description">
        Using selectors to compute derived state from your global state. Selectors are memoized and only recalculate when dependencies change.
      </p>
      
      <div className="demo-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Products</h4>
            <p>{products.length}</p>
          </div>
          <div className="stat-card">
            <h4>Total Value</h4>
            <p>${totalValue}</p>
          </div>
          <div className="stat-card">
            <h4>Electronics</h4>
            <p>{electronicsProducts.length}</p>
          </div>
          <div className="stat-card">
            <h4>In Stock</h4>
            <p>{inStockProducts.length}</p>
          </div>
          <div className="stat-card">
            <h4>Average Price</h4>
            <p>${averagePrice.toFixed(2)}</p>
          </div>
        </div>

        <div className="products-section">
          <h3>Products</h3>
          <button onClick={addProduct} className="add-button">Add Random Product</button>
          
          <div className="products-list">
            {products.map(product => (
              <div key={product.id} className={`product-item ${!product.inStock ? 'out-of-stock' : ''}`}>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>${product.price} - {product.category}</p>
                  <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <button onClick={() => toggleStock(product.id)}>
                  {product.inStock ? 'Mark Out of Stock' : 'Mark In Stock'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre><code>{`// Selectors for derived state
const totalValue = useReduxStateSelector<number>('products', (products) =>
  products.reduce((sum, product) => sum + product.price, 0)
);

const electronicsProducts = useReduxStateSelector<Product[]>('products', (products) =>
  products.filter(product => product.category === 'Electronics')
);

const inStockProducts = useReduxStateSelector<Product[]>('products', (products) =>
  products.filter(product => product.inStock)
);

const averagePrice = useReduxStateSelector<number>('products', (products) =>
  products.length > 0 
    ? products.reduce((sum, product) => sum + product.price, 0) / products.length 
    : 0
);`}</code></pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Derived state computation with selectors</li>
          <li>Memoized calculations for performance</li>
          <li>Filtering and aggregation operations</li>
          <li>Real-time updates when source data changes</li>
          <li>Type-safe selector functions</li>
        </ul>
      </div>
    </div>
  );
};

export default SelectorExample; 