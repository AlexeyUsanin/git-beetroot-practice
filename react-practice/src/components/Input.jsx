import React from "react";

class Input extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;

    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <input name={name} value={value} onChange={onChange} />
      </div>
    )
  }
}

export default Input;