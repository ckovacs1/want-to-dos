import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { completeTodo, getTodos } from '../api/todo';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (e) {
      // throw exception
      if (e.response.data.error === 'toDo not found') {
        setTodos([]);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // called when mounted

  const setCompleteTodo = async (id, repeatIdx) => {
    try {
      const data = { repeatIdx };
      const response = await completeTodo(id, data);

      setTodos(
        todos.map(todo =>
          todo._id === id && todo.repeatIdx === repeatIdx
            ? { ...todo, complete: !todo.complete }
            : todo,
        ),
      );
    } catch (e) {
      toast.error('Error');
    }
  };

  const onClickComplete = (id, repeatIdx = null) => {
    setCompleteTodo(id, repeatIdx);
  };

  return { todos, fetchTodos, onClickComplete };
};

export default useTodos;
