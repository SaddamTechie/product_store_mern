import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, product, handleUpdateProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '400px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          borderBottom: '1px solid #ddd'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Update Product</h2>
          <button onClick={onClose} style={{ color: '#666', background: 'none', border: 'none', cursor: 'pointer' }}>
            &times;
          </button>
        </div>
        <div style={{ padding: '16px' }}>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={updatedProduct.name}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '8px'
            }}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '8px'
            }}
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={updatedProduct.image}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '8px'
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px',
          borderTop: '1px solid #ddd'
        }}>
          <button
            onClick={() => { handleUpdateProduct(product._id, updatedProduct); onClose(); }}
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              marginRight: '8px',
              cursor: 'pointer'
            }}
          >
            Update
          </button>
          <button
            onClick={onClose}
            style={{
              color: '#555',
              backgroundColor: 'none',
              borderColor: '#ccc',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;