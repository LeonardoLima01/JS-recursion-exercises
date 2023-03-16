// Iterative version
function fibs(n) {
  let array = [0, 1];

  if (n == 1) return [0];
  else if (n == 2) return [0, 1];
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  if (n > 0) {
    return array;
  }
}

// Recursive version
function fibsRec(n, a = [0, 1]) {
  //prettier-ignore
  return a.length==n?a:n==1?[0]:n==2?[0, 1]:a.push(a[a.length - 1]+a[a.length - 2])&&fibsRec(n, a);
}
