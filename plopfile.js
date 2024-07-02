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
    }],
    actions: [{
      type: 'addMany',
      destination: './src/components/{{kebabCase name}}',
      base: './plop-templates/component/',
      templateFiles: './plop-templates/component/*',
    }, {
      type: 'append',
      path: './src/components/index.ts',
      template: "export * from './{{kebabCase name}}';\n",
    }],
  });
}
