export interface Task {
    id: number;
    label: string;
    status: TaskStatus;
}

export type TaskStatus = keyof typeof TaskStatus;

export const TaskStatus = {
    "todo": {
        label: ""
    },
    "doing": {
        label: "⏳"
    },
    "done": {
        label: "✅"
    }
};

export interface TaskContextInterface {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}