import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
    { id: 1, text: 'walk the dog', completed: false },
    { id: 2, text: 'walk the fish', completed: true },
    { id: 3, text: 'take out the trash', completed: false },
    { id: 4, text: 'make dinner', completed: true },
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        })
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            });
        });
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)}/>
            ))}
            <TodoForm/>
        </List>
    )
}


// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;

//                 return (
//                     <ListItem
//                         key={value}
//                         secondaryAction={
//                             <IconButton edge="end" aria-label="comments">
//                                 <CommentIcon />
//                             </IconButton>
//                         }
//                         disablePadding
//                     >
//                         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={checked.includes(value)}
//                                     tabIndex={-1}
//                                     disableRipple
//                                     inputProps={{ 'aria-labelledby': labelId }}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//                         </ListItemButton>
//                     </ListItem>
//                 );
//             })}
//         </List>
//     );
// }