import { RepositoryDeLaMuerte } from './RepositoryDeLaMuerte';

const ids = Array.from(Array(100).keys());

(async () => {
  try {
    const result = await Promise.all(
      ids.map(RepositoryDeLaMuerte.getStuffById),
    );

    console.log('Success: ', result);
  } catch (e) {
    console.error('Error:', e);
  }
})();
