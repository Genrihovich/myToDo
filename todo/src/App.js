import { useState, useEffect } from 'react';
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
          complited: false, // статус завершенности (вначале дело еще не завершено)
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
            complited: !todo.complited,
          }
        }
      )
    );
  }//===========================================================

  return (
    <div className="App">
      <div className="container">
        <label>
          <input placeholder="Ввод TODO" value={text} onChange={(e) => setText(e.target.value)}></input>
          <button className="btn btn-outline-success" onClick={addTodo}>Add</button>
        </label>

        <ul>
          {
            todos.map(todo => <li key={todo.id}>
              <input className="form-check-input" type="checkbox" checked={todo.complited} onChange={() => { toggleTodoComplete(todo.id) }} />
              <span>{todo.text}</span>
              <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span> {/* спец символ */}
            </li>)
          }
        </ul>
      </div>
    </div >
  );
}

export default App;
