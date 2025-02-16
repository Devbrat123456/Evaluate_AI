const { module_name } = require('./AdminController');
const module_path = `${module_name}/category`;
const CommonModel = require('../models/CommonModel');
const tableName = "skills";
const CommonModelInstance = new CommonModel(tableName);
const { getDatetime, getDate, encryptId, decryptId } = require('../../config/utils/helper');
const page = "Skills";
const description = "Skills";

const categoryController = {

    index: async (req, res) => {
        const allData = await CommonModelInstance.findAll();
        res.render(`${module_path}/index`, {
            page, description, allData, encryptId
        });
    },

    create: (req, res) => {
        let successMessages = req.flash('success');
        let errorMessages = req.flash('error');
        let code = successMessages.length > 0 ? 'success' : (errorMessages.length > 0 ? 'error' : undefined);
        let message = code === 'success' ? successMessages[0] : (code === 'error' ? errorMessages[0] : undefined);
        res.render(`${module_path}/create`, {
            page, description, req, code, message
        });
    },

    store: async (req, res) => {
        const { category } = req.body;
        let created_at = getDatetime();

        try {
            const newUser = await CommonModelInstance.create({ category, created_at });
            req.flash('success', 'Category added successfully!');
        } catch (error) {
            req.flash('error', 'Failed to add category!');
        }
        res.redirect(`/${module_path}/create`);
    },

    show: (req, res) => {
        const id = req.params.id;
        res.send(`Details of resource with ID ${id}`);
    },

    edit: async (req, res) => {
        const id = req.params.id;
        const data = await CommonModelInstance.findOne({ id });
        let successMessages = req.flash('success');
        let errorMessages = req.flash('error');
        let code = successMessages.length > 0 ? 'success' : (errorMessages.length > 0 ? 'error' : undefined);
        let message = code === 'success' ? successMessages[0] : (code === 'error' ? errorMessages[0] : undefined);

        res.render(`${module_path}/edit`, { data: data[0], code, message, page, description });
    },
    update: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const updateStatus = await CommonModelInstance.update({ category: data.category, updated_at: getDatetime() }, `id=${id}`);
        // res.redirect(module_path);

        if (updateStatus.affectedRows > 0) {
            req.flash('success', 'updated Successfully');
        } else {
            req.flash('error', 'Updation Failed');
        }
        res.redirect(`/${module_path}/${id}/edit`);
    },

    destroy: async (req, res) => {
        const id = req.params.id;

        try {
            const deleteStatus = await CommonModelInstance.delete({ id });

            if (deleteStatus.affectedRows > 0) {

                res.status(200).json({
                    success: true,
                    message: `Resource with ID ${id} was successfully deleted.`,
                });
            } else {
                res.status(200).json({
                    success: false,
                    message: `Resource with ID ${id} not found or could not be deleted.`,
                });
            }
        } catch (err) {
            console.error("Error deleting resource:", err);
            res.status(500).json({
                success: false,
                message: "An error occurred while trying to delete the resource.",
            });
        }
    },

};

module.exports = categoryController;
