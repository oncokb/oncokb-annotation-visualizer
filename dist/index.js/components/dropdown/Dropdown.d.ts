import React from 'react';
import './Dropdown.scss';
import { ColumnOption } from '../../config/constants';
interface DropdownProps {
    options: ColumnOption[];
    selectedOptions: string[];
    onChange: (selectedOptions: ColumnOption[]) => void;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map