const codemirrorEditor = CodeMirror.fromTextArea(document.getElementById('text-code-area'), {
    lineNumbers: true,
    mode: "xml",
    indentWithTabs: true,
    tabSize: 5,
    smartIndent: true,
    matchBrackets: true,
    autofocus: true,
    extraKeys: "Ctrl-Space",
    theme: "dracula"
});
//codemirrorEditor.setSize("100%", "150vw");

//document.querySelector('.CodeMirror').CodeMirror.setValue();