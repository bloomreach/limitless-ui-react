import { readdir } from 'node:fs/promises';

export default function generate(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('feature', {
    description: 'Create a new feature folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please, enter the feature name:',
        validate: (value) => !!value,
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/{{kebabCase name}}/index.ts',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: './src/index.ts',
        template: "export * from './{{kebabCase name}}';\n",
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please, enter the component name:',
        validate: (value) => !!value,
      },
      {
        type: 'list',
        name: 'group',
        choices: async () => {
          const files = await readdir('./src/', { withFileTypes: true });
          return files.filter((f) => f.isDirectory()).map((f) => f.name);
        },
        message: 'Please, select the feature folder:',
        validate: (value) => !!value,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: './src/{{kebabCase group}}/{{kebabCase name}}',
        base: './component/',
        templateFiles: './component/*',
      },
      {
        type: 'append',
        path: './src/{{kebabCase group}}/index.ts',
        templateFile: './feature/index.ts.hbs',
      },
    ],
  });
}
