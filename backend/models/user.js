class User {
  constructor(username, password, description, avatar, chatList) {
    this.username = username;
    this.password = password;
    this.description = description;
    this.avatar = avatar;
    this.chatList = chatList;
  }
}

module.exports = User;
