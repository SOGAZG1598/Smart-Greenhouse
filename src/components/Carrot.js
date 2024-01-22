import React, {Component} from "react";
import StartFirebase from '../api/firebaseConfig';
import { ref, onValue, child } from "firebase/database";
import {Table} from 'react-bootstrap'



const db = StartFirebase();

export class Carrot extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }

    componentDidMount(){
        const dbRef=ref(db,`planta/1/timestamp`);
        onValue(dbRef,(snapshot)=>{
            let record=[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                //const { humidity, light, temperature } = childSnapshot.val();
                let data = childSnapshot.val();
                console.log(data);
                record.push({"key":keyName, "data":data});
            });
            this.setState({tableData:record});
        });
    }

    render(){
        return(
            <Table className="table table-hover">
                <thead className="thead-light">
                        <th>#</th>
                        <th>Date</th>
                        <th>Humidity</th>
                        <th>Light</th>
                        <th>Temperature</th>
                </thead>

            <tbody className="table-group-divider">
                {this.state.tableData.map((row, index)=>{
                    return(
                    <tr>
                        <td>{row.key}</td>
                        <td>{row.data.date}{row.data.fecha}</td>
                        <td>{row.data.humidity}</td>
                        <td>{row.data.light.toString()}</td>
                        <td>{row.data.temperature}</td>
                    </tr>
                )
                })}
            </tbody>
        </Table>
            
        )
    }

}