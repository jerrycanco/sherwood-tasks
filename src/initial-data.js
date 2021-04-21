const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Allowance Payment Request' },
      'task-2': { id: 'task-2', content: 'Reunion Travel' },
      'task-3': { id: 'task-3', content: 'AB189 For Consumables' },
      'task-4': { id: 'task-4', content: 'Recredit of Leave' },
      'task-5': { id: 'task-5', content: 'Exercise Planning Manifest' },
      'task-6': { id: 'task-6', content: 'Promotion Ceremony Planning' },
      'task-7': { id: 'task-7', content: 'DCAC Access Request' },
      'task-8': { id: 'task-8', content: 'BS20 IPC' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Backlog',
        taskIds: ['task-1', 'task-2', 'task-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Processing',
        taskIds: ['task-4'],
      },
      'column-3': {
        id: 'column-3',
        title: 'Rejected - Formatting',
        taskIds: ['task-5', 'task-6'],
      },
      'column-4': {
        id: 'column-4',
        title: 'Forwarded',
        taskIds: ['task-7'],
      },
      'column-5': {
        id: 'column-5',
        title: 'Done',
        taskIds: ['task-8'],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
  };
  
  export default initialData;