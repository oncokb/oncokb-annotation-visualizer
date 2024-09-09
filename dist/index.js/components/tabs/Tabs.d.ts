import React, { ReactElement } from 'react';
import { TabProps } from './Tab';
import './styles.scss';
import { APIResponse, NotificationImplication, PatientInfo } from './../../config/constants';
interface TabsProps {
    children: ReactElement<TabProps>[];
    defaultActiveKey: string;
    id?: string;
    className?: string;
    lastUpdate?: string;
    dataVersion?: string;
    notifications?: NotificationImplication[];
    bgColor?: string;
    patientInfo: PatientInfo;
    responseList: APIResponse[];
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map