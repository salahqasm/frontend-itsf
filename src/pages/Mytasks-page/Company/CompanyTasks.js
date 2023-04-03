import React, { useState } from "react";
import Popup from 'reactjs-popup';
import Addtask from "../../../Components/Company-components/Addtask-component/Addtask";
import Footer from "../../../Components/Footer-component/Footer";
import Filter from "../../../Components/Company-components/Filter-component/Filter"
import Task from "../../../Components/Company-components/Task-component/Task";
import "./CompanyTasks.css"
import Brief from "../../../Components/Company-components/Brief-component/Brief";
function CompanyTasks({ user }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return <>
        <Brief user={user} />
        <div className="mytasks-main">
            <div className="mytasks-left">
                <div className="addtask-container">
                    <p>Want to Publish a New Task?</p>
                    <button type="button" className="addtask-button" onClick={() => setOpen(o => !o)}>
                        Add Task
                    </button>
                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                        <Addtask id={user.id} close={setOpen} />
                    </Popup>
                </div>
                <br />
                <Filter />
            </div>
            <div className="mytasks-right">
                <h1>View Your Tasks</h1>
                <hr />
                {user.tasks.slice().reverse().map(elem =>
                    <Task task={elem} />
                )}
            </div>
        </div>
        <br />
        <Footer />
    </>
}

export default CompanyTasks;