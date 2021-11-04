import React from 'react';

import Task from '../components/Task/Task'
import { TaskParams } from '../components/Task/Task'

interface TasksProps {
    tasks: any
}

const Tasks = ({tasks}: any) => {
    return(
        <div>
            {

                tasks.map((task: any) => (
                    <Task 
                    description={task.description}
                    completed={task.completed}
                    />
                ))
            }
        </div>
        

    )
}

export default Tasks;