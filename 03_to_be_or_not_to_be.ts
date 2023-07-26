type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const res: ToBeOrNotToBe = {
    toBe: (v) => {
      if (v === val) return true;
      throw "Not Equal";
    },
    notToBe: (v) => {
      if (v !== val) return true;
      throw "Equal";
    },
  };
  return res;
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
