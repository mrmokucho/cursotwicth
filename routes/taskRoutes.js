import express from 'express';
import TaskController from '../controllers/taskController.js';


const router = express.Router();

router.get('/', TaskController.getAllTask);
router.get('/:taskId', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);

export default router;