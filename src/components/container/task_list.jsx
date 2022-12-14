import React, {useState,useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTaks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('Takslist component is going to unmount...');
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estao de una tarea');
    }
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* Aplicar un For/map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
