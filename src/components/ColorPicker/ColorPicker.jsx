import { Component } from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons/Buttons";
import { StyledText } from "./ColorPicker.styled";

class ColorPicker extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  state = {
    activIndex: 0,
  };

  click = (index) => {
    this.setState({
      activIndex: index,
    });
  };

  // makeOptionClassesName = (index) => {
  //   return classNames(stl.opti, {
  //     [stl.opti__action]: index === this.state.activIndex,
  //   });

  //   // const optionClass = [stl.opti];

  //   // if (index === this.state.activIndex) {
  //   //   optionClass.push(stl.opti__action);
  //   // }
  //   // return optionClass.join(" ");
  // };

  render() {
    const { activIndex } = this.state;
    const { options } = this.props;
    const { label, color } = options[activIndex];

    return (
      <div>
        <h2>Color Picker</h2>
        <StyledText style={{ backgroundColor: color }}>
          Выбран цвет: {label}
        </StyledText>

        <Buttons
          options={options}
          stateIndex={this.state.activIndex}
          onMakeIndex={this.click}
        />
      </div>
    );
  }
}

export default ColorPicker;
