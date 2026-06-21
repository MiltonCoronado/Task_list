import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useTodos } from '../../hooks/useTodos';

interface TodoId {
  id: number;
}

//FC<TodoId> otra forma de desestructurar props.
const TodoButton = ({ id }: TodoId) => {
  const { deleteTodo } = useTodos();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => deleteTodo(id)}
      className="text-slate-400 hover:text-red-500 hover:bg-red-50 h-8 w-8 p-0"
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
};

export { TodoButton };
