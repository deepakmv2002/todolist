import React, { useState } from 'react'
export const Addtods = (props) => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title and discroiption not be blank\n");
        }
        props.addtods(title,desc);
    }
    return (
        <div className='container my-3'>
            <h2>hello</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btm-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
