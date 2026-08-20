import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [brands, setBrands] = useState([]);
  const [formData, setFormData] = useState({
    brand_id: '',
    product_name: '',
    product_description: '',
    product_image: '',
    product_details: "",
    product_price: ''
  });
  const [loading, setLoading] = useState(false);

  // Fetch brands on component mount
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/brands`)
      .then((res) => setBrands(res.data))
      .catch((err) => console.error('Error fetching brands:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/add-product`, formData);
      alert('Product added to Guard-All Database!');
      // Reset form state
      setFormData({
        brand_id: '',
        product_name: '',
        product_description: '',
        product_image: '',
        product_details: '',
        product_price: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error adding product to database.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-slate-300 shadow-xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Brand Selection */}
        <div>
          <label className="block font-bold mb-1">Select Product Brands:</label>
          <select
            className="w-full p-3 border rounded bg-white"
            value={formData.brand_id}
            onChange={(e) => setFormData({ ...formData, brand_id: e.target.value })}
            required
          >
            <option value="">-- Choose Product Brands --</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        {/* Product Name */}
        <div>
          <label className="block font-bold mb-1">Product Name:</label>
          <input
            type="text"
            className="w-full p-3 border rounded bg-white"
            value={formData.product_name}
            onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
            placeholder="e.g. Honeywell Pro-Watch"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block font-bold mb-1">Product Description:</label>
          <textarea
            className="w-full p-3 border rounded h-32 bg-white"
            value={formData.product_description}
            onChange={(e) => setFormData({ ...formData, product_description: e.target.value })}
            placeholder="Detailed specs..."
            required
          />
        </div>

        {/* Image Path */}
        <div>
          <label className="block font-bold mb-1">Image URL / Path:</label>
          <input
            type="text"
            className="w-full p-3 border rounded bg-white"
            value={formData.product_image}
            onChange={(e) => setFormData({ ...formData, product_image: e.target.value })}
            placeholder="/src/assets/image/products/item.png"
            required
          />
        </div>

        {/* Product Details */}
        <div>
          <label className="block font-bold mb-1">Product Details:</label>
          <input
            type="text"
            className="w-full p-3 border rounded bg-white"
            value={formData.product_details}
            onChange={(e) => setFormData({ ...formData, product_details: e.target.value })}
            placeholder="Details of the Products"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1964d3] hover:bg-[#ff5f31] text-white font-bold py-4 rounded-xl transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Product to Database'}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;