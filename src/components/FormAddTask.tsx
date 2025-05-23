import type { Task } from "../interfaces/Task";

export function FormAddTask({ tasks, setTasks }: { tasks: Task[], setTasks: (tasks: Task[]) => void }) {
    let addTask = () => {
        let input = document.getElementById("taskInput") as HTMLInputElement;
        let task = input.value;

        let newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        if (task) {
            setTasks([...tasks, { id: newId, label: task, status: "todo" }]);
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