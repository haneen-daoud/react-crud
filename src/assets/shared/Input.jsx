import React from 'react'

export default function Input({id,type,name,value,titel,getUser,cust,errors}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className={`form-label ${cust}`}>{titel}</label>
    <input type={type} className="form-control" id={id} name={name} value={value} onChange={getUser} />
    {errors[name]&&<p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}