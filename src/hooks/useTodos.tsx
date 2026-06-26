import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//store Singleton
let todos: Todo[] = JSON.parse(localStorage.getItem('todos') ?? '[]');
let inputValue: string = '';

//suscription system
const listeners = new Set<() => void>();
const notifyListeners = () => listeners.forEach((item) => item());

const useTodos = () => {
  const [, setForceRerender] = useState(0);

  useEffect(() => {
    const listener = () => setForceRerender((value) => value + 1);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const savedStorage = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

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
    savedStorage(todos);
    notifyListeners();
  };

  const toggleTodo = (id: number) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    savedStorage(todos);
    notifyListeners();
  };

  const deleteTodo = (id: number) => {
    todos = todos.filter((todo) => todo.id !== id);
    savedStorage(todos);
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
