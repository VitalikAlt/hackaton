const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class SearchRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['searchParam'];
    }

    handle() {
        let result = [], count = 0;
        this.addSearch(this.params.searchParam);
        const folders = fs.readdirSync('./base');
        for(let i = 0; i < folders.length; i++) {
            fs.readFile(`./base/${folders[i]}/${this.params.searchParam[0].toUpperCase()}`, 'utf-8', (err, data) => {
                if (err)
                    return console.log(err);

                data = JSON.parse(data);

                for (let key in data) {
                    const cattedKey = key.substr(0, this.params.searchParam.length);

                    if (cattedKey === this.params.searchParam)
                        result.push(...data[key])
                }

                count++;

                if (count === folders.length)
                    return this.complete(result);
            })
        }
    }

    async addSearch(search) {
        const count = await this.core.db.searches.getCount(search);
        console.log(count);

        if (count) {
            this.core.db.searches.addCount({search, count: count + 1});
        } else {
            this.core.db.searches.addSearch({search, count: 1});
        }
    }
}

module.exports = SearchRoute;