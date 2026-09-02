import React from 'react';
import './BlogSection.css';

// 1. आपका Blog Data (Dynamic Array)
const blogsData = [
  {
    id: 1,
    title: 'Top 5 Hair Care Tips for Summer',
    date: 'Aug 24, 2026',
    desc: 'Keep your hair healthy and shiny during hot summer days with these simple tips.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Choosing the Right Hair Color for You',
    date: 'Aug 18, 2026',
    desc: 'Find out which hair shade perfectly complements your skin tone.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Bridal Makeup Trends of the Year',
    date: 'Aug 10, 2026',
    desc: 'Explore the top trending bridal looks to make your big day special.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop'
  }
];

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <p className="blog-subtitle">OUR BLOG</p>
        <h2 className="blog-title">Latest News & Articles</h2>

        <div className="blog-grid">
          {/* 2. map() का उपयोग करके Dynamic Blog Cards Render करना */}
          {blogsData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-img-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <button className="blog-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;