// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import './todo.css';

function TodoList() {

    const [todoList, setTodoList] = useState([]);

    const saveTodoList = (event) => {
        // eslint-disable-next-line no-unused-vars
        let toname = event.target.toname.value;

        
        if (!todoList.includes(toname)) {
            let finalDolist = [...todoList, toname];
            setTodoList(finalDolist);
            event.target.toname.value = '';
        } else {
            alert("TodoName Already Exists.....")
        }
        event.preventDefault();
    }

    // eslint-disable-next-line no-unused-vars
    let list = todoList.map((value, index) => {
       return(
        // eslint-disable-next-line react/jsx-key
        <TodoListItem value={value} key={index}  indexnumber={index}  todoList={todoList}
        setTodoList={setTodoList} />
       )
    })
    return (
        <div className='App'>
            <h1>Todo List</h1>
            <form onSubmit={saveTodoList}>
                <input type='text' name='toname' />
                <button>Save</button>
            </form>
            <div className='outerdiv'>
                <ul>
                {list}
                </ul>
            </div>

        </div>
    )
}

export default TodoList

// eslint-disable-next-line react/prop-types, no-unused-vars
function TodoListItem({value,indexnumber,todoList,setTodoList}) {
    const [status,setStatus]=useState(false);
    const deleteRow=()=>{
        // eslint-disable-next-line react/prop-types
        let finalData= todoList.filter((v,i)=>i!=indexnumber)
          setTodoList(finalData)
    }
    const checkStatus=()=>{
        setStatus(!status)
    }
       return (
        <li className={status ? "completetodo" : ''}  onClick={checkStatus}>
         {indexnumber+1} {value}<span onClick={deleteRow}>&times;</span>
        </li>
    )
}