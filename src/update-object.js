// To figure out "shallow copy", "deep copy"

const person = {
  name: "Lon Lon",
  address: {
    country: "Israel",
    city: "Tele Viv",
  },
};

const updated = {
  ...person,
  address: {
    ...person.address,
    city: "天龍國",
  },
  name: "Hot Man",
  age: 40,
};
// updated.address.city = "天龍國";
console.log(updated);
