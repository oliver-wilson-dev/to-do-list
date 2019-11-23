const getInitialState = () => ({
  toDos: [{
    description: 'Go shopping',
    id: Symbol('to-do-item')
  }, {
    description: 'Walk the dogs',
    id: Symbol('to-do-item')
  },
  {
    description: 'Buy Christmas gifts',
    id: Symbol('to-do-item')
  },
  {
    description: 'Book car MOT',
    id: Symbol('to-do-item')
  },
  {
    description: 'Go to the bank',
    id: Symbol('to-do-item')
  }]
});

export default getInitialState;
