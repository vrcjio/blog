'use client'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class SaveFilePlugin extends Plugin {
  init() {
    const editor = this.editor;

    // Register the 'saveFile' command
    editor.commands.add('saveFile', {
      isEnabled: () => true,
      execute: () => {
        const content = editor.getData();
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Create a link to download the file
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.txt';
        a.style.display = 'none';
        document.body.appendChild(a);

        // Trigger a click event to initiate the download
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
    });

    // Add a 'Save File' button to the toolbar
    editor.ui.componentFactory.add('saveFileButton', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Save File',
        icon: '<svg width="24" height="24"><use xlink:href="#download"/></svg>',
        tooltip: true,
      });

      // Execute the 'saveFile' command when the button is clicked
      view.on('execute', () => {
        editor.execute('saveFile');
      });

      return view;
    });
  }
}
