import React from "react";
import blogData from "../data/blog";
import About from "./about"
import ArticleList from "./articleList"

console.log(blogData);
const HeaderStuff = () => {
  return(
    <header>
      <h1>{blogData.name}</h1>
    </header>
  )
}


function App() {
  const source = blogData.image


  return (
    <div className="App">
      {/* header for page title */}
      <HeaderStuff/>
      {/* about the nigga on the site */}
      <About  
        src = {source}
        pageText = {blogData.about}
      />
      {/*Article list */}
      <ArticleList
      articles = {blogData.posts}
      title = {blogData.posts.title}
      date = {blogData.posts.date}
      preview = {blogData.posts.preview}
      />
      {/* Article :/ to be child of article list tho */}
    </div>
  );
}

export default App;
