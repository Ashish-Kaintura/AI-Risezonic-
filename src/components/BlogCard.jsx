import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <Link to={`/blog/${blog.slug}`} className="block group">
    <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
      <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-500">{blog.intro}</p>
        <p className="mt-2 text-xs text-gray-400">{blog.date} · {blog.readTime}</p>
      </div>
    </div>
  </Link>
);

export default BlogCard;
