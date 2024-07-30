import chroma from 'chroma-js';

const getComputedStyleValue = (property) => {
    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
};

const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex', ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const primaryColor = getComputedStyleValue('--bs-primary');

const colorStyles = {
    control: (provided) => ({
        ...provided,
        borderColor: '#bfbfbf', // Default border color
        boxShadow: `0 0 0 .25rem rgba(${primaryColor}, 0.25)`, // Focus shadow effect
        borderRadius: '.25rem', // Rounded corners
        '&:hover': {
          borderColor: primaryColor, // Change border color on hover
        },
        '&:focus': {
          borderColor: primaryColor, // Change border color on focus
          boxShadow: `0 0 0 .25rem rgba(${primaryColor}, 0.25)`, // Focus shadow effect
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

  input: (styles) => ({ ...styles, ...dot() }),

  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),

  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default colorStyles;
