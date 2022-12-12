import React from 'react'
import {ProjectList} from './ProjectList'
import {Toolbar} from './Toolbar'
import {useState} from 'react'

const Potfolio = () => {
  const allCards = [
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
      category: 'Business Cards'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
      category: 'Business Cards'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
      category: 'Flayers'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
      category: 'Business Cards'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
      category: 'Websites'
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
      category: 'Flayers'
    }
  ]
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards']
  const [selected, setSelected] = useState('All')
  const [cards, setCards] = useState(allCards)

  const onSelectFilter = (filter) => {
    setSelected(filter)
    const filteredCards =
      filter === 'All'
        ? allCards
        : allCards.filter((card) => card.category === filter)
    setCards(filteredCards)
  }

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList cards={cards} />
    </div>
  )
}

export default Potfolio
