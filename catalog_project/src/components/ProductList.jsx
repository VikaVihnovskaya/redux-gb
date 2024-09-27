import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability, updateProduct } from "../store/productSlice";
import EditProduct from "./EditProduct";
import "./product.css";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  console.log("products: ", products);
  const dispatch = useDispatch();

  return (
      <div >
        <h2 className="title">Product List</h2>
        {products.length === 0 ? (
            <p className="text">No products available.</p>
        ) : (
            <ul className="product-wrapper">
              {products.map((product) => (
                  <li className="product-item" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Available: {product.available ? "Yes" : "No"}</p>
                    <button className="button-delete" onClick={() => dispatch(deleteProduct(product.id))}>
                      Delete
                    </button>
                    <br></br>
                    <button className="button-toggle" onClick={() => dispatch(toggleAvailability(product.id))}>
                      Toggle Availability
                    </button>
                    <EditProduct onChange={() => dispatch(updateProduct(product.id))} product={product}/>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default ProductList;