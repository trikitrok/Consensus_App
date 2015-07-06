CUORE.Dom.ready(function() {
  var currentLocale = (navigator.language || navigator.browserLanguage);
  
  document.labels = {};
  document.labels[currentLocale] = {
      "proposal.button": "hacer propuesta",
      "proposal.advice": "Es importante leerla bien antes de hacer submit",
  };
  
  CUORE.Bus.enableDebug();

  document.page = new FirstTime();

  document.page.draw();

  grande.bind(document.querySelectorAll("article"));
});
