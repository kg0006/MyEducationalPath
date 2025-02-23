const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

const res = arr.filter((el) => !isNaN(el) && typeof el === "number");
