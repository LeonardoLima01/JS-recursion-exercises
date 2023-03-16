function merge(a, b, c = []) {
  if (a.length > 0 && b.length > 0) {
    a[0] < b[0] ? c.push(a[0]) && a.shift() : c.push(b[0]) && b.shift();
    merge(a, b, c);
  }
  while (a.length > 0) {
    c.push(a[0]);
    a.shift();
  }
  while (b.length > 0) {
    c.push(b[0]);
    b.shift();
  }
  return c;
}

function mergeSort(array) {
  if (array.length == 0) return "Can't sort an empty array!";
  if (array.length == 1) return array;

  let mid = array.length / 2;
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}
