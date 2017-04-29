const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Health extends BaseRoute{
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    async handle() {
        let top = await this.core.db.searches.getTop(5);
        this.complete(top);
    }
}

module.exports = Health;