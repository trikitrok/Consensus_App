QuestionList = CUORE.Class(CUORE.Component, {

    init: function() {
      QuestionList.parent.init.call(this);
      this.div = ReactClasses.questionList();
      this._internationalize();
      this._wireEvents();
    },

    draw: function(){
      React.render(
        React.createElement(this.div,this._prepareData()),
        document.getElementById(this.container)
      );
    },

    _prepareData: function(){
      return{
          "header": this.getText(this.headerKey),
          "questions": this.questions
        };
    },


    _internationalize: function(){
      this.headerKey="question.list.header";
      this.setI18NKey(this.headerKey);
    },

    _wireEvents: function() {
      this.addExecHandler("QUESTIONS_register_EXECUTED","getQuestions");
      this.addExecHandler("QUESTIONS_list_EXECUTED","showQuestions");
    },

    onEnvironmentUp: function(page) {
      page.getService("QUESTIONS").execute("list");
    },

    getQuestions: function() {
      this.execute("QUESTIONS","list");
    },

    showQuestions: function(questions) {
      this.questions = questions;
      this.updateRender();
    }

});