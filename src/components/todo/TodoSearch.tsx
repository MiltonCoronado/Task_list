import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useTodos } from '../hooks/useTodos';

const TodoSearch = () => {
  const { inputValue, setInputValue, handleKeyPress, addTodo } = useTodos();

  return (
    <Card className="mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex gap-2">
          <Input
            placeholder="Añade una nueva tarea..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
          />
          <Button
            onClick={addTodo}
            className="bg-slate-800 hover:bg-slate-700 text-white px-4"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { TodoSearch };
