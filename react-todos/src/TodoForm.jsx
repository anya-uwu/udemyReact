import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField'
import Create from '@mui/icons-material/Create'
import {InputAdornment} from '@mui/material'
import {IconButton} from '@mui/material'
import { useState } from 'react';

export default function TodoForm() {
    const [text, setText] = useState('')
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    return (
        <ListItem>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} value={text} endAdornment={<InputAdornment position="end">
                <IconButton
                    aria-label=''
                    edge="end"
                >
                    <Create />
                </IconButton>
            </InputAdornment>} />
        </ListItem>
    )
}

