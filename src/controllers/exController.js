const exModel = require('../model/exModel')

class ExController {
    async save(req, res) {
        const ex = await exModel.create(req.body)

        return res.json(ex)
    }

    async get(req, res) {
        const ex = await exModel.getById(req.params.id).populate({
            path: 'files',
            options: {
                sort: {createdAt: -1}
            }
        });

        return res.json(ex);
    }
}

module.exports = new ExController();