import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private TasksService: TasksService) {}

  @Post('/task')
  async create(@Res() res, @Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.TasksService.create(createTaskDto);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been submitted successfully!',
      task: newTask,
    });
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.TasksService.findAll();
  }
}
