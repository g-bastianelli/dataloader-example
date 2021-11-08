import DataLoader from 'dataloader';
import { RepositoryDeLaMuerte, Stuff } from './RepositoryDeLaMuerte';

const ids = Array.from(Array(100).keys());

(async () => {
  const loader = new DataLoader<number, Stuff | null>(ids =>
    RepositoryDeLaMuerte.getStuffByIds(ids).then(stuffs =>
      ids.map(id => stuffs.find(stuff => stuff.id === id) || null),
    ),
  );

  try {
    const result = await Promise.all(
      ids.map(id => loader.load(id)),
    );

    console.log('Success: ', result);
  } catch (e) {
    console.error('Error:', e);
  }
})();
