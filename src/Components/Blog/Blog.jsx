// import React from 'react';
import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="mb-20 space-y-4 ">
      {/* <h2>title:</h2> */}
      <img
        className="w-full mb-8 "
        src={cover}
        alt={`cover pic of the title ${title}`}
      ></img>
      <div className="flex justify-between mb-4 ">
        <div className="flex">
          <img
            className="rounded-full h-16 w-14"
            src={author_img}
            alt="author_img"
          />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>
            {reading_time} min read
            <button
              onClick={() => handleAddBookmark(blog)}
              className="ml-2 text-2xl"
            >
              <FaBookmark></FaBookmark>
            </button>
          </span>
        </div>
      </div>
      <h2>title:{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;

// bookmark logo is not working
