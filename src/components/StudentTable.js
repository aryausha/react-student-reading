import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class StudentTable extends Component {
    state={
        student:[
            {name: "ajay", rollno: "11", admnno: "4415", college: "bmc"},
            {name: "arya", rollno: "12", admnno: "4416", college: "younnus"},
            {name: "devu", rollno: "13", admnno: "4417", college: "vkcet"},
            {name: "shambhu", rollno: "14", admnno: "4418", college: "mes"},
            {name: "revu", rollno: "15", admnno: "4419", college: "ukf"}
        ]
    }
    render() {
        return (
            // <Grid container>
            //     <Grid items xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
            //     <Grid items xs={12} sm={12} md={4} lg={4} xl={4}>
                
            //     </Grid>
            //     <Grid items xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
            // </Grid>
            <div>
                <Typography align="center">Student Record</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>sl.no</TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>rollno</TableCell>
                                <TableCell>admnno</TableCell>
                                <TableCell>college</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                    
                                {this.state.student.map(
                                    (value,index)=>{
                                        return <TableRow>
                                            <TableCell>{index}</TableCell>
                                            <TableCell>{value.name}</TableCell>
                                            <TableCell>{value.rollno}</TableCell>
                                            <TableCell>{value.admnno}</TableCell>
                                            <TableCell>{value.college}</TableCell>

                                        </TableRow>

                                    }

                                )}
                            
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
           
        )
    }
}
