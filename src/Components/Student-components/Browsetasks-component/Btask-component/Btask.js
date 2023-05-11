import React from "react";
import { useCookies } from "react-cookie";
import "./Btask.css"
import axios from "axios";
function Btask({ task }) {
    const [cookie] = useCookies();

    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function sendRequest() {
        try {
            let obj = {
                studentID: cookie.user.id,
                taskID: task.id
            }
            let res = await axios.post('http://localhost:3001/taskRequest', obj, config)
            if (res.data === "success") {
                window.alert("Request Sent Successfully")
            }
        } catch (err) {

        }
    }
    return <div className="SBtask-task-main">
        <div className="SBtask-task" >
            <div style={{ float: "right" }}>
                <input type="button" className="SBtask-send" onClick={sendRequest} value={"Send Request"} />
            </div>
            <h2>{task?.title}</h2>
            <span><span><strong>Budget: </strong>{task?.credit} JD </span> - <span><strong>Due Date:</strong> {task?.date}</span> </span>
            <p style={{ whiteSpace: "pre-wrap" }}>
                <strong>Description:</strong>
                <br />{task?.description}
            </p>
            <div className="Mtask-required-skills">
                <strong>Required Skills: </strong>
                {task?.skills?.map(elem =>
                    <span>{elem.name}</span>
                )}
            </div>
        </div>
        {/* <hr /> */}
    </div>
}

export default Btask;