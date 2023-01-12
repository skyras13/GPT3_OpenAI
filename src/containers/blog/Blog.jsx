import React from 'react';
import './blog.css';
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"

const Blog = () => {
  return (
    <div className="skyras13software__blog section__padding" id='blog'>
      <div className="skyras13software__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are bloggin about it.</h1>
      </div>
      <div className="skyras13software__blog-container">
        <div className="skyras13software__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore and show you how!" />
        </div>
        <div className="skyras13software__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore and show you how!" />
          <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore and show you how!" />
          <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore and show you how!" />
          <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore and show you how!" />
        </div>
      </div>
    </div>
  )
}

export default Blog