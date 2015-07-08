ReactClasses={

  involved: function(){
    var comment = React.createClass({
      displayName: "Involved",
      render: function() {
        return (React.createElement("p",{className: "navbar-text"},this.props.name));
      }
    });
    return comment;
  },

  clarifyingQuestion: function(){
    var question = React.createClass({
      displayName: "ClarifyingQuestion",
      render: function() {
        return (React.createElement("p",null,this.props.text));
      }
    });
    return question;
  },

  questionList: function(){
    var list = React.createClass({
      displayName: "QuestionList",

      render: function() {
        return (
          React.createElement("span",{
              "className": this.hidden()
            }, 
            React.createElement("h2",null,this.props.header),
            this.renderQuestions()
          )
        );
      },

      renderQuestions: function(){
        var questions = this.props.questions.map(function (aQuestion) {
            return (
              React.createElement(ReactClasses.clarifyingQuestion(), aQuestion)
            );
          });
        return questions;
      },

      hidden: function () {
        var hidden="";
        if (this.props.questions.length == 0 ) hidden="hidden";
        return hidden;
      }

    });
    return list;
  },


  proposal: function(){
    var proposal = React.createClass({
      displayName: "Proposal",
      
      render: function() {
        return (
          React.createElement("span", null, 
            React.createElement("article", {
              dangerouslySetInnerHTML: {__html: this.props.proposal},
              "className" : this.props.mode,
              "onMouseDown": this.getEvent()
            }),
            this.getAdvice(),
            this.getButton()
          )
        );
      },

      send: function() {
        CUORE.Bus.emit("proposal_submit", this.retrieveText());
      },

      ask: function() {
        CUORE.Bus.emit("show_question_editor") ;
      },

      prevent: function(e) {
        e.preventDefault();
      },

      getEvent: function() {
        var result=function(){};
        if (this.inShowMode()) result = this.prevent;
        return result;
      },

      getAdvice: function() {
        if ((this.inShowMode()) || (!this.props.showAdvice))return null;
        return React.createElement("p",null,this.props.advice);

      },

      getButton: function(){
        if (this.inShowMode() )return this.questionButton();
        return this.proposalButton();
      },

      proposalButton: function  () {
        return React.createElement("button",{"onClick": this.send},this.props.action);
      },


      questionButton: function  () {
        return React.createElement("button",{"onClick": this.ask},this.props.ask);
      },

      retrieveText: function(){
        var theNode = this.getDOMNode(); 
        return theNode.firstChild.innerHTML;
      },

      inShowMode: function(){
        return this.props.mode == "show"
      }

    });
    return proposal;
  },

  question: function(){
    var question = React.createClass({
      displayName: "Question",
      
      render: function() {
        return (
          React.createElement("span",{"className": this.hidden()}, 
            React.createElement("article", {
              dangerouslySetInnerHTML: {__html: this.props.placeholder},
              "className": "clarifying_question " 
            }),
            this.questionButton()
          )
        );
      },

      send: function() {
        CUORE.Bus.emit("question_addressed", this.retrieveText());
      },

      retrieveText: function(){
        var theNode = this.getDOMNode(); 
        return theNode.firstChild.innerHTML;
      },

      questionButton: function  () {
        return React.createElement("button",{"onClick": this.send},this.props.action);
      },

      hidden: function () {
        var hidden="";
        if (!this.props.show) hidden="hidden";
        return hidden;
      }

    });
    return question;
  }

};