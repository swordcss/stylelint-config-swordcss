module.exports = {
  extends: "stylelint-config-recommended",
  plugins: ["stylelint-scss"],
  rules: {
    "scss/dollar-variable-colon-space-after": [
      "always",
      {
        severity: "error",
      },
    ],
    "scss/dollar-variable-no-missing-interpolation": [
      true,
      {
        severity: "error",
      },
    ],
  },
};
