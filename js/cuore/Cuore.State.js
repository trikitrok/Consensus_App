CUORE.State = CUORE.Class(null, {

    keys: undefined,
    map: undefined,
    persister: undefined,

    init: function() {
        this.keys = [];
        this.map = {};
        this.persister = CUORE.StatePersister;
    },

    hasKey: function(key) {
        return this.keys.indexOf(key) != -1;
    },

    _addKey: function(key) {
        if (this.hasKey(key)) return;
        this.keys.push(key);
    },

    _removeKey: function(key) {
        this.keys.splice(this.keys.indexOf(key), 1);
    },

    save: function(key, value) {
        if (key === undefined) return;

        if (value === undefined || value === null) {
            this.delete(key);
            return;
        }

        this._save_in_page(key, value);
        this._save_local(key, value);
    },

    _save_in_page: function(key, value) {
        this._addKey(key);
        this.map[key] = value;
    },

    _save_local: function(key, value) {
        this.persister.save(key, value);
    },

    _from_local: function(key) {
        var value = this.persister.retrieve(key);
        this._save_in_page(key, value);
        return value;
    },

    delete: function(key) {
        this._removeKey(key);
        this.persister.remove(key);
    },

    retrieve: function(key) {
        if (!this.hasKey(key)) {
            return this._from_local(key);
        }
        return this.map[key];
    }
});