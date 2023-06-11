import React from 'react';

export default function TipCalculator() {
const [bill,setBill] = useState('50');
const [tip,setTip] = useState('9');
const[people,setNumberPeople] = useState('1');

  const handleChange = (e)=>{
    setBill(parseInt(e.target.value));
  }
const handleChangeTip = (e)=>{
  setTip(e.target.value)
}
const handleChangePeople = (e)=>{
  setNumberPeople(e.target.value)
}
  function handleTotalTip() {
    return (
      {bill%tip}
    )
  }
  
  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        type='number'
        value={bill}
        onChange={handleChange}>{bill}</input>
      <input
        value={tip}
        onChange={handleChangeTip}>{bill}</input>
      <input
        value={bill}
        onChange={handleChangePeople}>{bill}</input>
      <p>Total tip {}</p>
      <p>Tip Per Person: {}</p>
    </>
  );
}