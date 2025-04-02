if (window.self === window.top) {
  document.body.innerText =
    "This application is for use in the Marketing Cloud Engagement Content Builder editor only.";
} else {
  var sdk = new window.BlockSDK(); // Ensure this is initialized correctly
  sdk.getContent(function (content) {
    var quill = new Quill('#editor-container', {
      theme: 'snow'
    });
    quill.root.innerHTML = content || "Type here..."; // Ensure default content is set

    function saveText() {
      var html = quill.root.innerHTML;
      sdk.setContent(html);
      sdk.setSuperContent('This is super content: ' + html);

      sdk.getData(function (data) {
        var numberOfEdits = data.numberOfEdits || 0;
        sdk.setData({
          numberOfEdits: numberOfEdits + 1
        });
      });
    }

    quill.on('text-change', saveText);
  });
}
