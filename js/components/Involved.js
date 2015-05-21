Involved = CUORE.Class(CUORE.Component, {

    init: function() {
      Involved.parent.init.call(this);
      this.div = ReactClasses.involved();
      this.involved = "the person involved";
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
      this._setName(response);
      this.updateRender();
    },

    _setName: function(name) {
      this.involved = name;
      this._saveName();
    },

    _saveName: function(){
      document.page.save("person.involved.name", this.involved);
    },
    
    onEnvironmentUp: function(page) {
      var savedName=page.retrieve("person.involved.name");
      if (savedName){
        this.updateInvolved(savedName);
        return;
      }
      page.getService("NAMES").execute("generate");
    },

});