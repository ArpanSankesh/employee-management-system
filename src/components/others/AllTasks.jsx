/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTasks = () => {

    const authData = useContext(AuthContext)

  return (
    <div id="ScrollBar" className="bg-[#1C1C1C] p-5 rounded-md mt-5 min-h-80">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded-md">
            <h2 className="w-1/5">Employe Name    </h2>
            <h3 className="w-1/5">New Tasks       </h3>
            <h3 className="w-1/5">Active Tasks    </h3>
            <h3 className="w-1/5">Completed Tasks </h3>
            <h3 className="w-1/5">Failed Tasks    </h3>
        </div>
        {authData.employees.map(function(elem, idx){
        return <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-md">
            <h2 className="text-lg w-1/5" >{elem.name}</h2>
            <h3 className="text-lg w-1/5" >{elem.taskNumbers.newTask}</h3>
            <h3 className="text-lg w-1/5" >{elem.taskNumbers.active}</h3>
            <h3 className="text-lg w-1/5" >{elem.taskNumbers.completed}</h3>
            <h3 className="text-lg w-1/5" >{elem.taskNumbers.failed}</h3>
        </div>
        })}
        
    </div>
  )
}

export default AllTasks