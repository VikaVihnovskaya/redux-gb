import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { editProduct } from "../store/productSlice";
import "./product.css";

function EditProduct({ product }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
        editProduct({ id: product.id, name, description, price: parseFloat(price), available }),
    );
    setFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  }

  return (
      <div>
        <button className="button-edit" onClick={toggleFormVisibility}>Edit</button>
        {formVisible && (
            <form className="form" onSubmit={handleSubmit}>
              <p className="text-attention">Please, Edit existing product data and click Save! </p>
              <input className="input"
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
              <input className="input"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
              />

              <input className="input"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
              />
              <label>
                Available:
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
              </label>
              <button className="button-save" type="submit">Save</button>
            </form>
        )}
      </div>
  );
}

export default EditProduct;