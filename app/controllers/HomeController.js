
const home = async (req, res, next) => {
    try {
        const page = req.params.page || 'index'; // Default to 'index' if no page is specified
        res.render(page);
    } catch (err) {

        res.status(404).send('Page not found');
    }
};


module.exports = { home }