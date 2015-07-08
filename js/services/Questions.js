Questions = CUORE.Class(CUORE.Service, {

    init: function() {
      Questions.parent.init.call(this);
      this.name = 'QUESTIONS';
      this.count = 0;
    },
    
    register: function(text,eventName) {
        this.count = this.count + 1;
        this.emit(eventName,this.count);
    },

    list: function(params,eventName) {
        var questions=[]
        
        for (var i = this.count; i > 0; i--) {
            questions.push({"text": "una pregunta"}); 
        };
    
        this.emit(eventName,questions);
    
    },

    wrapRequestParams: function(params) {
        return params;
    },

    wrapResponse: function(response) {
        return response;
    },


});