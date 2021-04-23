import CancelIcon from "@material-ui/icons/Cancel";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { MD5 } from "crypto-js";
import Firebase from "firebase";
import React, { Component, createRef, useState } from "react";
import Avatar from "react-avatar";

import { withFirebase } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";
import Settings from "./SettingsButton";
import { StyledDiv } from "./style";

const Chat = ({messages}) => {

  const [minimize, setMinimize] = useState(false);

  const handleMinimize = (e) => {
    setMinimize(!minimize);
  };

  return (
    <StyledDiv>
      {minimize ? (
        <div className="innerWrapper">
          <div className="header">
            <h1>Chat</h1>
            <div>
              <CancelIcon onClick={handleMinimize} />
            </div>
          </div>

          <Messages />

        </div>
      ) : (
        <div className="icon" onClick={handleMinimize}>
          <InsertCommentIcon
            style={{ fontSize: 30, color: "white" }}
            onClick={handleMinimize}
            className={!minimize && "closed"}
          />
        </div>
      )}
    </StyledDiv>
  );
};

class MessagesBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      messages: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase
      .messages()
      .orderByChild("createdAt")
      .on("value", (snapshot) => {
        const messageObject = snapshot.val();
        if (messageObject) {
          const messageList = Object.keys(messageObject).map((key) => ({
            ...messageObject[key],
            uid: key,
          }));
          this.setState({ messages: messageList, loading: false });
        } else {
          this.setState({ messages: null, loading: false });
        }
        this.setState({ loading: false });
      });
    this.scrollPoint = createRef();
  }

  componentDidUpdate(prevState) {
    if (prevState.messages !== this.state.messages) {
      if (this.state.messages.length > 5) {
        this.scrollPoint.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }      
    }
  }

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onRemoveMessage = (uid) => {
    this.props.firebase.message(uid).remove();
  };

  onChangeText = (event) => {
    this.setState({ text: event.target.value });
  };
  onCreateMessage = (authUser) => {
    this.props.firebase.messages().push({
      text: this.state.text,
      userId: authUser.uid,
      username: authUser.username,
      email: authUser.email,
      createdAt: Firebase.database.ServerValue.TIMESTAMP
    })
    this.setState({ text: "" });
  };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;
    text.length !== 0 &&
      this.props.firebase.message(message.uid).set({
        ...messageSnapshot,
        text,
        editedAt: Firebase.database.ServerValue.TIMESTAMP,
      });
  };

  render() {
    const { text, messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div>
            {loading && <div>Loading ...</div>}
            {messages ? (
              <div className="main">
                <MessageList
                  messages={messages}
                  onRemoveMessage={this.onRemoveMessage}
                  onEditMessage={this.onEditMessage}
                  authUser={authUser}
                />
                <div
                  ref={this.scrollPoint}
                ></div>
              </div>
            ) : (
              <div>There are no messages ...</div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                text.length !== 0 && this.onCreateMessage(authUser);
              }}
            >
              <input type="text" value={text} onChange={this.onChangeText} />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const MessageList = ({
  authUser,
  messages,
  onRemoveMessage,
  onEditMessage,
}) => (
  <ul>
    {messages.map((message) => (
      <MessageItem
        key={message.uid}
        message={message}
        onRemoveMessage={onRemoveMessage}
        onEditMessage={onEditMessage}
        authUser={authUser}
      />
    ))}
  </ul>
);
class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editText: this.props.message.text,
    };
  }

  onToggleEditMode = () => {
    this.setState((state) => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
    }));
  };

  onChangeEditText = (event) => {
    this.setState({ editText: event.target.value });
  };
  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editText);
    this.setState({ editMode: false });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;
    const messageClass = authUser.uid === message.userId ? "sent" : "received";

    return (
      <li className={`message ${messageClass}`}>
        {editMode ? (
          <input
            type="text"
            value={editText}
            onChange={this.onChangeEditText}
          />
        ) : (
          <div className="messageWrapper">
            <div className="username">
              <Avatar
                title={`${message.username}`}
                size="35"
                md5Email={`${MD5(message.email)}`}
                value={`${message.username.substring(0, 2).toUpperCase()}`}
                round
              />
            </div>
            <span className="text">{message.text}</span>
          </div>
        )}
        {authUser.uid === message.userId && (
          <span className="settingsWrapper">
            {editMode ? (
              <span>
                <button className="editbtn" onClick={this.onSaveEditText}>
                  Save
                </button>
                <button className="editbtn" onClick={this.onToggleEditMode}>
                  Reset
                </button>
              </span>
            ) : (
                <Settings
                  deleteFunc={() => onRemoveMessage(message.uid)}
                  valueDelete={"Delete"}
                  editFunc={this.onToggleEditMode}
                  valueEdit={"Edit"}
                />
            )}
          </span>
        )}
      </li>
    );
  }
}

const Messages = withFirebase(MessagesBase);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Chat);
