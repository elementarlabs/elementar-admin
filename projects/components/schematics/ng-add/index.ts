import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
// import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
// import { readWorkspace } from '@schematics/angular/utility';
import { addPackageToPackageJson, getPackageVersionFromPackageJson } from '../utils/package-config';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(): Rule {
  const options = {
    project: ''
  };

  return (tree: Tree, context: SchematicContext) => {
    context.logger.log('info', `✅️ Running Schematics`);

    // Installing dependencies
    const angularCoreVersion = getPackageVersionFromPackageJson(tree, '@angular/core')!;
    const angularLocalizeVersion = getPackageVersionFromPackageJson(tree, '@angular/localize', true);

    addPackageToPackageJson(tree, 'tailwindcss', '^4.0.0');
    addPackageToPackageJson(tree, '@tailwindcss/postcss', '^4.0.0');
    addPackageToPackageJson(tree, 'autoprefixer', '^10.4.17');
    addPackageToPackageJson(tree, 'postcss', '^8.5.2');

    if (angularLocalizeVersion === null) {
      addPackageToPackageJson(tree, '@angular/localize', angularCoreVersion, true);
    }

    context.addTask(new RunSchematicTask('ng-add-setup-project', options), [
      context.addTask(new NodePackageInstallTask()),
    ]);
    return tree;
  };
}
