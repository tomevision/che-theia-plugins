/**
 * Generated using theia-plugin-generator
 *
 * If it's necessary, update your theia.d.ts with this one
 * https://raw.githubusercontent.com/theia-ide/theia/tree-view/packages/plugin/src/theia.d.ts
 */

import * as theia from '@theia/plugin';
import { FtpExplorer } from './ftp-explorer';


export function start(context: theia.PluginContext) {

    new FtpExplorer(context);
}

export function stop() {
}
