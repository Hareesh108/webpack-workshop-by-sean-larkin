// take a name as a string, the button label and return a element

// note : you can not use common.js and es syntax in same file. it will throw error.

/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */

const makeButton = (buttonName) => {
  return `Button: ${buttonName}`;
};

module.exports = makeButton;
