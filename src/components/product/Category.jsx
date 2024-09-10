import React from 'react'


function Category({category,isChosen,onclick}) {
    const {name} = category;
    
    
  return (
   
    <div
    onClick={onclick}
    className={`${isChosen?"bg-orange-600 text-white":"bg-white text-black"} p-2 border-orange-400 border cursor-pointer  px-4 rounded-md`}>
        <h1>{name}</h1>

    </div>
  )
}

export default Category