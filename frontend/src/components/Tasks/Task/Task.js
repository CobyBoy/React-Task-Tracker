import { Card, CardContent, List, ListItem, TextField, Typography } from '@material-ui/core'
import React from 'react'

const Task = ({task:{taskText, taskDate}}) => {
    return (
        <Card>
            <CardContent>
                <Typography>
                    { taskText }  { taskDate }
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Task
