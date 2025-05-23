import type { ReactNode } from "preact/compat";
import type { Task } from "../interfaces/Task";
import { StatusChangerButton } from "./StatusChangerButton";

export function TaskList({ allTasks, tasks, setTasks }: { allTasks: Task[], tasks: Task[], setTasks: (tasks: Task[]) => void }) {

    let buttons: ReactNode = <></>;

    if (tasks.length > 0) {
        if (tasks[0].status === "todo") {
            buttons = <>
                <StatusChangerButton allTasks={allTasks} task={tasks[0]} setTasks={setTasks} newStatus="doing" />
                <StatusChangerButton allTasks={allTasks} task={tasks[0]} setTasks={setTasks} newStatus="done" />
            </>
        } else if (tasks[0].status === "doing") {
            buttons = <>
                <StatusChangerButton allTasks={allTasks} task={tasks[0]} setTasks={setTasks} newStatus="todo" />
                <StatusChangerButton allTasks={allTasks} task={tasks[0]} setTasks={setTasks} newStatus="done" />
            </>
        }
    }

    let taskClass = "w-100 align-middle";

    if(tasks.length > 0 && tasks[0].status == "done") {
        taskClass += " text-decoration-line-through";
    }

    return <>
        <table class="table table-striped">
            <tbody class="table-group-divider">
                {
                    tasks.map((task) => (
                        <tr key={task.id}>
                            <td class={taskClass}>{task.label}</td>
                            <td>
                                <div class="btn-group">
                                    {buttons}
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}