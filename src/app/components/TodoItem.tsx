"use client"
type TodoItemProps={
    id: string;
    title: string;
    complete: boolean;
    toggleTodo : (id:string,complete:boolean)=> void
    deleteTodo : (id:string)=>void
}

export default function TodoItem({id, title, complete, toggleTodo, deleteTodo }:TodoItemProps){
    return <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        <div className={"flex gap-1 justify-end"}>
            <button type={"button"} onClick={() => deleteTodo(id)}
                    className={"border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"}>delete
            </button>
        </div>
    </li>
}