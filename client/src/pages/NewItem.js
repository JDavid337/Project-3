import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { NEW_ITEM } from '../utils/mutations';

function NewItem(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [NewItem] = useMutation(NEW_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await NewItem({
      variables: {
        name: formState.name,
        description: formState.description,
        image: formState.image,
        quantity: formState.quantity,
        price: formState.price,
        category: formState.category
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
//   _id: ID
//   name: String
//   description: String
//   image: String
//   quantity: Int
//   price: Float
//   category: Category
  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Add a New Item to Your Closet</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Name"
            name="Name"
            type="Name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="Description"
            name="Description"
            type="Description"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="image">Image:</label>
          <input
            placeholder="Image"
            name="Image"
            type="Image"
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="Quantity"
            name="Quantity"
            type="Quantity"
            id="quantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="price">Price:</label>
          <input
            placeholder="Price"
            name="Price"
            type="Price"
            id="price"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="Quantity"
            name="Quantity"
            type="Quantity"
            id="quantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewItem;
