import chroma from 'chroma-js';

// Example primary color and default color
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim(); //getComputedStyleValue('--bs-primary');
const defaultBorderColor = '#bfbfbf';

// Define the custom styles for react-select
const colorStylesMultiple = {
  control: (provided, { isFocused }) => ({
    ...provided,
    borderColor: isFocused ? primaryColor : defaultBorderColor,
    boxShadow: isFocused ? `0 0 0 0.2rem rgba(${primaryColor.slice(1)}, 0.25)` : 'none',
    borderRadius: '.25rem',
    '&:hover': {
      borderColor: primaryColor,
    },
  }),
  
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },

  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },

  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),

  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),

  // Placeholder and singleValue styles for completeness
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
};

export default colorStylesMultiple;
