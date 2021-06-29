export default class Config {
  constructor(token) {
    this.headers = { Authorization: `Bearer ${token}` };
  }
}
