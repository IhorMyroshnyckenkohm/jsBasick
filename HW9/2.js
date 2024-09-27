function groupNotificationsBySource(notifications) {
    return notifications.reduce((acc, notification) => {
        const { source } = notification;
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push(notification);
        return acc;
    }, {});
}

// Приклад використання
const notifications = [
    { source: 'email', text: 'New email from John', date: '2024-09-26' },
    { source: 'sms', text: 'Message from Mom', date: '2024-09-27' },
    { source: 'email', text: 'Newsletter', date: '2024-09-25' },
    { source: 'app', text: 'Update available', date: '2024-09-27' }
];

console.log(groupNotificationsBySource(notifications));
/*
{
  email: [
    { source: 'email', text: 'New email from John', date: '2024-09-26' },
    { source: 'email', text: 'Newsletter', date: '2024-09-25' }
  ],
  sms: [
    { source: 'sms', text: 'Message from Mom', date: '2024-09-27' }
  ],
  app: [
    { source: 'app', text: 'Update available', date: '2024-09-27' }
  ]
}
*/
