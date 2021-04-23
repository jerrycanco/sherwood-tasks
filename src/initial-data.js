const initialData = {
    tasks: {
      'task-1': { id: 'task-1', title: 'Allowance Payment Request', tag: 'Admin' },
      'task-2': { id: 'task-2', title: 'Reunion Travel', tag: 'Routine' },
      'task-3': { id: 'task-3', title: 'AB189 For Consumables', tag: "Priority" },
      'task-4': { id: 'task-4', title: 'Recredit of Leave', tag: 'Routine' },
      'task-5': { id: 'task-5', title: 'Exercise Planning Manifest', tag: 'Training' },
      'task-6': { id: 'task-6', title: 'Promotion Ceremony Planning', tag: 'Operational' },
      'task-7': { id: 'task-7', title: 'DCAC Access Request', tag: 'Routine' },
      'task-8': { id: 'task-8', title: 'BS20 IPC', tag: 'Priority' },
      'task-9': { id: 'task-9', title: 'BS20 IPC', tag: 'Priority' },
      'task-10': { id: 'task-10', title: 'BS20 IPC', tag: 'Priority' },
      'task-11': { id: 'task-11', title: 'BS20 IPC', tag: 'Priority' },
      'task-12': { id: 'task-12', title: 'BS20 IPC', tag: 'Priority' },
      'task-13': { id: 'task-13', title: 'BS20 IPC', tag: 'Priority' },
      'task-14': { id: 'task-14', title: 'BS20 IPC', tag: 'Priority' },
      'task-15': { id: 'task-15', title: 'BS20 IPC', tag: 'Priority' },
      'task-16': { id: 'task-16', title: 'BS20 IPC', tag: 'Priority' },
      'task-17': { id: 'task-17', title: 'BS20 IPC', tag: 'Priority' },
      'task-18': { id: 'task-18', title: 'BS20 IPC', tag: 'Priority' },
      'task-19': { id: 'task-19', title: 'BS20 IPC', tag: 'Priority' },
      'task-20': { id: 'task-20', title: 'BS20 IPC', tag: 'Priority' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Backlog',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14', 'task-15', 'task-16', 'task-17', 'task-18', 'task-19', 'task-20'],
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
        taskIds: [],
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