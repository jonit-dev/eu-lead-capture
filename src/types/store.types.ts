export interface IStore {
  bugs: string[];
  addBug: (insect: string) => void;
  bugsCount: number;
}
