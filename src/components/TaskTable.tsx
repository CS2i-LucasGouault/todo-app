import { useContext } from "preact/hooks";
import { type TaskContextInterface, TaskStatus } from "../interfaces/Task";
import { TaskContext } from "../app";

export function TaskTable() {
    const taskContext = useContext<TaskContextInterface>(TaskContext);

    return <>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">label</th>
                    <th scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {taskContext.tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.label}</td>
                        <td>{TaskStatus[task.status].label}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}