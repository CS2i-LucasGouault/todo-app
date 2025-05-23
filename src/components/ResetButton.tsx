import type { Task } from "../interfaces/Task";

export function ResetButton({ setTasks }: { setTasks: (tasks: Task[]) => void }) {
    let resetTasks = () => {
        setTasks([]);
    }

    return <>
        <button class="btn btn-outline-warning m-2" onClick={resetTasks}>Reset</button>
    </>
}