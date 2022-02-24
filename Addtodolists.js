import React, { useState } from 'react'
import { Addtods } from './Addtods';

export const Addtodlists = (props) => {
    const{title,setTitle} = useState("");
    const{desc,setDesc} = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title and discroiption not be blank");   
        }
        props.addTodolists(title,desc);
    }
    return (
        <div className='container my-3'>
            <h2>hello</h2>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo title</label>
                    <input type="text" class="form-control" id="title"/>
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Description</label>
                    <input type="text" class="form-control" id="desc"/>
                </div>
                <button type="submit" class="btn btn-sm btm-success">Addtods</button>
            </form>
        </div>
    )
}
