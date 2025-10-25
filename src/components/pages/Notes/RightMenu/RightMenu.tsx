import React from 'react'

const RightMenu = () => {
  return (
      <div className="container mx-auto h-full">
      <div className="grid grid-rows-10 gap-4 h-full">
        <div className="row-span-5  rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75">
          Блок 1
        </div>
        <div className=" row-span-5  rounded-4xl border-2 border-primary/90 bg-blockNoteMenu/75">
          Блок 2
        </div>
      </div>
      </div>
  )
}

export default RightMenu