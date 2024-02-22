
"use client";
import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <h1>Posts Grouped by User ID</h1>
      <div>Card</div>
      {posts.map((post) => (
        <div key={post.id}>
          <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "lightgray", margin: "10px", width: "300px", display: "inline-block" }}>
            <p style={{ color: "red" }}>{post.id}</p>
            <h2 style={{ color: "green" }}>{post.title}</h2>
            <p style={{ color: "yellow" }}>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
