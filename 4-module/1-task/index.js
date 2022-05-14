function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  let users = friends.map(friend => `<li> ${friend.firstName} ${friend.lastName}</li>`);
  let result = users.join('\n');
  ul.innerHTML = result;
  return ul;
}
