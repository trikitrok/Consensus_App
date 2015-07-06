CUORE.Dom.ready(function() {
  var currentLocale = (navigator.language || navigator.browserLanguage);
  
  document.labels = {};
  document.labels[currentLocale] = {
      "proposal.button": "hacer propuesta",
  };
  
  CUORE.Bus.enableDebug();

  document.page = new FirstTime();

  document.page.draw();

  grande.bind(document.querySelectorAll("article"));
});
