function updatePreview() {
    const editorContent = document.getElementById('editor').value;
    const previewFrame = document.getElementById('preview');
    const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;

    preview.open();
    preview.write(editorContent);
    preview.close();
}