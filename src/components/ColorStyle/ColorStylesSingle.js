import chroma from 'chroma-js';

// const getComputedStyleValue = (property) => {
//     return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
// };

const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--bs-primary')
  .trim(); // getComputedStyleValue('--bs-primary');
const defaultBorderColor = '#bfbfbf';

// Dot style function
const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',
  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

// Define the custom styles for react-select
const colorStylesSingle = {
  control: (provided, { isFocused }) => ({
    ...provided,
    borderColor: isFocused ? primaryColor : defaultBorderColor,
    boxShadow: isFocused 
      ? `0 0 0 0.2rem rgba(${primaryColor.slice(1)}, 0.25)` 
      : 'none',
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
        ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') 
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled 
          ? (isSelected ? data.color : color.alpha(0.3).css()) 
          : undefined,
      },
    };
  },

  input: (styles) => ({ ...styles, ...dot() }),

  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),

  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default colorStylesSingle;
