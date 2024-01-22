import React, {Component} from "react";
import StartFirebase from '../api/firebaseConfig';
import { ref, onValue, child } from "firebase/database";
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap'


import { FaArchive } from "react-icons/fa";

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }

    componentDidMount(){
        const dbRef=ref(db,`planta/` );
        onValue(dbRef,(snapshot)=>{
            let record=[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                //const { humidity, light, temperature } = childSnapshot.val();
                let data = childSnapshot.val();
                //console.log(data);
                record.push({"key":keyName, "data":data});
            });
            this.setState({tableData:record});
        });
    }

    render(){
        return(
            <Table className="table">
                <thead className="thead-light">
                        <th>#</th>
                        <th>Name</th>
                        <th>Light</th>
                        <th>Consulta</th>
                </thead>

            <tbody>
                {this.state.tableData.map((row, index)=>{
                    return(
                    <tr>
                        <td>{row.key}</td>
                        <td>{row.data.name}</td>
                        <td>{row.data.light_time}</td>
                        <td><Link to="/carrots"><button><FaArchive/></button></Link></td>
                    </tr>
                )
                })}
            </tbody>
        </Table>
            
        )
    }

}