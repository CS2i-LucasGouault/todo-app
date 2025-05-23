import { useContext } from "preact/hooks";
import { TaskContext } from "../app";
import type { Task, TaskContextInterface } from "../interfaces/Task";

export function FormAddTask() {
    const taskContext = useContext<TaskContextInterface>(TaskContext);

    let addTask = () => {
        let input = document.getElementById("taskInput") as HTMLInputElement;
        let task = input.value;

        let newId = taskContext.tasks.length > 0 ? taskContext.tasks[taskContext.tasks.length - 1].id + 1 : 1;

        if (task) {
            taskContext.setTasks([...taskContext.tasks, { id: newId, label: task, status: "todo" }]);
            input.value = "";
        }
    }

    return <>
        <div class="row">
            <div class="col-md-10">
                <input type="text" class="form-control w-100" id="taskInput" placeholder="Enter a task" />
            </div>
            <div class="col-md-2">
                <button class="btn btn-outline-success mb-3" onClick={addTask}>Add</button>
            </div>
        </div>
    </>
}