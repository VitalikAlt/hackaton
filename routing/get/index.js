const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Health extends BaseRoute{
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    handle() {
        const html = fs.readFileSync('./frontend/dist/index.html', 'utf-8');
        this.res.writeHeader(200, {"Content-Type": "text/html"});
        this.res.write(html);
        this.res.end();
    }
}

module.exports = Health;