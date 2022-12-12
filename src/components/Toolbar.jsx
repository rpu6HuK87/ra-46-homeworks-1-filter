import React from 'react'

export const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <span
          onClick={() => onSelectFilter(filter)}
          className={selected === filter ? 'button active' : 'button'}
        >
          {filter}
        </span>
      ))}
    </div>
  )
}
