import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTasks} from '../slices/tasksSlice';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
      <div>
        <h1>Tasks list</h1>
        {tasks.length === 0 ? (
            <p>Loading...</p>
        ) : (
            <ul>
              {tasks.map((task) => (
                  <li key={task.id}>
                    <p> {task.title}</p>
                    {task.completed ? <span style={{color: 'green'}}>Сompleted!</span> :
                        <span style={{color: 'red'}}>Not completed!</span>}
                  </li>

              ))}
            </ul>
        )}
      </div>
  );
}

export default TasksList;