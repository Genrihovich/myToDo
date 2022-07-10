import { useEffect, useState } from 'react';
import './App.css';

/** кастомный хук 2 отвечающий за валидацию, принимающий текущее значение и набор валидаторов
 * useEffect будем пробегаться по полям валидешн
 * для каждого типа валидации создаем состояние
 * Эти состояния хранят информацию об ошибке 
 */
const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true) //поле изначально пустое
  const [minLengthError, setMinLengthError] = useState(false)
  // Валь от сюда не заходить зараз
  useEffect(() => {
    for (const val in validations) {
      //ці консолі не отображаються
      console.log('validation - : ' + val);
      console.log('value - ' + value);

      switch (val) {

        case 'minLength':     // если тру - то выставляем, что есть Ошибка
          {
            console.log(value.Lenght);
            value.Lenght < validations[val] ? setMinLengthError(true) : setMinLengthError(false)
            // console.log('minLength');
            break;
          }

        case 'isEmpty'://если value есть то поле НЕ пустое, если нет то ПУСТОЕ
          {
            value ? setEmpty(false) : setEmpty(true);
            //  console.log('isEmpty')
            break;
          }
        default:
          console.log('Жопа');
      }
    }
  }, [validations, value])

  return {
    isEmpty,
    minLengthError,
  }
}

/*
  ------------- кастомный хук 1 -----------
value - состояние, которое находится внутри инпута
onChange - будет обрабатывать изменения внутри импута:
    внутри - мы меняем состояние на то значение, которое находиться внутри текущего импута
onBlur - отрабатывает в тот момент, когда пользователь покинул инпут
isDirty - состояние, которое будет показывать вышли мы с инпута или еще нет
valid - в нее помещаем результат валидации
*/
const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value)

  const onChange = (e) => {
    setValue(e.target.value)

  }

  const onBlur = (e) => {
    setDirty(true)
  }
  // console.log('validation - ' + validation.minLength); ПРИХОДИТ
  // console.log('valid - ' + valid);
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}

function App() {

  const user = useInput('', { isEmpty: true, minLength: 6 })
  console.log(user);

  //console.log('строка пустая - ' + user.isEmpty);
  return (
    <div className="App">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Введіть нікнейм"
          value={user.value}
          onChange={e => user.onChange(e)}
          onBlur={e => user.onBlur(e)}
        />
        <button className="enter">Ввійти</button>

        {/** Як тут мені підставити цю розмітку під input вниз??? */}

        {(user.isDirty && user.isEmpty) && <div id='errors' >Поле не может быть пустым</div>}
        {(user.isDirty && user.minLengthError) && <div id='errors' >Длина не может быть меньше {user.minLength}</div>}
      </div>

    </div >
  );
}

export default App;
