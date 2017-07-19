
const initState = {
  topics: []
};

const topic = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TOPIC': {
      const topics = state.topics;
      topics.push(action.topic);

      return Object.assign({}, state, {
        topics
      });
    }
    default:
      return state;
  }
}

export default topic;
