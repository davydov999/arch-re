function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) => (...args) => a(b(...args))
  );
}

function flow(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduceRight(
    (a, b) => (...args) => a(b(...args))
  );
}

function add(a) {
  return function (b) {
    return a + b;
  };
}

function mul(a) {
  return function (b) {
    return a * b;
  };
}

const composition = compose(
  mul(3),
  add(3)
)(3);

// Equal
const compositionE = mul(3)(add(3)(3));

const compositionRight = flow(
  mul(3),
  add(3)
)(3);

console.log(composition, compositionE, compositionRight);

