export default function logOut(user, setUser, history) {
  function clearAndPush() {
    localStorage.clear();
    setUser(null);
    history.push("/login");
  }
  clearAndPush();
}
