import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  AppMain,
  AppLeft,
  AppRight,
  InputText,
  InputLabel,
  SelectInput,
  SubmitBtn,
  AppHeading,
  TaskForm,
  ErrorMsg,
  NoTasksDiv,
  TagListUl,
  TagBtn,
} from './components/StyledComponent'
import TaskView from './components/TaskView'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    taskDes: '',
    selection: tagsList[0].optionId,
    showError: false,
    tasks: [],
    activeTag: '',
  }

  onSelect = e => {
    this.setState({selection: e.target.value})
  }

  onFormSubmit = e => {
    e.preventDefault()
    const {taskDes, selection} = this.state
    if (taskDes === '') {
      this.setState({showError: true})
    } else {
      const newTask = {id: uuidv4(), task: taskDes, category: selection}
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask],
        taskDes: '',
        selection: tagsList[0].optionId,
      }))
    }
  }

  onUserInput = e => {
    this.setState({taskDes: e.target.value, showError: false})
  }

  onFilterBtn = e => {
    const {activeTag} = this.state

    if (activeTag === e.target.id) {
      this.setState({activeTag: ''})
    } else {
      this.setState({activeTag: e.target.id})
    }
  }

  render() {
    const {selection, taskDes, tasks, showError, activeTag} = this.state
    console.log(activeTag)
    return (
      <AppMain>
        <AppLeft>
          <AppHeading>Create a task</AppHeading>
          <TaskForm onSubmit={this.onFormSubmit}>
            <InputLabel htmlFor="TextInput">Task</InputLabel>
            <InputText
              value={taskDes}
              onChange={this.onUserInput}
              id="TextInput"
              type="text"
              placeholder="Enter the task here"
            />
            {showError && <ErrorMsg>Enter your task!</ErrorMsg>}
            <InputLabel htmlFor="TextInput">Tags</InputLabel>
            <SelectInput value={selection} onChange={this.onSelect}>
              {tagsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectInput>
            <SubmitBtn type="submit">Add Task</SubmitBtn>
          </TaskForm>
        </AppLeft>
        <AppRight>
          <h1>Tags</h1>
          <TagListUl>
            {tagsList.map(each => (
              <li key={each.optionId}>
                <TagBtn
                  active={activeTag === each.optionId}
                  onClick={this.onFilterBtn}
                  key={each.optionId}
                  id={each.optionId}
                >
                  {each.displayText}
                </TagBtn>
              </li>
            ))}
          </TagListUl>
          <h1>Tasks</h1>
          {tasks.length > 0 ? (
            <TaskView
              tasks={
                activeTag === ''
                  ? tasks
                  : tasks.filter(each => each.category === activeTag)
              }
            />
          ) : (
            <NoTasksDiv>
              <p>No Tasks Added Yet</p>
            </NoTasksDiv>
          )}
        </AppRight>
      </AppMain>
    )
  }
}

export default App
