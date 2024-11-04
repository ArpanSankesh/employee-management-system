import Header from '../others/Header'
import TaskList from '../TaskList/TaskLIst'
import TaskCount from '../others/TaskCount'

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = ({data}) => {
  
    console.log(data);

  return (
    <div className=" p-10 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskCount  data={data}/>
      <TaskList  data={data}/>
    </div>
  )
}

export default EmployeeDashboard