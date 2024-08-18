"use client";
import React, { useState, useEffect } from "react";
import { fetchMediumApi } from "../api";

type Blogs = {
  //google this for later
  id: number;
  title: string;
  categories: string;
  link: string;
  content: string;
};

function Blogs() {
  const [blogPost, setBlogPost] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchMediumApi();
        console.log({ fetchedData });
        setBlogPost(fetchedData.items); // Assuming 'items' contains the blog posts
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {blogPost.map((blog) => {
        return (
          <div key={blog.id}>
            <p>{blog.title}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Blogs;
