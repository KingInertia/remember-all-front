import Note from "./Note/Note"

const NotePage = () => {

  return (
    <div>
        <div className= "grid grid-cols-5">
              <div className="col-span-1 bg-red-300 "></div>
  <div className="col-span-3 ">
    <div>
      <Note />
    </div>
  </div>
  <div className="col-span-1 bg-green-300"></div>

        </div>
    </div>
  )
}

export default NotePage