import React from "react";

const Article = ({ title, id, children }) => {
  return (
    <article id={id}>
      <h3>{title}</h3>
      <div className="articleContent">{children}</div>
    </article>
  );
};

export default Article;
