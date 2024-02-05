class TaskView{
    static generateStringData(task){
        return {
            id:  task._id, 
            name: task.name,
            description: task.description,
            status: task.status,
            completed: task.completed
        }
    }

}

export default TaskView;