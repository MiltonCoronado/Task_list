import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//store Singleton
let todos: Todo[] = [];
let inputValue: string = '';

//suscription system to send components masagge
const listeners = new Set<() => void>();
const notifyListeners = () => listeners.forEach((listener) => listener());

const useTodos = () => {
  const [, setRerender] = useState(0);

  useEffect(() => {
    const listener = () => setRerender((value) => value + 1);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setInputValue = (value: string) => {
    inputValue = value;
    notifyListeners();
  };

  const addTodo = () => {
    if (inputValue.length === 0) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    todos = [...todos, newTodo];
    inputValue = '';
    notifyListeners();
  };

  const toggleTodo = (id: number) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    notifyListeners();
  };

  const deleteTodo = (id: number) => {
    todos = todos.filter((todo) => todo.id !== id);
    notifyListeners();
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return {
    //properties
    todos,
    inputValue,
    //methods
    setInputValue,
    addTodo,
    toggleTodo,
    deleteTodo,
    handleKeyPress,
    //computed
    totalCount: todos.length,
    completedCount: todos.filter((todo) => todo.completed).length,
  };
};

export { useTodos };
export type { Todo };
