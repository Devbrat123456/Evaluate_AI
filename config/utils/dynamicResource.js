

const dynamicResoucre = (router, moduleName) => {
    const resourceController = require(`../../app/controllers/${moduleName}Controller`);

    router.get(`/${moduleName}/`, resourceController.index);       // List all resources
    router.get(`/${moduleName}/create`, resourceController.create); // Show form to create a resource
    router.post(`/${moduleName}/`, resourceController.store);      // Store a new resource
    router.get(`/${moduleName}/:id`, resourceController.show);     // Show a single resource
    router.get(`/${moduleName}/:id/edit`, resourceController.edit); // Show form to edit a resource
    router.post(`/${moduleName}/:id`, resourceController.update);   // Update an existing resource
    router.delete(`/${moduleName}/:id`, resourceController.destroy);
}


module.exports = dynamicResoucre;