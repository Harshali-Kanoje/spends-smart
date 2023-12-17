import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import './AddTransaction.css'

const AddTransaction = () => {

  const [amount, setAmount] = useState()
  const [type, setType] = useState('debit')
  const [category, setCategory] = useState('other')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user'))

    if (!storeUser) {
      alert("Please logged in to add transaction!")
      window.location.href = '/login'
    }
  }, [])

  const addTransaction = async () => {
    if (!amount) {
      alert("Amount is required")
      return
    }

    if (!type) {
      alert("Transaction Type is required")
      return
    }

    const response = await axios.post('/api/transaction', {
      amount,
      type,
      category: category || 'other',
      description
    })

    alert(response?.data?.message)

    if (response?.data?.success) {
      window.location.href = './showtransaction'
    }
  }
  return (
    <div>
      <Navbar />
      <div className='add-transaction d-flex'>
        <div className='add-container'>
          <input type='Number' placeholder='Enter Amount' value={amount} onChange={(e) => {
            setAmount(e.target.value)
          }} className='input-width' />

          <p className='transaction-text'>Select Transaction Type</p>
          <div className='radio-btn'>

            <div>
              <input type='radio' name='type' id='debit' checked={type === 'debit'}
                onClick={() => {
                  setType('debit')
                }} className='radio' />
              <label>Debit</label>
            </div>
            <div>
              <input type='radio' name='type' id='credit' checked={type === 'credit'}
                onClick={() => {
                  setType('credit')
                }} className='radio' />
              <label>Credit</label>
            </div>
          </div>

          <select value={category} onChange={(e) => {
            setCategory(e.target.value)
          }} className='input-width'>
            <option value={'other'}>Select Category here</option>
            <option value={'food'}>Food</option>
            <option value={'education'}>Education</option>
            <option value={'entertainment'}>Entertainment</option>
            <option value={'travell'}>Travell</option>
            <option value={'rent'}>Rent</option>
            <option value={'salary'}>Salary</option>
            <option value={'shopping'}>Shopping</option>
            <option value={'other'}>Other</option>
          </select>
          <br />
          <textarea placeholder={'Add Your Description'} value={description} onChange={(e) => {
            setDescription(e.target.value)
          }} className='input-width'>Add Description</textarea>
          <br />
          <button type='button' className='transaction-btn' onClick={addTransaction}>Add Transaction</button>
        </div>
      </div>
    </div>
  )
}

export default AddTransaction
