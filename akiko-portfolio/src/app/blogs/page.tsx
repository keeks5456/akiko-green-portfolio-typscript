"use client";
import React, { useState, useEffect } from "react";
import { mediumApi } from "../api";

function Blogs() {
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    mediumApi();
  }, []);

  return <div>Blogs page</div>;
}
export default Blogs;
