import React from 'react'

export default function AboutCard( {number, title, content} ) {
    return (
        <div className={`about__card about__card--${number}`}>
          <div className="about__card__topwindow">
            <div className="about__card__topwindow__round-button"></div>
          </div>
          <div className="about__card__content">
            <h3>{title}</h3>
            {content}
          </div>
        </div>
    )
}
