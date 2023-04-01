import React from "react";
import ProfilePicture from "../../../Components/Picture-Component/ProfilePicture-component";
import "./Company-profile.css"
import { useCookies } from "react-cookie";

function CompanyProfile({ user }) {
    const [cookie] = useCookies();

    return <>
        <div className="comProfile-main">
            <div className="comProfile-header">

                <div>
                    <ProfilePicture id={user.id} data={user.profilePicture} width={130} />
                </div>

                <div className="comProfile-grid2">
                    <h2>{user.name} Company</h2>
                    <h6>{user.country}, {user.city}, {user.phoneNum && user.phoneNum}</h6>
                    {user.purl ? <a href={user.purl} target="_blank">Visit website</a>:<p>Add your website</p>}
                </div>

                <div>
                    <input type="button" className="comProfile-edit" value={"Edit Profile"} />
                </div>

            </div>
            <hr />
            <div className="comProfile-mid">
                <h5>{user.name}, Specialized in: {user.specialization}</h5>
                <p>{user.about}</p>
            </div>
            <hr />
            <div className="comProfile-mid comProfile-info">
                <label>Phone Number: <input type="text" value={user.phoneNum} disabled /></label>
                <label>Country: <input type="text" value={user.country} disabled /></label>
                <label>City: <input type="text" value={user.city} disabled /></label>
            </div>
        </div>


    </>
}

export default CompanyProfile;