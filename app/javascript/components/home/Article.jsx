import React, {useState, useEffect} from 'react'
import ChooseAuthor from './ChooseAuthor'

const Article = ({ fullname }) => {

  const [article, setArticle] = useState({ name: fullname })

  return (
    <>
    <div className="main-container">
      <h1>This is an article</h1>
      <span>Written by { article.name }</span>
      <ChooseAuthor article={article} setArticle={setArticle} />
    </div>
    </>
  )
}

export default Article;
