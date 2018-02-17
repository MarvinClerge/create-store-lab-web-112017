export default function manageUsers(state={users: []}, action){
  let users;

  switch (action.type) {
    case "ADD_USER":
    console.log(action);
      let user = {username: action.user.username, hometown: action.user.hometown}
      return {users: [...state.users, user]}
    default:
      return state
  }
}
