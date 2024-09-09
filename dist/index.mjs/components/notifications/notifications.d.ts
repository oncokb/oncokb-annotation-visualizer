import React from 'react';
import './styles.scss';
interface NotificationImplication {
    message: string;
    type: 'danger' | 'primary' | 'warning' | 'success';
}
interface NotificationProps {
    notifications: NotificationImplication[];
}
declare const Notification: React.FC<NotificationProps>;
export default Notification;
//# sourceMappingURL=notifications.d.ts.map