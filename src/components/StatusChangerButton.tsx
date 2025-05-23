import { TaskStatus, type Task } from "../interfaces/Task";

export function StatusChangerButton({ allTasks, task, setTasks, newStatus } : { allTasks: Task[], task: Task, setTasks: (tasks: Task[]) => void, newStatus: TaskStatus }) {
    let changeStatus = () => {
        let newTasks = allTasks.map((t) => t.id === task.id ? { ...t, status: newStatus } : t);
        setTasks(newTasks);
    }

    let buttonClass = "btn btn-sm btn-outline-" + (newStatus === "done" ? "success" : newStatus === "doing" ? "warning" : "primary");
    let buttonLabel = newStatus == "todo" ? "❌" : TaskStatus[newStatus].label;
    let buttonTitle = "Mark as " + newStatus;

    return <>
        <button title={buttonTitle} class={buttonClass} onClick={changeStatus}>{buttonLabel}</button>
    </>
}