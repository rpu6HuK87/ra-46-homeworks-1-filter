import React from 'react'

export const ProjectList = ({cards}) => {
  return (
    <div className="container">
      {cards.map((card) => (
        <img src={card.img} />
      ))}
    </div>
  )
}
