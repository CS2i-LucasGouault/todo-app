import { type ReactNode } from "preact/compat";
import type { Task } from "../interfaces/Task";
import { StatusChangerButton } from "./StatusChangerButton";

export function TaskList({ tasks }: { tasks: Task[] }) {
    return <>
        <table class="table table-striped">
            <tbody class="table-group-divider">
                {
                    tasks.map(
                        (task) => {
                            let buttons: ReactNode = <></>;

                            if (task.status === "todo") {
                                buttons = <>
                                    <StatusChangerButton task={task} newStatus="doing" />
                                    <StatusChangerButton task={task} newStatus="done" />
                                </>
                            } else if (task.status === "doing") {
                                buttons = <>
                                    <StatusChangerButton task={task} newStatus="todo" />
                                    <StatusChangerButton task={task} newStatus="done" />
                                </>
                            }

                            let taskClass = "w-100 align-middle";

                            if(tasks[0].status == "done") {
                                taskClass += " text-decoration-line-through";
                            }

                            return <>
                                <tr key={task.id}>
                                    <td class={taskClass}>{task.label}</td>
                                    <td>
                                        <div class="btn-group">
                                            {buttons}
                                        </div>
                                    </td>
                                </tr>
                            </>
                        }
                    )
                }
            </tbody>
        </table>
    </>
}