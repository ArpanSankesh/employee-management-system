import Header from '../others/Header'
import TaskList from '../TaskList/TaskLIst'
import TaskCount from '../others/TaskCount'

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = (props) => {

  return (
    <div className=" p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskCount  data={props.data}/>
      <TaskList  data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard