
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    const inputbox = {
        id: 'inputbox-modal-message-command',
        label: 'InputBox Modal Message',
    };
    const open = {
        id: 'open',
        label: 'Open Dialog ',
    };
    const options: theia.OpenDialogOptions = {
        canSelectMany: false,
        openLabel: 'Open',
        filters: {
            'Text files': ['txt'],
            'Icon': ['svg'],
            'All files': ['*']
        }
    }

    /// Theia show OpenDialog
    context.subscriptions.push(theia.commands.registerCommand(open, (...args: any[]) => {
        theia.window.showOpenDialog(options).then(fileUri => {
            if (fileUri && fileUri[0]) {
                console.log('Selected file: ' + fileUri[0].fsPath);



            }
        });
    }));

    /// Theia show notifications on Modal , Output window & status bar!
    const out = theia.window.createOutputChannel('Output Window');
    const status = theia.window.createStatusBarItem();
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.showInformationMessage('Hello World!');
        out.appendLine('Hello This is Output window ');
        out.show();
        status.text = "This is a status bar";
        status.show();
    }));

    // Theia Show Inputbox
    theia.commands.registerCommand(inputbox, async (...args: any[]) => {
        const option: theia.InputBoxOptions = {
            prompt: "Hello from Plugin",
            placeHolder: "Type text there",
            ignoreFocusOut: false,
            password: false,
            value: "Default value"


        };
        theia.window.showInputBox(option).then((s: string | undefined) => {
            console.log(typeof s !== 'undefined' ? s : "Input was canceled");
            theia.window.showInformationMessage(typeof s !== 'undefined' ? s : "Input was canceled", { modal: true }, );
        });

    });

}

export function stop() {

}
