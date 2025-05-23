import { useContext } from "preact/hooks";
import { TaskContext } from "../app";
import type { Task, TaskContextInterface } from "../interfaces/Task";

export function ResetButton() {
    const taskContext = useContext<TaskContextInterface>(TaskContext);

    let resetTasks = () => {
        taskContext.setTasks([]);
    }

    return <>
        <button class="btn btn-outline-warning m-2" onClick={resetTasks}>Reset</button>
    </>
}