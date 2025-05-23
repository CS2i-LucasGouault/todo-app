import { TaskStatus, type Task } from "../interfaces/Task";

export function TaskTable({ tasks }: { tasks: Task[] }) {
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
                {tasks.map((task) => (
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