import { useState } from "preact/hooks";
import { FormAddTask } from "./components/FormAddTask";
import { LittleCounter } from "./components/LittleCounter";
import type { Task } from "./interfaces/Task";
import { ResetButton } from "./components/ResetButton";
import { TaskTable } from "./components/TaskTable";
import { TaskList } from "./components/TaskList";

export function App() {
	let [tasks, setTasks] = useState<Task[]>(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")!) : []);

	function handleSetTasks(newTasks: Task[]) {
		localStorage.setItem("tasks", JSON.stringify(newTasks));
		setTasks(newTasks);
	}

	let [todoTasks, doingTasks, doneTasks] = [
		tasks.filter(task => task.status === "todo"),
		tasks.filter(task => task.status === "doing"),
		tasks.filter(task => task.status === "done")
	]

	let [todoTasksJsx, doingTasksJsx, doneTasksJsx] = [<></>, <></>, <></>]

	if (todoTasks.length > 0) {
		todoTasksJsx = <>
			<h3>➡️ Todo</h3>
			<TaskList allTasks={tasks} tasks={todoTasks} setTasks={handleSetTasks} />
		</>
	}
	if (doingTasks.length > 0) {
		doingTasksJsx = <>
			<h3>⌛ In Progress</h3>
			<TaskList allTasks={tasks} tasks={doingTasks} setTasks={handleSetTasks} />
		</>
	}
	if (doneTasks.length > 0) {
		doneTasksJsx = <>
			<h3>✅ Done</h3>
			<TaskList allTasks={tasks} tasks={doneTasks} setTasks={handleSetTasks} />
		</>
	}

	return <>
		<div class="container">
			<div class="row mt-3">
				<div class="col-md-4">
					<h2>Todo List</h2>
					<LittleCounter count={tasks.length} />
					<FormAddTask tasks={tasks} setTasks={handleSetTasks} />
					{todoTasksJsx}
					{doingTasksJsx}
					{doneTasksJsx}
				</div>
				<div class="col-md-8">
					<h1>Task App</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum blanditiis provident, nemo nisi accusantium in, earum vero harum asperiores consectetur, praesentium fugit illum quis aut officiis similique dicta cupiditate laudantium dolorum. Dolor, dolore voluptate ipsum officia omnis laudantium repellendus, repellat fugit saepe ea suscipit culpa adipisci at qui? Dolores, quae!</p>
					<ResetButton setTasks={handleSetTasks} />
					<h2>Tasks</h2>
					<TaskTable tasks={tasks} />
				</div>
			</div>
		</div>
	</>
}
