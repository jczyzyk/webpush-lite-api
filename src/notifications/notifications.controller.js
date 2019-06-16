const webpush = require('web-push');

const subscriptions = {};
const publicVapidKey = 'BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo';
const privateVapidKey = '3KzvKasA2SoCxsp0iIG_o9B0Ozvl1XDwI63JRKNIWBM';

webpush.setVapidDetails(
  'mailto:test@test.com',
  publicVapidKey,
  privateVapidKey,
);

const subscribe = async (subscription) => {
  if (subscription && subscription.endpoint) {
    const endpointParts = subscription.endpoint.split('/');
    if (endpointParts.length >= 6) {
      subscriptions[endpointParts[5]] = subscription;
      console.log(`New subscription received! - Total ${Object.keys(subscriptions).length}`);
    }
  }
};

const send = async () => {
  const payload = {
    title: 'MyCompany Title',
    body: 'See what\'s new!',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      type: 1,
      primaryKey: 1,
    },
  };
  for (const subscription of Object.values(subscriptions)) {
  // Pass object into sendNotification
    webpush
      .sendNotification(subscription, JSON.stringify(payload))
      .catch(err => console.error(err));
  }
};

module.exports = {
  subscribe,
  send,
};
