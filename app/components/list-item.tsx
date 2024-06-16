import React from 'react'

const ListItem = ({text} : {text:string}) => {
  return (
    <div className="flex justify-center w-full bg-gray-200 p-3 rounded-md mt-3">
      {text}
    </div>
  )
}

export default ListItem
