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
        if (this.inShowMode() )return null;
        return React.createElement("button",{"onClick": this.send},this.props.action);
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
  }

};