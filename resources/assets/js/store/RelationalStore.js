import Vue from 'vue';
export default class RelationalStore {

    /**
     * @param {object} options
     */
    constructor(options) {  
        this._options = options;
        this.state = {};

        // Create an index for each model type.
        for (let model in this._options.models) {
            if (this._options.models.hasOwnProperty(model)) {
                Vue.set(this.state, model, {});
            }
        }
    }

    /**
     * @param {object} entity
     * @param {string} type
     * @public
     */
    addEntity(entity, type) {
        this._initializeRelations(entity, type);
        Vue.set(this.state[type], this._getId(entity, type), entity);
        this._updateRelations(entity, type);
        return entity;
    }

    /**
     * @param {object} entity
     * @param {string} type
     * @returns {string}
     * @private
     */
    _getId(entity, type) {
        return this._getValue(entity, this._options.models[type].key);
    }

    /**
     * @param {object} entity
     * @param {function|string} key
     * @returns {*}
     * @private
     */
    _getValue(entity, key) {
        if (typeof key === 'function') {
            return key(entity);
        }

        return entity[key];
    }

    /**
     * @param {string} type
     * @param {object} entity
     * @private
     */
    _initializeRelations(entity, type) {
        let relations = this._options.models[type].foreign;

        for (let foreignModel in relations) {
            if (relations.hasOwnProperty(foreignModel)) {
                Vue.set(entity, relations[foreignModel].reference, null);
            }
        }

        this._getReverseKeys(type).forEach(reverseKey => Vue.set(entity, reverseKey, []));
    }

    /**
     * Returns the keys of all collections that models of `type` would exist within for other relations.
     *
     * @param type
     * @returns {Array}
     * @private
     */
    _getReverseKeys(type) {
        let relations = [];

        for (let foreignModel in this._options.models) {
            if (this._options.models.hasOwnProperty(foreignModel)) {
                for (let relation in this._options.models[foreignModel].foreign) {
                    if (this._options.models[foreignModel].foreign.hasOwnProperty(relation) && relation === type) {
                        relations.push(this._options.models[foreignModel].foreign[relation].reverse);
                    }
                }
            }
        }

        return relations;
    }

    /**
     * Updates the relations that this model would have a specific, direct reference to.
     *
     * @param {object} entity
     * @param {string} type
     * @private
     */
    _updateRelations(entity, type) {
        let relations = this._options.models[type].foreign;
        for (let foreignModel in relations) {
            if (relations.hasOwnProperty(foreignModel)) {
                this._updateForeignRelation(entity, type, foreignModel);
            }
        }
    }

    /**
     * Updates the foreign relation on the passed model and goes to that other model to
     * insert or remove the model from the has-many collection.
     *
     * @param entity
     * @param type
     * @param foreignModel
     * @private
     */
    _updateForeignRelation(entity, type, foreignModel) {
        let oldForeignEntity = entity[this._getReferenceKey(type, foreignModel)],
            newForeignEntity = this.state[foreignModel][this._getForeignKey(entity, type, foreignModel)];
        if (newForeignEntity !== oldForeignEntity) {
            this._setHasOne(entity, newForeignEntity, type, foreignModel);

            if (oldForeignEntity) {
                this._removeHasMany(entity, oldForeignEntity, type, foreignModel);
            }

            if (newForeignEntity) {
                this._setHasMany(entity, newForeignEntity, type, foreignModel);
            }
        }
    }

    /**
     * @param {string} type
     * @param {string} otherType
     * @returns {string}
     * @private
     */
    _getReferenceKey(type, otherType) {
        return this._options.models[type].foreign[otherType].reference;
    }

    /**
     * Sets `otherModel` in place on `model`.
     *
     * @param {object} model
     * @param {object} otherModel
     * @param {string} type
     * @param {string} otherType
     * @private
     */
    _setHasOne(model, otherModel, type, otherType) {
        Vue.set(model, this._options.models[type].foreign[otherType].reference, otherModel);
    }

    /**
     * Fetches the value of the foreign key from the model. i.e. the ID of the referenced model.
     *
     * @param {object} model
     * @param {string} type
     * @param {string} otherType
     * @returns {string}
     * @private
     */
    _getForeignKey(model, type, otherType) {
        return this._getValue(model, this._options.models[type].foreign[otherType].key);
    }

    /**
     * @param {object} model
     * @param {object} otherModel
     * @param {string} type
     * @param {string} otherType
     * @private
     */
    _setHasMany(model, otherModel, type, otherType) {
        let hasMany = this._getReverseCollection(otherModel, type, otherType);

        if (hasMany.indexOf(model) === -1) {
            hasMany.push(model);
        }
    }

    /**
     * Fetches the array on `otherModel` that would contain `model`.
     *
     * @param {object} otherModel
     * @param {string} type
     * @param {string} otherType
     * @returns {Array}
     * @private
     */
    _getReverseCollection(otherModel, type, otherType) {
        return otherModel[this._options.models[type].foreign[otherType].reverse];
    }

    /**
     * Removes `model` from the relational collection on `otherModel` that would contain it.
     *
     * @param {object} model
     * @param {object} otherModel
     * @param {string} type
     * @param {string} otherType
     * @private
     */
    _removeHasMany(model, otherModel, type, otherType) {
        let hasMany = this._getReverseCollection(otherModel, type, otherType),
            modelIndex = hasMany.indexOf(model);
        if (modelIndex > -1) {
            // Vue.delete(hasMany, modelIndex);
            hasMany.splice(modelIndex, 1);
        }
    }

    /**
     * @param {object} entity
     * @param {string} type
     * @public
     */
    updateEntity(entity, type) {
        let id = this._getId(entity, type),
            oldEntity = this.state[type][id];

        for (let prop in entity) {
            if (entity.hasOwnProperty(prop)) {
                Vue.set(oldEntity, prop, entity[prop]);
            }
        }

        entity = this.state[type][this._getId(entity, type)];
        this._updateRelations(entity, type);
        return entity;
    }

    /**
     * @param {object} entity
     * @param {string} type
     * @public
     */
    removeEntity(entity, type) {
        let id = this._getId(entity, type),
            relations = this._options.models[type].foreign;

        Vue.delete(this.state[type], id);
        // this.state[type].splice(1);

        // Unset has-many relations from other models.
        for (let foreignModel in relations) {
            if (relations.hasOwnProperty(foreignModel)) {
                let oldForeignEntity = entity[this._getReferenceKey(type, foreignModel)];

                if (oldForeignEntity) {
                    this._removeHasMany(entity, oldForeignEntity, type, foreignModel);
                }
            }
        }

        // Unset has-one relations from other models.
        for (let foreignModel in this._options.models) {
            if (this._options.models.hasOwnProperty(foreignModel) && foreignModel !== type) {
                for (let relation in this._options.models[foreignModel].foreign) {
                    if (this._options.models[foreignModel].foreign.hasOwnProperty(relation) && relation === type) {
                        let reference = this._options.models[foreignModel].foreign[relation].reference;

                        for (id in this.state[foreignModel]) {
                            if (this.state[foreignModel].hasOwnProperty(id) && this.state[foreignModel][reference] === entity) {
                                // this.state[foreignModel].splice(reference, 1);
                                Vue.delete(this.state[foreignModel], reference);
                                //or
                                // Vue.set(this.state[foreignModel], reference, null);
                            }
                        }
                    }
                }
            }
        }
    }
};