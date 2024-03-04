function updateOutput() {
    const editorContent = document.getElementById('codeInput').value;
    const outputFrame = document.getElementById('outputFrame');
    const output = outputFrame.contentDocument || outputFrame.contentWindow.document;

    output.open();
    output.write(editorContent);
    output.close();

    // Update line numbers based on visible lines
    updateVisibleLineNumbers();
}

function updateVisibleLineNumbers() {
    var codeInput = document.getElementById("codeInput");
    var lineNumbers = document.getElementById("lineNumbers");

    var scrollTop = codeInput.scrollTop;
    var lineHeight = codeInput.scrollHeight / codeInput.rows;
    var firstVisibleLineNumber = Math.floor(scrollTop / lineHeight) + 1;

    var lines = codeInput.value.split("\n");
    var lineNumberContent = "";

    for (var i = firstVisibleLineNumber; i <= lines.length; i++) {
        lineNumberContent += i + "<br>";
    }

    lineNumbers.innerHTML = "<pre>" + lineNumberContent + "</pre>";
}

function syncScroll() {
    var codeInput = document.getElementById("codeInput");
    var lineNumbers = document.getElementById("lineNumbers");

    lineNumbers.scrollTop = codeInput.scrollTop;
}

// Initial line numbers update
updateVisibleLineNumbers();


let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
document.getElementById('editor').querySelector('textarea').value = '';
updateOutput();
// why updateOutput is called here? 

})