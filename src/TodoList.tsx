import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TodoHeader } from './components/todo/TodoHeader';
import { TodoSearch } from './components/todo/TodoSearch';
import { TodoProgressBar } from './components/todo/TodoProgressBar';
import { TodoListContainer } from './components/todo/TodoListContainer';

const TodoList = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="mx-auto max-w-2xl">
        <TodoHeader />
        <TodoSearch />
        <TodoProgressBar />
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-700">
              Tareas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TodoListContainer />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { TodoList };
