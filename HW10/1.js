const notifications = {
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
};

notifications[Symbol.iterator] = function() {
    const sources = Object.values(this);
    let outerIndex = 0;
    let innerIndex = 0;

    return {
        next() {
            if (innerIndex >= sources[outerIndex]?.length) {
                outerIndex++;
                innerIndex = 0;
            }
            if (outerIndex >= sources.length) {
                return { done: true };
            }
            return { value: sources[outerIndex][innerIndex++], done: false };
        }
    };
};

for (const notification of notifications) {
    console.log(notification);
}
