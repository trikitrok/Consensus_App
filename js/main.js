CUORE.Dom.ready(function() {
  var currentLocale = (navigator.language || navigator.browserLanguage);
  
  document.labels = {};
  document.labels[currentLocale] = {
      "a.key": "a literal",
  };
  
  FIRST_NAMES = [
    "Jon","Alfred", "Mary"
  ];

  MIDDLE_NAMES = [
    "Bon","Penny", "Pickford"
  ];

  LAST_NAMES = [
    "Jovi","Weather", "Smith"
  ];
  
  CUORE.Bus.enableDebug();

  document.page = new FirstTime();

  document.page.draw();
});
