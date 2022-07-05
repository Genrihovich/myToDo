import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); //список тасков
  const [text, setText] = useState('');   // таск

  //------------------------------- добавление todo -----------------------------
  const addTodo = () => {
    if (text.trim().length) { //проверяем или не пустой текст
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(), // идентификатор
          text,                         // сам текст
          complited: false, // статус завершенности (вначале дело еще не завершено)
        }
      ])
      setText('') // сбрасываем на пустой после добавления
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
            complited: !todo.complited,
          }
        }
      )
    );
  }//===========================================================

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={addTodo}>Add</button>
      </label>

      <ul>
        {
          todos.map(todo => <li key={todo.id}>
            <input type="checkbox" checked={todo.complited} onChange={() => { toggleTodoComplete(todo.id) }} />
            <span>{todo.text}</span>
            <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span> {/* спец символ */}
          </li>)
        }
      </ul>

    </div>
  );
}

export default App;
