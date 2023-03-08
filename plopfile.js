const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
    return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

const componentTypes = [
    'components',
    'components/layouts',
    'components/utilities',
    'components/forms',
];

module.exports = (plop) => {
    plop.setHelper('capitalize', (text) => {
        return capitalize(camelCase(text));
    });

    plop.setGenerator('component', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'What is your component name?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'The description of this component:',
            },
            {
                type: 'list',
                name: 'outDir',
                message: 'where should this component or package live?',
                default: 'packages',
                choices: componentTypes,
            },
        ],
        actions(answers) {
            const actions = [];

            if (!answers) return actions;

            const { componentName, description, outDir } = answers;

            actions.push({
                type: 'addMany',
                templateFiles: 'templates/component/**',
                destination: `./{{outDir}}/{{dashCase componentName}}`,
                base: 'templates/component',
                data: { description, componentName, outDir },
                abortOnFail: true,
            });

            actions.push({
                type: 'add',
                path: './{{outDir}}/index.js',
                templateFile: 'templates/injectable-index.js.hbs',
                // If index.js already exists in this location, skip this action
                skipIfExists: true,
            });

            actions.push({
                // Action type 'append' injects a template into an existing file
                type: 'append',
                path: './{{outDir}}/index.js',
                // Pattern tells plop where in the file to inject the template
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import { {{capitalize componentName}}, {{capitalize componentName}}Props  } from './{{dashCase componentName}}/{{componentName}}';`,
            });
            actions.push({
                type: 'append',
                path: './{{outDir}}/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `{{capitalize componentName}}, {{capitalize componentName}}Props`,
            });

            return actions;
        },
    });
};
