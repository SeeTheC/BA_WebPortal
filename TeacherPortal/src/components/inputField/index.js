import React from "react";

const InputField = (props) => {
  const { type, name, placeholder, value, handleChange } = props;
  return (
    <div className="form-group wrap-input">
      <div className={type === "password" ? "pwdMask" : ""}>
        <input
          type={type}
          className="form-control password"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            handleChange(name, e);
          }}
        />
        <span className="focus-input"></span>
        {type === "password" && (
          <span className="fa fa-eye-slash pwd-toggle"></span>
        )}
      </div>
    </div>
  );
};

export default InputField;
