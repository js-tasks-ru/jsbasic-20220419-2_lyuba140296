function getMinMax(str) {
  let result = [];
  let arr = str.split(' ');
  for (let item of arr) {
    let num = parseFloat(item);
      if(!isNaN(num)) {
      result.push(num);
    }
  }
  result.sort( (a, b) => a - b );
  
  let min = Math.min(...result);
  
  let max = Math.max(...result);
  
  result = {min,max};

  return result;
}
