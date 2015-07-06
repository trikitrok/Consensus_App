Proposal = CUORE.Class(CUORE.Component, {

    init: function() {
      Proposal.parent.init.call(this);
      this.adviceShown=false;
      this.div = ReactClasses.proposal();
      this.internationalize();
      
      this.addExecHandler("proposal_submit","submitProposal");
    },

    draw: function(){
    
      var data = {
          "proposal": HTML_LOREM_IPSUM,
          "action": this.getText(this.buttonKey),
          "showAdvice": this.adviceShown,
          "advice": this.getText(this.adviceKey),
        };
     

      React.render(
        React.createElement(this.div,data),
        document.getElementById(this.container)
      );
    },

    submitProposal: function(text){
      if (this.isFirstTry()){
        this.showAdvice();
      }
      else{
        this.registerProposal(text);
      }
    },

    isFirstTry: function(){
      return !this.adviceShown
    },

    showAdvice: function(){
      this.adviceShown = true;
      this.updateRender(); 
    },

    registerProposal: function(text){
      console.log(text);
      console.log("Proposal submitted")
    },

    internationalize: function(){
      this.buttonKey="proposal.button";
      this.adviceKey="proposal.advice";
      
      this.setI18NKey(this.buttonKey);
      this.setI18NKey(this.adviceKey);
    },


});