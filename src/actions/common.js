export function showNotification(message = '', type = '') {
  const notification = document.getElementById('js-notification');

  if (notification) {
    notification.innerText = message;
    notification.classList.add('notification-show');

    if (type) {
      notification.classList.add(type);
    }
  }
}

export function hideNotification() {
  const notification = document.getElementById('js-notification');

  if (notification) {
    notification.classList.remove('notification-show');
  }
}

export function addNotification() {
  const body = document.createElement('div');
  body.setAttribute('id', 'js-notification');
  body.classList.add('notification');

  document.body.appendChild(body);
}

export function sortTopics(topics) {
  return topics.sort((a, b) => ( b.upvote - a.upvote ));
}
