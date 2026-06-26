import { Checkbox } from '@/components/ui/checkbox';
import { useTodos } from '../../hooks/useTodos';
import { TodoButton } from './TodoButton';

const TodoItems = () => {
  const { todos, toggleTodo } = useTodos();

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
            todo.completed
              ? 'bg-slate-50 text-slate-400'
              : 'bg-white text-slate-400 hover:border-slate-300 hover:shadow-sm'
          }`}
        >
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
          />
          <span
            className={`flex-1 transition-all duration-200 ${
              todo.completed ? 'text-slate-500 line-through' : 'text-slate-800'
            }`}
          >
            {todo.text}
          </span>
          <TodoButton id={todo.id} />
        </div>
      ))}
    </div>
  );
};

export { TodoItems };
