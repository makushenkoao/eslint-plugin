const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  }
});
ruleTester.run("path-checker", rule, {
  valid: [
    {
      filename: 'C:\\Users\\anton\\OneDrive\\Рабочий стол\\makush\\course\\react-production\\src\\entities\\Article',
      code: "import { addCommentFormReducer } from '../../model/slices/addCommentFormSlice'",
    }
  ],

  invalid: [
    {
      filename: 'C:\\Users\\anton\\OneDrive\\Рабочий стол\\makush\\course\\react-production\\src\\entities\\Article',
      code: "import { addCommentFormReducer } from '@/entities/Article/model/slices/addCommentFormSlice'",
      errors: [{ message: "Within a single module, all paths must be relative." }],
      options: [
        {
          alias: '@'
        }
      ]
    },
    {
      filename: 'C:\\Users\\anton\\OneDrive\\Рабочий стол\\makush\\course\\react-production\\src\\entities\\Article',
      code: "import { addCommentFormReducer } from 'entities/Article/model/slices/addCommentFormSlice'",
      errors: [{ message: "Within a single module, all paths must be relative." }],
    },
  ],
});
