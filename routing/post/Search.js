const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class Test extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['text'];
    }

    handle() {
        let result = [];
        const folders = fs.readdirSync('./base');
        for(let i = 0; i < folders.length; i++) {
            fs.readFile(`./base/${folders[i]}/${this.params.text[0].toUpperCase()}`, 'utf-8', (err, data) => {
                if (err)
                    return console.log(err);

                data = JSON.parse(data);

                for (let key in data) {
                    const cattedKey = key.substr(0, this.params.text.length);

                    if (cattedKey === this.params.text) {
                        console.log('--------')
                        result.push(...data[key])
                        console.log(result)
                    }
                }
            })
        }

        this.complete(result);
    }

    addKey(data, el) {
        if (!data[el[0]])
            data[el[0]] = [el[1]];
        else
            data[el[0]].push(el[1]);
    }
}

module.exports = Test;