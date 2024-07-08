import extractor from '@tolgee/cli/dist/extractor/extractor.js';

const ROOT_NS_HOC = 'withNamespace(import.meta.url';

const extractFeaturePath = path => {
  const regex = /src\/(features\/[^/]+)\//;
  const match = path.match(regex);
  return match ? match[1] : null;
};

/**
 * @param {string} code
 * @param {string} fileName
 * @returns {import('@tolgee/cli/extractor').ExtractionResult}
 *   */
export default async function extractI18n(code, fileName) {
  const path = extractFeaturePath(fileName);

  if (code.includes(ROOT_NS_HOC)) {
    code = code.replace(ROOT_NS_HOC, ROOT_NS_HOC.replace('import.meta.url', path));
  }

  const r = await extractor(code, fileName, 'react', {defaultNs: path});
  console.log(r.keys);
  return {...r, keys: r.keys.map(k => ({...k, namespace: k.namespace ?? path}))};
}
