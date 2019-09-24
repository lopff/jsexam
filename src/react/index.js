import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

const search = query =>
  new Promise((resolve, reject) => {
    const result = DATA.filter(({ name }) =>
      name.includes(query.toLowerCase())
    );
    if (result.length !== 0) {
      resolve(result);
    } else {
      reject(new Error("not found"));
    }
  });

const Item = ({ name, price }) => (
  <div>
    {name}: {price}$
  </div>
);

const DATA = [
  {
    name: "apple",
    price: 10,
    id: 1
  },
  {
    name: "orange",
    price: 15,
    id: 2
  },
  {
    name: "banana",
    price: 7,
    id: 3
  }
];
export default App;
export { DATA, Item, search };
