class DepthCalculator {
  calculateDepth(arr) {
    return !Array.isArray(arr)
      ? false
      : 1 +
          arr.reduce(
            (first, next) => Math.max(this.calculateDepth(next), first),
            0
          );
  }
}

module.exports = DepthCalculator;
