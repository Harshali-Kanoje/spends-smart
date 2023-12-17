import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../component/Navbar/Navbar'
import ShowTransactionCard from '../../component/ShowTransactionCard/ShowTransactionCard'
import './ShowTransaction.css'


const ShowTransaction = () => {

  const [transaction, setTransaction] = useState([])

  const [creaditSum, setCreaditSum] = useState(0)
  const [debitSum, setDebitSum] = useState(0)

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user'))

    if (!storeUser) {
      alert("Please logged in to show transaction!")
      window.location.href = '/login'
    }
  }, [])

  const loadTransaction = async () => {
    const response = await axios.get('/api/transactions')
    const allTransaction = response?.data?.data;

    let totalCreadit = 0;
    let totalDebit = 0;

    allTransaction.forEach((transaction, index) => {
      const { type, amount } = transaction;
      if (type === 'debit') {
        totalDebit += amount
      } else {
        totalCreadit += amount
      }
    })
    setCreaditSum(totalCreadit)
    setDebitSum(totalDebit)
    setTransaction(allTransaction)
  }

  useEffect(() => {
    loadTransaction();
  }, [])

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
  return (
    <div className='showTransaction-container'>
      <Navbar />
      <div >
      <div className={`type type-credit`}>Credit : {creaditSum}</div>
      <div className={`type type-debit`}>Debit : {debitSum}</div>
      {
        transaction?.map((transaction, index) => {
          const { _id, type, amount, category, description, createdAt } = transaction;
          const date = new Date(createdAt).toLocaleDateString()
          const time = new Date(createdAt).toLocaleTimeString()


          return (
            <div>
              <ShowTransactionCard amount={amount} type={type} category={category} description={description} createdAt={createdAt} />
              {/* <span className={`amount ${type === 'debit' ? "detbit-amount" : "creadit-amount"}`}>
                {type === 'debit' ? "-" : "+"} {" "}
                {amount}</span>
              {type === 'debit' ? "debited" : "creadited"} on {date} At {time}
              {CATEGOGY_EMOJI_MAP[category]}{category}
              <hr />
              {description} */}
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default ShowTransaction
