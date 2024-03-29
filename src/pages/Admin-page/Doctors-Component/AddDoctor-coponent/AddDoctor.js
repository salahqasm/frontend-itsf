import "./AddDoctor.css"
import React from "react";
import axios from "axios";
import { useState } from "react";
import Popup from 'reactjs-popup';
import { useCookies } from 'react-cookie';

function AddDoctor({ commitChange }) {
    const [cookies] = useCookies();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const config = {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };

    async function submitHandler(e) {
        e.preventDefault();
        try {
            let doctor = {
                name: e.target.name.value,
                email: e.target.email.value,
                specialization: e.target.specialization.value,
                department: e.target.department.value,
                role: e.target.role.value,
                password: e.target.password.value
            }
            const res = await axios.post('http://localhost:3001/doctorsignup', doctor)
            const alldoctors = await axios.get('http://localhost:3001/alldoctors', config, [])
            commitChange(alldoctors?.data);
            setOpen(o => !o)
        } catch (err) {
            console.log(err);
            window.alert("Email already exists please try another email")
        }

    }
    return <>
        <div>
            <button type="button" className="AdminAddDoctor-button" onClick={() => setOpen(o => !o)}>
                Add Doctor
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                <h1 style={{textAlign:"center",marginTop:"1rem"}}>Add New Doctor</h1>
                <form className="AdminAddDoctor" onSubmit={(e) => { submitHandler(e); }}>
                    <label>Name: </label>
                    <input type="text" id="name" name="name" placeholder="Full Name" required />
                    <label>Email: </label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                    <label>Specialization: </label>
                    <input type="text" id="specialization" name="specialization" placeholder="Specialization" required />
                    <label>Department: </label>
                    <input type="text" id="department" name="department" placeholder="Department" required />
                    <label>Password: </label>
                    <input id="pswrd2" name="password" type="password" placeholder="Creat Password" required />
                    <label>Role:</label>
                    <select name="role" id="role" title="Role" required>
                        <option value="doctor">doctor</option>
                        <option value="admin" >admin</option>
                    </select>
                    <button className="AdminAddDoctor-button" type="submit" value="Sign Up" >Submit</button>
                </form>
            </Popup>
        </div>

    </>
}

export default AddDoctor;