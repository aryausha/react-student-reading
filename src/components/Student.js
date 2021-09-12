import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class Student extends Component {
    state={
        name:"",
        rollno:"",
        admnno:"",
        college:""
    }
    onSubmit=()=>{
        console.log(this.state)
    }
    onHandle=(event)=>{
        this.setState({
            [event.target.name]:event.target.value

        })
        
    }
    render() {
        return (
            <div>
                <TextField 
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="name"
                type="text"
                placeholder="enter your name"
                onChange={this.onHandle}
                />

                <TextField 
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="rollno"
                type="number"
                placeholder="enter the roll no"
                onChange={this.onHandle}
                
                />
                
                <TextField 
                 variant="outlined"
                 margin="normal"
                 fullWidth
                 required
                 name="admnno"
                 type="text"
                 placeholder="enter the admission number"
                 onChange={this.onHandle}

                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="college"
                type="text"
                placeholder="enter the college"
                onChange={this.onHandle}

                />
                <Button variant="contained"
                margin="normal"
                fullWidth
                type="button"
                color="secondary"
                onClick={this.onSubmit}>login</Button>
            </div>
        )
    }
}
