


function updateOutput() {
    const editorContent = document.getElementById('editor').querySelector('textarea').value;
    const outputFrame = document.getElementById('outputFrame');
    const output = outputFrame.contentDocument || outputFrame.contentWindow.document;

    // outputFrame.contentDocument: This part is trying to access the contentDocument property of the iframe. The contentDocument property represents the document content of the iframe. This property is supported in most modern browsers.

// outputFrame.contentWindow.document: In case the contentDocument property is not supported (for example, in older versions of Internet Explorer), the code falls back to accessing the document through the contentWindow.document property. The contentWindow property represents the window inside the iframe, and from there, document is accessed.

// By using this line of code, you're attempting to get a reference to the document within the outputFrame, and the output variable will hold whichever one of these options is available and supported by the browser.

    output.open();
    // This method is called to open the document for writing. It is used to prepare the document for receiving new content.
    output.write(editorContent);
    // output.write(editorContent): This line writes the content of the editorContent (the value of the textarea) into the output document. This is where the actual update of the output content occurs.
    output.close();
    // output.close(): Finally, this method is called to close the document. This step is important to complete the writing process and make sure the changes take effect.
}

 let clear = document.getElementById('clear');
 clear.addEventListener('click', function(){
    document.getElementById('editor').querySelector('textarea').value = '';
    updateOutput();
    // why updateOutput is called here? 

 })


 function updateLineNumbers() {
    var codeInput = document.getElementById("codeInput");
    var lineNumbers = document.getElementById("lineNumbers");

    var lines = codeInput.value.split("\n");
    var lineNumberContent = "";

    for (var i = 1; i <= lines.length; i++) {
        lineNumberContent += i + "<br>";
    }

    lineNumbers.innerHTML = lineNumberContent;
}

// Initial line numbers update
updateLineNumbers();