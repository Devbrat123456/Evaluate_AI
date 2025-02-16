const module_name = "admin";
const dashboard = (req, res) => {

    res.render(module_name + '/index');
}

module.exports = { dashboard, module_name }