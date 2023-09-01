import React, { useEffect} from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const SelectOptions = ({arrayList, idSelect, onChangeFunction, labelSelect}) => {

    return (
        <div>
            <InputLabel>{labelSelect}</InputLabel>
            <Select
                labelId=""
                id={idSelect}
                style={{
                    width: "100%",
                }}
            >
                <MenuItem disabled selected>
                 Seleccionar una opciòn:
                </MenuItem>
                {arrayList.map((item, index) => (
                    <MenuItem key={index} value={item} onChange={onChangeFunction}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}

export default SelectOptions;