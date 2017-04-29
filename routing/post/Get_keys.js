const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Get_keysRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['searchParam'];
    }

    handle() {
        let result = [], count = 0;
        const folders = fs.readdirSync('./base');
        for(let i = 0; i < folders.length; i++) {
            fs.readFile(`./base/${folders[i]}/${this.params.searchParam[0].toUpperCase()}`, 'utf-8', (err, data) => {
                if (err)
                    return console.log(err);

                data = JSON.parse(data);

                for (let key in data) {
                    const cattedKey = key.substr(0, this.params.searchParam.length);

                    if (cattedKey === this.params.searchParam)
                        result.push(key)
                }

                count++;

                if (count === folders.length || result.length >= 10)
                    return this.complete(result);
            })
        }
    }
}

module.exports = Get_keysRoute;