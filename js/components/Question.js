Question = CUORE.Class(CUORE.Component, {

    init: function() {
      Question.parent.init.call(this);
      this.div = ReactClasses.question();
      this.show=false;
      this._internationalize();
      this._wireEvents();
    },

    draw: function(){
      React.render(
        React.createElement(this.div,this._prepareData()),
        document.getElementById(this.container)
      );
      grande.bind(document.querySelectorAll("article.clarifying_question"));
    },

    showEditor: function(){
      this.show=true;
      this.updateRender();
    },

    _prepareData: function(){
      return{
          "action": this.getText(this.actionKey),
          "placeholder": "Some random text",
          "show": this.show
        };
    },


    _internationalize: function(){
      this.actionKey="proposal.question.button";
      this.setI18NKey(this.actionKey);
    },

    _wireEvents: function() {
      this.addExecHandler("address_question","showEditor");
    },

});