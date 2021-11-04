import React from 'react';

import Task from '../components/Task/Task'
import { TaskParams } from '../components/Task/Task'



const Tasks = (tasks: TaskParams[]) => {
    return(
        tasks.map((task) => (
            <Task 
            name={task.title}
            description={task.description}
            completed={task.completed}
            />
        )

    )
}

export default Tasks;