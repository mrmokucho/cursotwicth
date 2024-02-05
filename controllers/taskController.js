import TaskModel from '../models/taskModel.js';
import TaskView from '../views/taskView.js';

class TaskController{

    static async getAllTask(req, res) {
        try{
            const tasks = await TaskModel.find();
            if(tasks.length === 0){
                return res.status(401).json({message: 'No task found'})
            };
            const tasksFormated = tasks.map(task => TaskView.generateStringData(task));
            return res.status(200).json(tasksFormated);
        } catch(error){
            res.status(500).json({error: error.message});
        }
    }

    static async createTask(req, res) {
        const {name, description, status, completed } = req.body;
        try{
            const newTask = await TaskModel.create({name, description, status, completed});
            const newDataFormated = TaskView.generateStringData(newTask);
            res.status(201).json(newDataFormated);
        } catch(error){
            res.status(500).json({error: error.message});
        }
    }

    static async getTaskById(req, res){
        const taskId = req.params.taskId;
        try{
            const task = await TaskModel.findById(taskId);
            if(!task){
                return res.status(404).json({message: `La tarea con el ID ${taskId} no existe.`});
            }
            const taskFormated = TaskView.generateStringData(task);
            res.status(201).json(taskFormated);
        } catch(error){
            res.status(500).json({error: error.message});
        }
    }

    //updateTask
    static async updateTask (req, res){
        const taskId = req.params.taskId;
        const {name, description, status, completed } = req.body;
        try{
            const updatedTask = await TaskModel.findByIdAndUpdate(
                taskId,
                {name, description, status, completed },
                {new: true}
            );

            if(!updatedTask){
                return res.status(404).json({message:'La tarea no ha sido encontrada'});
            }
            const dataTransformed = TaskView.generateStringData(updatedTask);
            res.status(200).json(dataTransformed);
        } catch(error){
            res.status(500).json({error: error.message});
        }
    }

    //deleteTask
    static async deleteTask (req, res){
        const taskId = req.params.taskId;
        try{
            const deletedTask = await TaskModel.findByIdAndDelete(taskId);
            if(!deletedTask){
                return res.status(404).json({message:'La tarea no ha sido encontrada'});
            }
            res.status(200).json({message: 'Tarea eliminada exitosamente', deletedTask: TaskView.generateStringData(deletedTask)});
        } catch(error){
            res.status(500).json({error: error.message});
        }
    }

}
export default TaskController;