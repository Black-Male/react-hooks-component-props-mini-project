import React from "react";
import blogData from "../data/blog";
import Article from "./article";

function ArticleList(){
    return(
        <main>
            <Article
                postData={blogData.posts}
            />
        </main>
    )
}

export default ArticleList