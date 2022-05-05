function showSalary(users, age) {
  let userAge = users.filter(user => user.age <= age);
  let mappedUser = userAge.map(user => `${user.name}, ${user.balance}`);
  let result = mappedUser.join('\n');
  return result;
}
