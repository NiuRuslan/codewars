function jumpingOnClouds(c) {
  let jumps = 0;

  for (let i = 0; i < c.length - 1; i += 1) {
    if (c[i + 2] === 0) {
      i += 1;
    }
    jumps += 1;
  }
  return jumps;
}
