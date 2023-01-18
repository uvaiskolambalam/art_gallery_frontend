import React from "react";
import './AdminPostsComponent.css'
import Url from "../Instence/Base_uel";
import { compareAsc, format } from 'date-fns'

import ViewPostDetails from "./ViewPostDetails";
import { useState } from "react";
const AdminPosts = ({ posts, getPosts }) => {
  // posts.updatedAt=posts.updatedAt.sort(compareAsc)
  // console.log(posts?.updatedAt,'data');
  const [show, setShow] = useState({})
  const [view, setView] = useState(false)
  const postBlock = async (postId) => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Crumb?"
    )
    if (confirmBox === true) {

      console.log(postId, "postId");
      try {
         await Url.patch("/admin/blockPost", { postId });
        getPosts();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const viewDetails = (item) => {
    setShow(item)
    setView(!view)
    
  }
  

  return (
    <>
    <div className="AdminUser">
      <table className="AdminUserTable">
        <tr>
          <th>SlNo</th>
          <th>Post Owner</th>
          <th>Email</th>
          <th>Date</th>
          <th>Reports</th>
          <th>Action</th>
        </tr>
        {posts.map((item, key) => (
          <tr key={key}>
            <td>{ key+1}</td >
            <td>{item.userId.user_name}</td>
            <td>{item.userId.email}</td>
            <td>{item.updatedAt=format(new Date(item.updatedAt), 'yyyy-MM-dd')}</td>
            <td>{ item.reports.length ? item.reports.length : "No Reports"}</td>
            <td className="postSideButtons">
         
              <button onClick={()=>viewDetails(item)} className="viewButton postButton">View
              </button>
              {/*  */}
              <button 
                className={item.block ? "blockButtonContainer postButton"  : "postBlock postButton"}
                onClick={ () => postBlock(item?._id)}
              >
                {item.block ? "Unblock" : "Block"}
              </button>
            </td>
           
          </tr>

        ))}
      </table>
     
      
    </div>
      <div className="showPostDetails">
        
        
        {view && <div><ViewPostDetails data={show} setView={setView} /></div>}
      </div>
    </>
  );
};

export default AdminPosts;
