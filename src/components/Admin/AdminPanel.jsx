import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [brands, setBrands] = useState([]);
  const [formData, setFormData] = useState({
    brand_id: '',
    product_name: '',
    product_description: '',
    product_image: ''
  });

  // Fetch brands so we can populate the dropdown menu
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/brands`)
      .then(res => setBrands(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/add-product`, formData);
      alert("Product added to Guard-All Database!");
      setFormData({ brand_id: '', product_name: '', product_description: '', product_image: '' });
    } catch (err) {
      alert("Error adding product");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Brand Selection */}
        <div>
          <label className="block font-bold">Select Brand</label>
          <select 
            className="w-full p-3 border rounded"
            onChange={(e) => setFormData({...formData, brand_id: e.target.value})}
            required
          >
            <option value="">-- Choose Brand --</option>
            {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        </div>

        {/* Product Name */}
        <div>
          <label className="block font-bold">Product Name</label>
          <input 
            type="text" className="w-full p-3 border rounded"
            value={formData.product_name}
            onChange={(e) => setFormData({...formData, product_name: e.target.value})}
            placeholder="e.g. Honeywell Pro-Watch" required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block font-bold">Product Description</label>
          <textarea 
            className="w-full p-3 border rounded h-32"
            value={formData.product_description}
            onChange={(e) => setFormData({...formData, product_description: e.target.value})}
            placeholder="Detailed specs..." required
          />
        </div>

        {/* Image Path */}
        <div>
          <label className="block font-bold">Image URL / Path</label>
          <input 
            type="text" className="w-full p-3 border rounded"
            value={formData.product_image}
            onChange={(e) => setFormData({...formData, product_image: e.target.value})}
            placeholder="/src/assets/image/products/item.png" required
          />
        </div>

        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition">
          Save Product to Database
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;