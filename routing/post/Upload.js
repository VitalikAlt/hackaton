const fs = require('fs');
const util = require('util');
const formidable = require('formidable');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class SearchRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return [];
    }

    handle() {
        const form = new formidable.IncomingForm();

        form.parse(this.req, (err, fields, files) => {
            this.res.writeHead(200, {'content-type': 'text/plain'});
            this.res.write('received upload:\n\n');
            this.res.end(util.inspect({fields: fields, files: files}));

            const fileName = files['uploads[]'].name;
            this.onFileUploaded(files['uploads[]'].path, fileName.slice(0, fileName.indexOf('.')));
            console.log('!!!!', files['uploads[]'].path);
        });
    }

    onFileUploaded(path, folderName) {
        let data = fs.readFileSync(path, 'utf-8');
        data = data.split('\n');

        let currentFile = {};
        let currentName = (data[0])? data[0][0] : '0';
        for (let i = 0; i < data.length; i++) {
            if (currentName === data[i][0]) {
                this.addKey(currentFile, data[i].split('\t'));
                continue;
            }


            fs.writeFileSync(`./base/${folderName}/${currentName}`, JSON.stringify(currentFile));
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

module.exports = SearchRoute;