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

  proposal: function(){
    var proposal = React.createClass({
      displayName: "Proposal",
      
      render: function() {

        return (
          React.createElement("span", null, 
            React.createElement("article", {dangerouslySetInnerHTML: {__html: this.props.proposal}}),
            this.getAdvice(this.props.showAdvice),
            React.createElement("button",{"onClick": this.send},this.props.action)
          )
        );
      },

      send: function() {
        CUORE.Bus.emit("proposal_submit", this.retrieveText());
      },

      getAdvice: function(mustShow) {
        if (!this.props.showAdvice)return null;
        return React.createElement("p",null,this.props.advice);

      },

      retrieveText: function(){
        var theNode = this.getDOMNode(); 
        return theNode.firstChild.innerHTML;
      }


    });
    return proposal;
  }

};