import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.log('info', `✅️ Running Schematics`);
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
