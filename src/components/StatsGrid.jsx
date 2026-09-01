import { Zap,CheckCircle } from 'lucide-react';
const StatsGrid = ({totalTodos,activeTodos,totalCompleted}) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="backdrop-blur-2xl bg-linear-to-br from-violet-500/20 to-green-500/20 rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center mb-1 gap-2">
                        <Zap size={16} className="text-violet-400" />
                        <span className="text-violet-300 text-xs font-semibold">Total</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{totalTodos}</div>
                </div>
                <div className="backdrop-blur-2xl bg-linear-to-br from-green-600/20 to-green-500/20 rounded-2xl border border-green-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center mb-1 gap-2">
                        {/* <Zap size={16} className="text-violet-400" /> */}
                        <div className="w-4 h-4 rounded-full border-2 border-green-400"></div>
                        <span className="text-green-300 text-xs font-semibold">Active</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{activeTodos}</div>
                </div>
                <div className="backdrop-blur-2xl bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl border border-emerald-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center mb-1 gap-2">
                        <CheckCircle size={16} className="text-emerald-400" />
                        <span className="text-emerald-300 text-xs font-semibold">Done</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{totalCompleted}</div>
                </div>
            </div>
        </>
    )
}
export default StatsGrid