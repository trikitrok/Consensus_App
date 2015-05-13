Involved = CUORE.Class(CUORE.Component, {

    init: function() {
      Involved.parent.init.call(this);
      this.div = ReactClasses.involved();
      this.involved = "involved";
      this.addExecHandler("NAMES_generate_EXECUTED","updateInvolved");
    },

    draw: function(){
      var container=this.container;
      var box = this.div;
     

      React.render(
        React.createElement(box,{"name": this.involved}),
        document.getElementById(container)
      );
    },

    updateInvolved: function(response) {
      this.involved = response;
      this.updateRender;
    },

    updateRender: function() {
      if(!this.container) return;
        this.draw();
    },

    setContainer: function(container) {
      this.container=container
    },

    onEnvironmentUp: function(page) {
      page.getService("NAMES").execute("generate");
    },

});