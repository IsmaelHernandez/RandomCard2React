import React from 'react'

const CardUsers = ({ramdonUser, ramdonColor, getRandomAll}) => {

  const objStyle = {
    color: ramdonColor
  }

  const objBgStyle = {
    backgroundColor: ramdonColor
  }

  console.log(ramdonUser, ramdonColor)

  return (
    <article className='card' style={objStyle}>
      <header className=''>
        <img className='card__img' src={ramdonUser.picture.large} alt="" />
      </header>
      <div className='card__container'>
        <h2 className='card__name'>{`${ramdonUser.name.first} ${ramdonUser.name.last} ${ramdonUser.name.title}`}</h2>
        <p className=''>{ramdonUser.gender}</p>
        <p className=''>{ramdonUser.email}</p>
        <button onClick={getRandomAll} className='btn' style={objBgStyle}></button>
      </div>
    </article>
  )
}

export default CardUsers