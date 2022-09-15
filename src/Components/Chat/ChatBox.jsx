import React from "react";
import "../../Styles/Chat.scss";
import T2 from "../../assets/T2.png";



function ChatBox() {
  return (
    <div>
    
      <div className="content">
        <div className="container">
          {/*---Chatbox Header--*/}
          <div className="container1" />
          <div className="msg-header">
            <div className="header-icons">
              <i className="fa fa-arrow-left" />
            </div>
            <div className="msg-header-img">
              <img src={T2} alt="" />
            </div>
            <div className="active">
              <h4>TNSL Dev</h4>
              <h6>Instructor, Moyo, Dan. Konnect, Masho_ado </h6>
            </div>
          </div>
          {/*-----Chat-page-----*/}
          <div className="chat-page">
            <div className="msg-date">
              <h5>9th April, 2022</h5>
            </div>
            <div className="msg-inbox">
              <div className="chats">
                <div className="msg-page">
                  {/*---Chat page Received Message-----------*/}
                  <div className="received-chats">
                    <h5>Instructor</h5>
                    <div className="received-msg">
                      <div className="received-msg-inbox">
                        <p> Welcome guys</p>
                        <span className="time">17:40</span>
                      </div>
                    </div>
                  </div>
                  {/*---------Chat page Sent Message---------*/}
                  <div className="outgoing-chats">
                    <div className="outgoing-chat-msg">
                      <p>
                        {" "}
                        Good evening!!!
                        <i className="fa fa-circle" />
                      </p>
                      <span className="time">17:40</span>
                    </div>
                  </div>
                  {/*---Chat page Received Message 2-----------*/}
                  <div className="received-chats">
                    <h4>Instructor</h4>
                    <div className="received-msg">
                      <div className="received-msg-inbox">
                        <p className="text2"> Good day interns</p>
                        <span className="time">17:40</span>
                      </div>
                    </div>
                  </div>
                  {/*---Chat page Received Message 3-----------*/}
                  <div className="received-chats">
                    <h2>Dan. Konnect</h2>
                    <div className="received-msg">
                      <div className="received-msg-inbox">
                        <p> Okay sir</p>
                        <span className="time">17:40</span>
                      </div>
                    </div>
                  </div>
                  {/*---Chat page Received Message 4-----------*/}
                  <div className="received-chats">
                    <h3>Masho_ado</h3>
                    <div className="received-msg">
                      <div className="received-msg-inbox">
                        <p> Masho here. Looking forward</p>
                        <span className="time">17:40</span>
                      </div>
                    </div>
                  </div>
                  {/*---------Chat page Sent Message 2---------*/}
                  <div className="outgoing-chats">
                    <div className="outgoing-chat-msg">
                      <p>
                        {" "}
                        Good evening!!!
                        <i className="fa fa-circle" />
                      </p>
                      <span className="time">17:40</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="msg-bottom">
          <div class="input-group">
              <div class="bottom-icons">
                  <i class="fa fa-smile-o"></i>
              </div>
              <input type="text" class="form-control" placeholder="Message...">
              <div class="input-group-append">
                  <span class="input-group-text"><i class="fa fa-paper-plane"></i></span>
              </div>
          </div>
      </div>*/}
            <div className="col-1">
              <i className="fa fa-smile-o" />
              <input type="text" placeholder="Message" />
            </div>
            <i className="fa fa-paper-plane" />
          </div>
        </div>
        <div className="container2">
          <div className="container-left">
            <div className="top-icon">
              <i className="fa fa-bell" />
              <img src={T2} alt="" />
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <i className="fa fa-search" />
            </div>
            <div className="drop-menu">
              <form action>
                <label htmlFor />
                <select name id>
                  <option value>Group</option>
                  <option value />
                  <option value />
                  <option value />
                </select>
              </form>
            </div>
            <div className="info">
              <h3>TNSL Devs</h3>
              <p className="text1">Y'all would be working on a proj....</p>
              <h4>TNSL Designer</h4>
              <p className="text2">Y'all would be working on a proj....</p>
            </div>
            <div className="drop-menu1">
              <form action>
                <label htmlFor />
                <select name id>
                  <option value>Chats</option>
                  <option value />
                  <option value />
                  <option value />
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
