Proposal = CUORE.Class(CUORE.Component, {

    init: function() {
      Proposal.parent.init.call(this);
      this.adviceShown=false;
      this.mode=this.EDIT;
      this.div = ReactClasses.proposal();
      this._internationalize();
      this._wireEvents();
    },

    draw: function(){
      React.render(
        React.createElement(this.div,this._prepareData()),
        document.getElementById(this.container)
      );

      grande.bind(document.querySelectorAll("article.edit"));
    },

    _prepareData: function(){
      return{
          "proposal": HTML_LOREM_IPSUM,
          "action": this.getText(this.buttonKey),
          "showAdvice": this.adviceShown,
          "advice": this.getText(this.adviceKey),
          "mode": this.mode,
        };
    },


    submitProposal: function(text){
      if (this._isFirstTry()){
        this._showAdvice();
      }
      else{
        this._registerProposal(text);
      }
    },

    _isFirstTry: function(){
      return !this.adviceShown
    },

    chooseMode: function(proposal){
      if(!proposal){
        this.mode="edit";
      }
      else{
        this.mode="show";
      }

      this.updateRender(); 
    },

    _showAdvice: function(){
      this.adviceShown = true;
      this.updateRender(); 
    },

    _registerProposal: function(text){
      this.execute("PROPOSALS","register",text);
    },

    _internationalize: function(){
      this.buttonKey="proposal.button";
      this.adviceKey="proposal.advice";
      
      this.setI18NKey(this.buttonKey);
      this.setI18NKey(this.adviceKey);
    },

    _wireEvents: function() {
      this.addExecHandler("proposal_submit","submitProposal");
      this.addExecHandler("PROPOSALS_register_EXECUTED","chooseMode");
      this.addExecHandler("PROPOSALS_current_EXECUTED","chooseMode");
    },

    onEnvironmentUp: function(page) {
      page.getService("PROPOSALS").execute("current");
    },

});