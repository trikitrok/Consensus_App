Proposal = CUORE.Class(CUORE.Component, {

    init: function() {
      this.buttonKey="proposal.button";
      Proposal.parent.init.call(this);
      this.div = ReactClasses.proposal();
      this.setI18NKey(this.buttonKey);
    },

    draw: function(){
      var container=this.container;
      var box = this.div;
     

      React.render(
        React.createElement(box,{
          "proposal": HTML_LOREM_IPSUM,
          "action": this.getText(this.buttonKey),
        }),
        document.getElementById(container)
      );
    },

});