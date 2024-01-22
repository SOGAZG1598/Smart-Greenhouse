import StartFirebase from '../api/firebaseConfig';
import { ref, onValue, child } from "firebase/database";
import {Table} from 'react-bootstrap'
import {FaRegCheckCircle, FaRegCircle } from "react-icons/fa";


import React, {Component} from "react";


const db = StartFirebase();

export class Actuators extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }

    componentDidMount(){
        const dbRef=ref(db,`actuators/` );
        onValue(dbRef,(snapshot)=>{
            let record=[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                
                record.push({"key":keyName, "data":data});
            });
            this.setState({tableData:record});
        });
    }

    render(){
        return(
            <Table className="table">
            <tbody>
                {this.state.tableData.map((row, index)=>{
                    return(
                    <tr>
                        <td>{row.data.name}</td>
                        <td>{row.data.on.toString()}</td>
                    </tr>
                )
                })}
            </tbody>
        </Table>
            
        )
    }

}