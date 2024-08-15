import React from 'react';
import { RCTooltip } from 'rc-tooltip';
declare type IconType = 'info' | 'question' | 'description';
declare const InfoIcon: React.FunctionComponent<{
    overlay?: (() => React.ReactChild) | React.ReactChild | React.ReactFragment | React.ReactPortal;
    overlayClassName?: string;
    placement?: RCTooltip.Placement;
    style?: React.CSSProperties;
    type?: IconType;
    className?: string;
}>;
export default InfoIcon;
//# sourceMappingURL=InfoIcon.d.ts.map