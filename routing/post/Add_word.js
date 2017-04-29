const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Add_wordRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['key', 'value'];
    }

    handle() {
        let currentName = this.params.key[0];
        if (fs.existsSync(`./base/alone/${currentName}`)) {
            let file = fs.readFileSync(`./base/alone/${currentName}`, 'utf-8');
            file = JSON.parse(file);
            this.addKey(file, [this.params.key, this.params.value])
        } else {
            let file = {};
            this.addKey(file, [this.params.key, this.params.value]);
            fs.writeFileSync(`./base/alone/${currentName}`, JSON.stringify(file));
        }

        this.complete('ok');
    }

    addKey(data, el) {
        if (!data[el[0]])
            data[el[0]] = [el[1]];
        else
            data[el[0]].push(el[1]);
    }
}

module.exports = Add_wordRoute;