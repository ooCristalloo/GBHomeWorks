import * as React from 'react';
import FormControl, {useFormControl} from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import {InputLabel} from "@mui/material";
import {useState} from "react";

const types = {
    1: "Введите температуру в цельсиях",
    2: "Введите температуру по фаренгейту",
}

function MyFormHelperText({value, type}) {
    if (!isNaN(value)) {
        return <FormHelperText>{convert(value, type) || "0"}</FormHelperText>
    } else {
        return <FormHelperText>{"Введите число"}</FormHelperText>
    }
}

function convert(value, type) {
    if (type === 1) {
        return (value * (9 / 5)) + 32;
    } else {
        return (value - 32) * (5 / 9);
    }
}

export default function TemperatureConverter({type}) {
    const [value, setValue] = useState("")
    const label = types[type] || "Введите температуру"

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form noValidate autoComplete="off">
            <FormControl sx={{width: '25ch'}}>
                <InputLabel htmlFor={`temperature-input-${type}`}>{label}</InputLabel>
                <OutlinedInput id={`temperature-input-${type}`} placeholder="Ввести" label={label} value={value}
                               onChange={handleChange}/>
                <MyFormHelperText value={value} type={type}/>
            </FormControl>
        </form>
    );
}