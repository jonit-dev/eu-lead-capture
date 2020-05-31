export const testStore = {
  bugs: ["Centipede"],
  addBug(bug) {
    this.bugs.push(bug);
  },
  get bugsCount() {
    return this.bugs.length;
  },
};
