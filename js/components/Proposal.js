Proposal = CUORE.Class(CUORE.Component, {

    init: function() {
      Proposal.parent.init.call(this);
      this.div = ReactClasses.proposal();
    },

    draw: function(){
      var container=this.container;
      var box = this.div;
     

      React.render(
        React.createElement(box,{"proposal": HTML_LOREM_IPSUM, "action": "submit"}),
        document.getElementById(container)
      );
    }
});