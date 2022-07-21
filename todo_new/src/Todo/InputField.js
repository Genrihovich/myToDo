
import Input from '../components/Input';
import Button from '../components/Button';
import './InputField.css';

const InputField = ({ textTodo, setText, addTodo }) => {

    return (
        <div className='InputField'>
            <Input
                id="text"
                type="text"
                className='todo-InputField'
                label="Ввод Todo"
                placeholder='Ввод нового Todo'
                value={textTodo}
                onChange={setText}
            //   onKeyPress={this.handleKeyPress}
            />
            <Button
                className='btn-InputField'
                // className="btn btn-outline-success"
                children='Добавити'
                onClick={addTodo}
            />
        </div>
    )

}

export default InputField
