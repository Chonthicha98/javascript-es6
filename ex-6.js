let height = undefined;
let result = (height) => {
  return height ?? 'Height is not defined';
};

result = result(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
