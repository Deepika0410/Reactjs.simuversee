import { TreeSelect } from "antd";
import React from "react";

const treeData = [
  {
    title: "Men",
    value: "0-0",
    children: [
      {
        title: "T-shirts",
        value: "0-0-1",
      },
      {
        title: "Jeans",
        value: "0-0-2",
      },
      {
        title: "Jackets",
        value: "0-0-3",
      },
      {
        title: "Sweaters",
        value: "0-0-4",
      },
    ],
  },
  {
    title: "Women",
    value: "0-1",
    children: [
      {
        title: "Dresses",
        value: "0-1-0",
      },
      {
        title: "Jeans",
        value: "0-1-1",
      },
      {
        title: "Tops",
        value: "0-1-2",
      },
      {
        title: "T-shirts",
        value: "0-1-3",
      },
    ],
  },
  {
    title: "Kids",
    value: "0-2",
    children: [
      {
        title: "T-shirts",
        value: "0-2-0",
      },
      {
        title: "Jeans",
        value: "0-2-1",
      },
      {
        title: "Dresses",
        value: "0-2-2",
      },
      {
        title: "Shirts",
        value: "0-2-3",
      },
    ],
  },
];

class Select extends React.Component {
  state = {
    value: undefined,
  };

  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: "100%" }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        treeData={treeData}
        placeholder="Please select"
        // treeDefaultExpandAll
        // treeCheckable={true}
        onChange={this.onChange}
      />
    );
  }
}

export default Select;
