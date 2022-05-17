import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1 className='not-bold'>
        Click to learn more about them on my <a className='text-link' href='https://github.com/harrisbchong' target='_blank' rel="noreferrer">Github</a>
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="./images/reddit.png"
              text="Reddit Webscraper"
              subtext="Webscraper in python that scrapes the top weekly posts on r/CryptoCurrency. Script uses sentiment analysis to export data from the extracted posts into positive/negative .csv files for future analysis."
              label="Python"
              path='/products'
              href='https://github.com/harrisbchong/Reddit-Webscraper'

            />
            <CardItem
              src="./images/chrome-extension.png"
              text="UofT Shortcuts Chrome Extension"
              subtext="A Google Chrome extension which allows you to easily access important websites for students at the University of Toronto."
              label="HTML"
              path='/products'
              href='https://github.com/harrisbchong/UofT-Shortcuts-Chrome-Extension'

            />
            <CardItem
              src="./images/website.png"
              text="Personal Website"
              subtext="Personal/Portfolio website made using React, HTML, and CSS."
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