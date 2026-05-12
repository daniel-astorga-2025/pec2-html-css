/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$",
      {
        message: "Usa nomenclatura tipo BEM en las clases.",
      },
    ],
    "max-nesting-depth": 3,
    "color-function-notation": "modern",
    "alpha-value-notation": "percentage",
  },
};