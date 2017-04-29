const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Test extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['path'];
    }

    handle() {
        let data = fs.readFileSync(this.params.path, 'utf-8');
        data = data.split('\n');

        let currentFile = {};
        let currentName = (data[0])? data[0][0] : '0';
        for (let i = 0; i < data.length; i++) {
            if (currentName === data[i][0]) {
                this.addKey(currentFile, data[i].split(' \t'));
                continue;
            }


            fs.writeFileSync(`./base/test/${currentName}`, JSON.stringify(currentFile));
            currentName = data[i][0];
            currentFile = {};
            this.addKey(currentFile, data[i].split(' \t'));
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

module.exports = Test;