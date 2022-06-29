import { StyledButton } from "./Buttons.styled";

const Buttons = ({ options, onMakeIndex, stateIndex }) => (
  <div>
    {options.map((option, index) => {
      return (
        <StyledButton
          key={option.color}
          stateIndex={stateIndex === index}
          style={{
            backgroundColor: option.color,
          }}
          onClick={() => onMakeIndex(index)}
        >
          {option.label}
        </StyledButton>
      );
    })}
  </div>
);

export default Buttons;
