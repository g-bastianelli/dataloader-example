export type Stuff = {
  id: number;
  value: string;
};

export class RepositoryDeLaMuerte {
  static getStuffById(id: number): Promise<Stuff> {
    return new Promise(resolve => {
      console.log('Fetching stuff with id: ', id);
      setTimeout(() => resolve({ id, value: `Stuff with id: ${id}` }), 500);
    });
  }

  static getStuffByIds(ids: readonly number[]): Promise<Stuff[]> {
    return new Promise(resolve => {
      console.log('Fetching stuffs with ids: ', ids);
      setTimeout(
        () => resolve(ids.map(id => ({ id, value: `Stuff with id: ${id}` }))),
        500,
      );
    });
  }
}
