function max(a) {
    var n = a.length, i = 1, max = a[0]
    for (i; i < n; ++i){
        if (max < a[i]){
        max = a[i]
        }
    }
  return max;
}