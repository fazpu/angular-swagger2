import * as _ from 'lodash';
import * as path from 'path';

import {stateDir} from '../../conf';
import {Config} from '../../generate';
import {ResponseDef} from '../../requests/requests.models';
import {Parameter} from '../../types';
import {indent, writeFile} from '../../utils';

export function generateHttpActions(config: Config, name: string, responseDef: ResponseDef,
                                    actionClassNameBase: string, simpleName: string,
                                    formSubDirName: string, paramGroups: Parameter[]) {
  let content = '';
  const hasParams = paramGroups.length >= 1;
  content += getActionImports(name, simpleName, hasParams, responseDef.type.startsWith('__model.'));
  content += getActionTypes(name, simpleName);
  content += getActionStartDefinition(simpleName, hasParams, actionClassNameBase);
  content += getActionSuccessDefinition(responseDef, actionClassNameBase);
  content += getActionErrorDefinition(actionClassNameBase);
  content += getActionCleanDefinition(actionClassNameBase);
  content += getActionOverviewType(actionClassNameBase);

  const actionsFileName = path.join(formSubDirName, stateDir, `actions.ts`);
  writeFile(actionsFileName, content, config.header, 'ts', ['max-line-length', 'max-classes-per-file']);
}

function getActionImports(name: string, simpleName: string, hasParams: boolean,
                          importModels: boolean) {
  let res = `import {HttpErrorResponse} from '@angular/common/http';\n`;
  res += `import {Action} from '@ngrx/store';\n`;

  if (hasParams) {
    res += `import {${_.upperFirst(simpleName)}Params} from '../../../../controllers/${name}';\n`;
  }
  if (importModels) res += `import * as __model from '../../../../model';\n`;
  res += `\n`;

  return res;
}

function getActionTypes(controllerName: string, methodName: string) {
  let res = `export enum Actions {\n`;
  res += indent([
    `${methodName.toUpperCase()}_START = '[${controllerName} ${methodName}] Start',`,
    `${methodName.toUpperCase()}_SUCCESS = '[${controllerName} ${methodName}] Success',`,
    `${methodName.toUpperCase()}_ERROR = '[${controllerName} ${methodName}] Error',`,
    `${methodName.toUpperCase()}_CLEAN = '[${controllerName} ${methodName}] Clean',`,
  ]);
  res += `\n}\n\n`;

  return res;
}

function getActionStartDefinition(name: string, hasParams: boolean, actionClassNameBase: string) {
  let res = `export class ${actionClassNameBase}Start implements Action {\n`;
  res += indent(`readonly type = Actions.${actionClassNameBase.toUpperCase()}_START;\n`);
  const params = hasParams ? `public payload: ${ _.upperFirst(name) }Params` : '';
  res += indent(`constructor(${params}) {}\n`);
  res += `}\n`;
  res += `\n`;

  return res;
}

function getActionSuccessDefinition(response: ResponseDef, actionClassNameBase: string) {
  let res = `export class ${actionClassNameBase}Success implements Action {\n`;
  res += indent(`readonly type = Actions.${actionClassNameBase.toUpperCase()}_SUCCESS;\n`);
  res += indent(`constructor(public payload: ${response.type}) {}\n`);
  res += `}\n`;
  res += `\n`;

  return res;
}

function getActionErrorDefinition(actionClassNameBase: string) {
  let res = `export class ${actionClassNameBase}Error implements Action {\n`;
  res += indent(`readonly type = Actions.${actionClassNameBase.toUpperCase()}_ERROR;\n`);
  res += indent(`constructor(public payload: HttpErrorResponse) {}\n`);
  res += `}\n`;
  res += `\n`;

  return res;
}

function getActionCleanDefinition(actionClassNameBase: string) {
  let res = `export class ${actionClassNameBase}Clean implements Action {\n`;
  res += indent(`readonly type = Actions.${actionClassNameBase.toUpperCase()}_CLEAN;\n`);
  res += `}\n`;
  res += `\n`;

  return res;
}

function getActionOverviewType(actionClassNameBase: string) {
  let res = `export type ${actionClassNameBase}Action = ${actionClassNameBase}Start |\n`;
  res += `${actionClassNameBase}Success |\n`;
  res += `${actionClassNameBase}Error |\n`;
  res += `${actionClassNameBase}Clean;\n`;
  return res;
}

export function getActionClassNameBase(name: string) {
  return getClassName(name);
}

export function getClassName(name: string) {
  return _.upperFirst(name);
}