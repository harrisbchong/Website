import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>
        Click to learn more about them on my
        <a href='https://github.com/harrisbchong' target='_blank' rel="noreferrer"> <em>Github</em></a>
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/reddit.png"
              text="Reddit Webscraper"
              subtext="test"
              label="Python"
              path='/products'
              href='https://github.com/harrisbchong/Reddit-Webscraper'

            />
            <CardItem
              src="images/chrome-extension.png"
              text="UofT Shortcuts Chrome Extension"
              subtext="test"
              label="HTML"
              path='/products'
              href='https://github.com/harrisbchong/UofT-Shortcuts-Chrome-Extension'

            />
            <CardItem
              src="images/website.png"
              text="Personal Website"
              subtext="test"
              label="React + CSS + JS"
              path='/products'
              href='https://github.com/harrisbchong/Website'

            />
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Cards;