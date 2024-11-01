import Header from '../others/Header'
import TaskList from '../TaskList/TaskLIst'
import TaskCount from '../others/TaskCount'

const EmployeeDashboard = () => {
    
  return (
    <div className=" p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskCount />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard