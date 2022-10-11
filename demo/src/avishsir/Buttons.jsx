const Buttons = ({ handleC, valuebtn }) => {
  return (
    <>
      <button
        onClick={() => {
          handleC("prev");
        }}
        disabled={valuebtn}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleC("next");
        }}
        disabled={valuebtn}
      >
        Next
      </button>
      <button
        onClick={() => {
          handleC("Reset");
        }}
        disabled={valuebtn}
      >
        Reset
      </button>
    </>
  );
};

export default Buttons;








