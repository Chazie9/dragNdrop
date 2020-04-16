const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out garbage' },
        'task-2': { id: 'task-2', content: 'something something' },
        'task-3': { id: 'task-3', content: 'something something something' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3']
        },
    },
    // Faciliate recordering of the columns
    columnOrder: ['column-1'],
};

export default initialData