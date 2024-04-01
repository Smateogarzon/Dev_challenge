export type ICharacter = {
  id: number;
  name: string;
  image: string;
};

export interface ICharacterNameResults {
  characters: ICharacter[];
}
