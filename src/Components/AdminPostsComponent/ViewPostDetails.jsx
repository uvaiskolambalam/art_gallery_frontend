import React from 'react'
import PostBox from '../PostBox/PostBox'
import Chat from "../../Assets/chat-dots.svg";
import heart from "../../Assets/heart.svg";
import cancelIcon from '../../Assets/x-circle.svg'

function ViewPostDetails({ data,setView }) {
    const handleShow = () => {
        setView(false)
    }
    console.log(data.comments);
    return (
        <>
        
      <div className='post-box-container'></div>
          <div className="admin-post-box">
        <div className="post-box-postmanDetails">
          <div className="post-box-firstDetails">
            <div className="postman-Profile-Pic">
              <img src={data.userId.profileImage} />
            </div>
            <div className="post-box-postman-name-date">
                          <p>{data.userId.user_name}</p>
             
            </div>
          </div>
          <div  className='dots-container'>
            <img src={cancelIcon} alt="" onClick={handleShow}/>
          </div>
        </div>
        {/* =========================== */}
        <div className="postBox-text">
         <p>{data.desc }</p>
        </div>
        <div className="post-box-image-section">
          <img src={data.imageUrl} alt="" />
        </div>
        <div>
          <hr />
        </div>
        <div className="postBox-icons">
                  <img src={ heart} />
                  <p>{ data.likes.length}</p>
          <img
            src={Chat}
            alt=""
          
          />
          <img src="" alt="" />
        </div>
        <div>
          <hr />
        </div>

        {/* ============================================ */}
        <div className="postBox-container">
          {Chat &&
            data.comments.map((item, i, key) => (
              <div className="postBox-viewComment">
                <div className="postman-coment-Profile-Pic">
                  <img src={data.profileImage ? data.profileImage : ''} alt="" />
                </div>
                <div className="coment-user">
                        <p>{ item.userName}</p>
                        <p className="coments-text">{item.desc }</p>
                </div>
              </div>
            ))} 
        </div>

        {/* ============================================ */}

        {/* <div className="postBox-coment">
          <div className="postman-Profile-Pic">
            <img src={userPic.profileImage} alt="" />
          </div>
          <div className="postBox-input">
            <input
              type="text"
              placeholder="Text here..."
              name="comment"
              value={comment ? comment : ""}
              onChange={commentInput}
              id="commentInput"
            />
            <img onClick={sentComent} src={Send} alt="" />
          </div>
        </div> */}
      </div>
         
    </>
  )
}

export default ViewPostDetails