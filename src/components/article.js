import React from "react";


function Article({postData}){
    const trueData = postData.map((post) => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <small>{post.date}</small>
                <p>{post.preview}</p>
            </div>
        )
    })
    return (
        <div>
            {trueData}
        </div>
    )    
}

export default Article
