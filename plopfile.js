import fs from 'node:fs/promises';

export default function generate(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please, enter the component name:',
      validate: (value) => !!value,
    }, {
      type: 'confirm',
      name: 'newGroup',
      message: 'Do you want to create a new group?',
      default: false,
    }, {
      type: 'list',
      name: 'group',
      choices: () => {
        return fs.readdir('./src/components', { withFileTypes: true }).then((files) => {
          return files.filter((f) => f.isDirectory()).map((f) => f.name);
        });
      },
      message: 'Please, select the component group:',
      when: (answers) => !answers.newGroup,
    }, {
      type: 'input',
      name: 'group',
      when: (answers) => answers.newGroup,
      message: 'Please, enter the new component group name:',
    }],
    actions: [{
      type: 'addMany',
      destination: './src/components/{{kebabCase group}}/{{kebabCase name}}',
      base: './plop-templates/component/',
      templateFiles: './plop-templates/component/*',
    }, {
      type: 'append',
      skip: (answers) => (!answers.newGroup ? 'Skipping append to the root index.ts' : undefined),
      path: './src/components/index.ts',
      template: "export * from './{{kebabCase group}}';\n",
    }],
  });
}
