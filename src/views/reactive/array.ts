const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [ 'push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse' ];
methodsToPatch.forEach(function(method: any) {
  const original = arrayProto[method];
  Object.defineProperty(arrayMethods, method, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function mutator(args: any) {
      const result = original.apply(this, args);
      return result;
    }
  });
});