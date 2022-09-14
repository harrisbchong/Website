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
              src="./images/reddit.PNG"
              text="Reddit Webscraper"
              subtext="Webscraper that scrapes the top weekly posts on r/CryptoCurrency. Uses sentiment analysis to export data from the extracted posts into positive/negative .csv files."
              label="Python"
              path='/projects'
              href='https://github.com/harrisbchong/Reddit-Webscraper'

            />
            <CardItem
              src="./images/chrome-extension.png"
              text="UofT Shortcuts Chrome Extension"
              subtext="A Google Chrome extension which allows you to easily access important websites for students at the University of Toronto."
              label="HTML"
              path='/projects'
              href='https://github.com/harrisbchong/UofT-Shortcuts-Chrome-Extension'

            />
            <CardItem
              src="./images/website.png"
              text="Personal Website"
              subtext="Personal/Portfolio website made using React, HTML, and CSS."
              label="React + CSS + JS"
              path='/projects'
              href='https://github.com/harrisbchong/Website'

            />
            <CardItem
              src="./images/front.PNG"
              text="Job Application Manager"
              subtext="MERN stack CRUD application to help track and manage your job applications."
              label="React + Express + Node + MongoDB"
              path='/projects'
              href='https://github.com/harrisbchong/Job-Application-Manager'

            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;