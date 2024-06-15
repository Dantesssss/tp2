import React from 'react';
import '../style/articleStyle.css'; // Importa el archivo CSS

const Article = ({ title, description, image, texto  }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} width="800" alt={title} />
      <n />
      <p>{texto}</p>
    </article>
  );
};

export default Article;
