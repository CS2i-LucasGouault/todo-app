import { useContext } from "preact/hooks";
import { TaskContext } from "../app";
import { TaskStatus, type Task, type TaskContextInterface } from "../interfaces/Task";

export function StatusChangerButton({ task, newStatus } : { task: Task, newStatus: TaskStatus }) {
    const taskContext = useContext<TaskContextInterface>(TaskContext);
    
    let changeStatus = () => {
        let newTasks = taskContext.tasks.map((t) => t.id === task.id ? { ...t, status: newStatus } : t);
        taskContext.setTasks(newTasks);
    }

    let buttonClass = "btn btn-sm btn-outline-" + (newStatus === "done" ? "success" : newStatus === "doing" ? "warning" : "primary");
    let buttonLabel = newStatus == "todo" ? "❌" : TaskStatus[newStatus].label;
    let buttonTitle = "Mark as " + newStatus;

    return <>
        <button title={buttonTitle} class={buttonClass} onClick={changeStatus}>{buttonLabel}</button>
    </>
}