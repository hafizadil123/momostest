const BaseController = require('./base.controller');
const axios = require('axios');
const ScrapModel = require('../models/index')

class ScrapController extends BaseController {
    whitelist = [
        'urls',
    ];

    crawlAndFetch = async (config) => {
        try {
            const { targetedWeb } = config || {};
            const res = await axios.get(targetedWeb);
            return JSON.stringify(res.data.body);
        } catch (e) {
            console.log('error occured', e.message)
        }

    }
    scrapMedia = async (req, res, next) => {
        const params = this.filterParams(req.body, this.whitelist);
        const [targetURL] = params.urls;
        try {
            const data = [];
            const config = {
                targetedWeb: targetURL
            }
            const results = await this.crawlAndFetch(config);
            const formatResponse = [...data, results];
            return res.status(200).json({ message: "fetching has been done", status: 'ok', success: true, data: [JSON.parse(formatResponse)] });
        } catch (err) {
            err.status = 400;
            next(err);
        }
    };


}

const Scrap = new ScrapController();

module.exports = Scrap;
