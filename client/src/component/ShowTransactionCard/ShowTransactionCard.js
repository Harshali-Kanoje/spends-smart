import React from 'react'
import './ShowTransactionCard.css'

const ShowTransactionCard = ({amount , category, description , type , createdAt}) => {

  const CATEGOGY_EMOJI_MAP = {
    'food': "😋",
    "entertainment": "🎬",
    "education": "📚",
    "travel": "✈️",
    "shopping": "🛍️",
    "salary": "💰",
    "rest": "🏠",
    "other": "🙆‍♂️",
  }

  const date = new Date(createdAt).toLocaleDateString()
          const time = new Date(createdAt).toLocaleTimeString()
  return (
    <div className='showTranscation-detail'>
      <p className='transaction'>
      <span className={`amount ${type === 'debit' ? "detbit-amount" : "creadit-amount"}`}>
                {type === 'debit' ? "-" : "+"} {" "}
                {amount}</span>
                <span className='transaction-date'>{type === 'debit' ? "debited" : "creadited"} on {date} At {time}</span></p>

             <span className='category'> {CATEGOGY_EMOJI_MAP[category]}{category}</span>
              <hr />

              <span className='description'>{description}</span>
    </div>
  )
}

export default ShowTransactionCard
