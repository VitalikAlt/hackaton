const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Test extends BaseRoute {
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
            fs.readFile(`./base/${folders[i]}/${this.params.text[0].toUpperCase()}`, 'utf-8', (err, data) => {
                if (err)
                    return console.log(err);

                data = JSON.parse(data);

                for (let key in data) {
                    const cattedKey = key.substr(0, this.params.text.length);

                    if (cattedKey === this.params.text)
                        result.push(...data[key])
                }

                count++;

                if (count === folders.length)
                    return this.complete(result);
            })
        }
    }
}

module.exports = Test;