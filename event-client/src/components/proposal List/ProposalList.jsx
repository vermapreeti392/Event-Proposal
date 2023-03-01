import React, { useEffect } from 'react'

export default function ProposalList({setModal}) {
  // useEffect(async()=>{
  //   await fetch('http://localhost:5000/allProposals')
  //   .then(res=>res.json())
  //   .then(data=>
  //     {
  //       console.log(data)
  //     }
  //     )
  // }, [])
  return (
    <div>
      proposal list
      <button onClick={()=>{setModal(true)}}>create</button>
    </div>
  )
}

