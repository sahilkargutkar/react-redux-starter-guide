const person = {
  name: "John",
  address: {
    country: "USA",
    city: "san francisco",
  },
};

const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};

console.log(updated);
