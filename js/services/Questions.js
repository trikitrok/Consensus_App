Questions = CUORE.Class(CUORE.Service, {

    init: function() {
      Questions.parent.init.call(this);
      this.name = 'QUESTIONS';
    },
    
    register: function(text,eventName) {
        this.emit(eventName,text);
    },

    wrapRequestParams: function(params) {
        return params;
    },

    wrapResponse: function(response) {
        return response;
    },


});