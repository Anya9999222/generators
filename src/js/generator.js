export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
    // console.log( this.members)
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
