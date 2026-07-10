import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Express backend
    fetch('http://localhost:5000/api/testimonials')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading testimonials reviews..</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Don't just take our word for it — hear from our community.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="stars">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </div>
              <p className="quote">"{item.quote}"</p>
              <div className="user-info">
                <img src={item.avatar} alt={item.name} className="avatar" />
                <div>
                  <h4 className="name">{item.name}</h4>
                  <p className="role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;