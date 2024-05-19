import React from "react";
import style from "./CustomInput.module.css";

function CustomInput({ mainText, btnText, fields }) {
  return (
    <>
      <div className={style.contactFormMain}>
        <div className={style.contactFormHeading}>{mainText} </div>
        <form action="">
          {fields.map(({ label, id, type, placeholder }) => (
            <div key={id} className={style.inputDiv}>
              <label className={style.lable} htmlFor={id}>
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  className={style.input}
                  id={id}
                  placeholder={placeholder}
                />
              ) : (
                <input
                  className={style.input}
                  id={id}
                  type={type}
                  placeholder={placeholder}
                />
              )}
            </div>
          ))}

          <button className={style.loginBtn} type="submit">
            <a className={style.homeContact} href="#">
              {btnText}
            </a>
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomInput;
