import { useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'


function App() {
  // global filters that is set to change TodoList
  const [filter, setFilter] = useState('all');

  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoInput />
      {/* Passing filters and setFilters so that FilterBar can mutate global filters and 
      Todolist can accordingly use it to display UI accordingly */}
      <FilterBar onFilterChange ={setFilter}/>
      <TodoList filter={filter}/>
    </TodoProvider>
  )
}

export default App
