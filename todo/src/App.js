import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import ImputField from './components/ImputField';
import Users from './components/Users';

import './App.css';

function App() {
  const [todos, setTodos] =
    useState(JSON.parse(localStorage.getItem('MY_STATE_TODO')) || []); //список тасков
  const [text, setText] = useState('');   // таск


  useEffect(() => {
    const data = window.localStorage.getItem('MY_STATE_TODO');
    if (data !== null) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_STATE_TODO', JSON.stringify(todos));
  }, [todos]);






  //------------------------------- добавление todo -----------------------------
  const addTodo = () => {
    if (text.trim().length) { //проверяем или не пустой текст
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(), // идентификатор
          text,                         // сам текст
          completed: false, // статус завершенности (вначале дело еще не завершено)
        }
      ])
      setText('') // сбрасываем на пустой после добавления
      // console.log(saveTodo);
    }
  }//============================================================================

  //-------------- удаление todo -----------------------
  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }//===================================================

  //------------ управление checkbox-ом ------------------------
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    );
  }//===========================================================

  return (
    <div className="App">
      <div >
        < Users />
      </div>
      <div className="container">
        <ImputField
          text={text}
          setText={setText}
          addTodo={addTodo}
        />

        <TodoList
          todos={todos}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div >
  );
}

export default App;
