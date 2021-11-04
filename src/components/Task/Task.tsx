import React from 'react';

export interface TaskParams {
    title: string;
    description: string;
    completed: boolean
}

const Task = ({title, description, completed} : TaskParams): JSX.Element => {
    return(
        <div>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorem.</p>
            <p>Complete?</p>
        </div>
    )
}