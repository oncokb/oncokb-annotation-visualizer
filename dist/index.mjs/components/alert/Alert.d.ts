import React from 'react';
import './Alert.scss';
export interface NotificationImplication {
    message: string;
    type: 'danger' | 'primary' | 'warning' | 'success';
}
interface AlertProps {
    notification: NotificationImplication;
}
export declare enum NotificationType {
    'danger' = "exclamation-circle",
    'primary' = "info-circle",
    'warning' = "exclamation-triangle",
    'success' = "check"
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map