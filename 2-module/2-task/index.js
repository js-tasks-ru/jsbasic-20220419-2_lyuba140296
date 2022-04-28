function isEmpty(obj) {
  let key = '';
  for (key in obj) {
    return false;
  } 
  return true;
}
