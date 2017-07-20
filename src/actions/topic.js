export function getTopics() {
  return {
    type: 'GET_TOPICS',
  }
}


export function addTopic(rawTopic) {
  const topic =Object.assign(rawTopic, {
    created_at: Date.now(),
    id: 'TP' + Date.now(),
    upvote: 0,
    downvote: 0
  });

  return {
    type: 'ADD_TOPIC',
    topic
  }
}

export function resetAddTopic() {
  return {
    type: 'RESET_ADD_TOPIC'
  }
}


export function upVoteTopic(id) {
  return {
    type: 'UP_VOTE_TOPIC',
    id
  }
}

export function downVoteTopic(id) {
  return {
    type: 'DOWN_VOTE_TOPIC',
    id
  }
}
