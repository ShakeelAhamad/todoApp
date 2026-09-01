import TodoItem from "./TodoItem";
import { Sparkles } from 'lucide-react';

const TodoList = ({todos,editingId,editText,onStartEdit,onSaveEdit,onCancelEdit,onEditTextChange,onEditKeyPress,onToggle,onDelete}) => {
    if (todos.length === 0) {
        return (
            <>
                <div className="text-center py-16 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/0">
                    <div className="w-16 h-16 bg-linear-to-br from-green-400/20 to-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Sparkles size={32} className=" text-green-300" />
                    </div>
                    <p className=" text-white/90 text-base font-semibold mb-1">No Task Yet</p>
                    <p className=" text-white/50 text-sm">Create your first task to get started</p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="space-y-2">
                {
                    todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            index={index}
                            editingId={editingId}
                            editText={editText}
                            onToggle={onToggle}
                            onStartEdit={onStartEdit}
                            onSaveEdit={onSaveEdit}
                            onCancelEdit={onCancelEdit}
                            onDelete={onDelete}
                            onEditTextChange={onEditTextChange}
                            onEditKeyPress={onEditKeyPress}
                        />
                    ))
                }
            </div>
        </>
    )
}
export default TodoList