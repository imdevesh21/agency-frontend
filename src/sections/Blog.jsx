import "../styles/blog.css";

const posts = [
  {
    title: "Designing for Scalability",
    excerpt:
      "How early design and architecture decisions impact long-term product growth.",
    category: "Design",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "From Idea to MVP",
    excerpt:
      "A practical approach to validating ideas and shipping your first product.",
    category: "Product",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Why Performance Matters",
    excerpt:
      "Speed, accessibility, and why performance is a business advantage.",
    category: "Engineering",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="blog-inner">

        <span className="blog-label">Insights</span>

        <h2 className="blog-title">
          Thoughts on design, products, and engineering
        </h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>

              <div className="blog-image">
                <img src={post.img} alt={post.title} />
              </div>

              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <span className="blog-meta">{post.readTime}</span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
