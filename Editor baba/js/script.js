const achHtml = document.querySelector('.html-btn');
const achCss = document.querySelector('.css-btn');
const achJs = document.querySelector('.js-btn');
const resultBtn = document.querySelector('.result-btn')
const textArea = document.getElementById('text-code-area');
const previewArea = document.querySelector('.preview');
var codeType;
var languageMode = 'xml';

function archive(elementAch) {
    document.querySelector('.selected').classList.remove('selected');
    elementAch.classList.add('selected');
    saveText();


    if (elementAch == achHtml) {
        codeType = codeHtml;
        languageMode = "xml";
    }

    if (elementAch == achCss) {
        codeType = codeCss
        languageMode = "css";
    }

    if (elementAch == achJs) {
        codeType = codeJs;
        languageMode = "javascript";
    }
    
    if (elementAch == resultBtn) {
        Preview("show");
        previewArea.contentWindow.location.reload()
        
    } else {
        Preview("hide");
    }
    

    codemirrorEditor.setOption('mode', languageMode);
    document.querySelector('.CodeMirror').CodeMirror.setValue(codeType);

}

function saveText() {
    switch (languageMode) {
        case 'xml':
            
            codeHtml = codemirrorEditor.getValue();
            localStorage.setItem('valueHtml', codeHtml);

            break;
        case 'css':

            codeCss = codemirrorEditor.getValue();
            localStorage.setItem('valueCss', codeCss);
            
            break;
        case 'javascript':
            
            codeJs = codemirrorEditor.getValue();
            localStorage.setItem('valueJs', codeJs);

            break;
    }
    
    console.log(localStorage.getItem('valueHtml'));
    console.log(localStorage.getItem('valueCss'));
    console.log(localStorage.getItem('valueJs'));
    
}

function Preview(typeP) {
   if (typeP == "show") {
       
       document.querySelector('.CodeMirror').style.display = 'none';
       previewArea.style.display = 'block';
       
    } else {
        document.querySelector('.CodeMirror').style.display = 'block';
        previewArea.style.display = "none";
    }
}


//values 
var codeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

var codeCss = `* {
    margin: 0;
    padding: 0;
}`;


var codeJs = `console.log("Hello World!");`
