export function selectEntriesWithValues(obj) {
  const finalObj = {};
  Object.entries(obj).forEach(([k, v]) => {
    if (typeof v !== 'undefined' && v !== null) {
      finalObj[k] = v;
    }
  });

  return finalObj;
}

export function ignoreKeys(d, keys) {
  const copy = { ...d };

  keys.forEach(key => delete copy[key]);

  return copy;
}

export function isEmptyObject(obj) {
  return !obj || Object.values({ ...obj, id: null }).every(
    (val) =>
      val === null || (Array.isArray(val) && val.length === 0) || JSON.stringify(val) === '{}',
  );
}

export function pickKey(obj) {
  const keys = Object.keys(obj);
  return keys.filter(k => obj[k]);
}

export function selectKeys(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj[key]) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

export const dig = (o, sArg) => {
  let s = String(sArg);

  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};
