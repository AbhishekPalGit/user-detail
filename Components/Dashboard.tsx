"use client";

import React, { use, useEffect, useState } from "react";
import "./Dashboard.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  userDetails: any;
}
const Dashboard = ({ userDetails }: Props) => {
  const [slectedId, setslectedId] = useState(0);
  const [userTab, setuserTab] = useState("profile");
  useEffect(() => {
    setuserTab("profile");
  }, [slectedId]);

  return (
    <div className="dashboard-conatiner">
      <table>
        <tbody>
          <tr>
            <th>User List</th>
            <th>User Details</th>
            <th>Action</th>
          </tr>
          <tr>
            {/* userlist */}
            <td className="userList">
              {userDetails.map((data: any, index: number) => (
                <li
                  className={
                    slectedId === index ? "leftTab activeUser" : "leftTab"
                  }
                  key={data.id}
                  onClick={() => setslectedId(index)}
                >
                  {data.name}
                </li>
              ))}
            </td>
            {/* {userdetails} */}
            <td className="userdetails">
              <ul>
                <li
                  className={userTab === "profile" ? "activeUserTab" : ""}
                  onClick={() => setuserTab("profile")}
                >
                  Profile
                </li>
                <li
                  className={userTab === "contact" ? "activeUserTab" : ""}
                  onClick={() => setuserTab("contact")}
                >
                  Conatct
                </li>
              </ul>
              <div className="userData">
                {userTab === "profile" ? (
                  <>
                    <p>Name : {userDetails?.[slectedId]?.["name"]}</p>
                    <p>User Name : {userDetails?.[slectedId]?.["username"]}</p>
                    <p>
                      Address :{" "}
                      {userDetails?.[slectedId]?.["address"]?.["street"]}{" "}
                      {userDetails?.[slectedId]?.["address"]?.["city"]}{" "}
                      {userDetails?.[slectedId]?.["address"]?.["zipcode"]}
                    </p>
                  </>
                ) : (
                  <>
                    <p>Email : {userDetails?.[slectedId]?.["email"]}</p>
                    <p>Phone Number : {userDetails?.[slectedId]?.["phone"]}</p>
                    <p>Website : {userDetails?.[slectedId]?.["website"]}</p>
                  </>
                )}
              </div>
            </td>
            {/* {Action} */}
            <td className="Action">
              <li>
                <MdOutlineModeEdit color="white" size={30} />
              </li>
              <li>
                <RiDeleteBin6Line color="white" size={30} />
              </li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
