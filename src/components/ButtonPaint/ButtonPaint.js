import "./ButtonPaint.css";

function ButtonPaint({ type = "button", disabled, label }) {
  const btnClasses = ["ButtonPaint"];

  if (disabled) {
    btnClasses.push("Button-disabled");
  }

  return (
    <button
      className={btnClasses.join(" ")}
      style={{ backgroundColor: "red" }}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonPaint;
