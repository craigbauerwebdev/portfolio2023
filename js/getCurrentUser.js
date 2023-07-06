if (getCurrentUser.current_user) {
  //console.log(getCurrentUser.current_user.data);
  window.top.currentUser = parseInt(getCurrentUser.current_user.data.ID);
  window.top.currentUserDisplayName =
    getCurrentUser.current_user.data.display_name;
}
