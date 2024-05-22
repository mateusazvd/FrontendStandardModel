export const Button = () => {
  return (
    <div>
      <button className="shared-btn" onClick={()=>alert("teste")}>
        Click me
      </button>
    </div>
  );
};

export default Button;