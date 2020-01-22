/**
 * tinymce plugin
 * Created by jerry on 16/8/5.
 */
tinymce.PluginManager.add('upfold', function (editor) {

    function selectLocalImages(e) {
        var dom = editor.dom;
        // console.log('dom',editor,editor.iframeHTML)
        if(editor.bookmark!=undefined && editor.bookmark!=""){

        }

    }

    editor.addCommand("upfoldPartEditor", selectLocalImages);

    editor.ui.registry.addButton('upfold', {
        icon: 'chevron-down',
        tooltip: '折叠显示',
        onAction: (_) => editor.execCommand('upfoldPartEditor')
    });

    editor.ui.registry.addMenuItem('upfold', {
        icon: 'chevron-down',
        text: '折叠显示',
        context: 'tools',
        onAction: (_) => editor.execCommand('upfoldPartEditor')
    });
});