import React, { useState } from "react";

const BlogArticle = ({ articleData }) => {
  const [title, setTitle] = useState(articleData.title);
  const [text, setText] = useState(articleData.text);
  const [media, setMedia] = useState(articleData.media);
  const [mediaType, setMediaType] = useState(articleData.mediaType);
  const [order, setOrder] = useState(articleData.order);

  return (
    <article>
      {isConnected ? (
        <>
          <h5>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h5>
          <div>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <h5>{title}</h5>
          <div>{text}</div>
        </>
      )}
    </article>
  );
};

export default BlogArticle;
