{plantsArray.map((category, index) => (
  <div key={index} className="plant-category">
    <h2>{category.category}</h2>
    <div className="product-list">
      {category.plants.map((plant, pIndex) => (
        <div key={pIndex} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
))}
