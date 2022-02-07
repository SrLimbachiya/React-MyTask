import {TaskViewUl, TaskLi, TaskCategory} from './StyledComponent'

const TaskView = ({tasks}) => {
  console.log(tasks)
  return (
    <TaskViewUl>
      {tasks.map(each => (
        <TaskLi key={each.id}>
          <p>{each.task}</p>
          <TaskCategory>{each.category}</TaskCategory>
        </TaskLi>
      ))}
    </TaskViewUl>
  )
}

export default TaskView
