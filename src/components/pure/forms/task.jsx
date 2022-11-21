import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class'


const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Apellido: {task.lastname}
            </h3>
            <h4>
                Email: {task.level}
            </h4>
            <h5>
                Conectado: {task.completed ? 'COMPLETED':'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

