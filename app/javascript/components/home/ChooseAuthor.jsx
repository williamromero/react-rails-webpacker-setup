import React, { useState, useEffect } from 'react'

export default function ChooseAuthor({ article, setArticle }) {

  const assignAuthor = ({ fullname }) => {
    console.log(fullname)
    setArticle({ name: fullname })
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => assignAuthor({ fullname: 'Raul' }) }>Read more</button>
    </div>
  )
}
