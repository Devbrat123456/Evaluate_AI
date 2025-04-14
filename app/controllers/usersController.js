const module_path = `Users`;
const CommonModel = require('../models/CommonModel');
const tableName = "users";
const UserModelInstance = new CommonModel(tableName);
const { getDatetime, getDate, encryptId, decryptId, EducationType, isAjax } = require('../../config/utils/helper');
const page = "Skills";
const description = "Skills";
const educationModel = new CommonModel('education');
const employementModel = new CommonModel('employement');
const experienceModel = new CommonModel('experience');
const skillsModelInstance = new CommonModel('skills');
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_TOKEN;
const jwtExpiry = process.env.JWTEXPIRY;
const bcrypt = require("bcrypt");


const cookieOptions = {
    httpOnly: true,        // Cookie not accessible via JavaScript
    secure: false,         // Set to true in production (requires HTTPS)
    sameSite: "Strict",    // Protect against CSRF (adjust based on needs)
    maxAge: 3600000        // Cookie expiry (1 hour)
};


const usersController = {

    index: async (req, res) => {
        const allData = await UserModelInstance.findAll();
        console.log(req);
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


        const { LINKEDIN, GITHUB, confirm_password, NAME, EMAIL, EXPERIENCE, PASSWORD, PHONE, RESUME, work_status } = req.body;

        if (PASSWORD != confirm_password) {

            if (isAjax(req)) {
                let msg = {
                    'message': "Password do not match with confirm password please try again"
                }
                return res.status(500).json(msg);
            } else {
                req.flash('error', 'Password do not match pls try again ');
                return res.redirect(`/`);
            }
        }

        let ifUserExist = await UserModelInstance.findOne({ EMAIL });

        if (ifUserExist.length > 0) {
            let msg = {
                'message': "User Already Exist! Please Login"
            }
            return res.status(200).json(msg);
        }
        // process.exit();
        let created_at = getDatetime();
        const hashedPassword = await bcrypt.hash(PASSWORD, 10);
        // dataToSave.created_at = created_at;
        let dataToSave = {
            work_status: work_status ?? null,
            EXPERIENCE: (isNaN(parseInt(EXPERIENCE)) ? 0 : EXPERIENCE) ?? null,
            PHONE: PHONE ?? null,
            LINKEDIN: LINKEDIN ?? null,
            GITHUB: GITHUB ?? null,
            RESUME: RESUME ?? null,
            NAME, EMAIL, created_at, PASSWORD: hashedPassword
        }
        // console.log(hashedPassword);

        if (req.files) {
            let image = req.files;
            // image.mv('/assets/profile/' + image.name);
            // let path = "/assets/profile" + image.name;
            console.log(image);
        }


        try {
            const newUser = await UserModelInstance.create(dataToSave);
            let msg = {
                'message': "Sign Up Success Fully Now you can Login!"
            }
            if (isAjax(req)) {
                return res.status(200).json(msg);
            }
            req.flash('success', 'Sign Up Success Fully Now you can Login!');

        } catch (error) {
            if (isAjax(req)) {
                let msg = {
                    'message': 'Failed  to add Please Try Again! ' + error.sqlMessage
                }
                return res.status(500).json(msg);
            }
            req.flash('error', 'Failed  to add Please Try Again! ' + error.sqlMessage);
        }

        return res.redirect(`/`);
    },

    show: (req, res) => {
        const id = req.params.id;
        res.send(`Details of resource with ID ${id}`);
    },

    edit: async (req, res) => {
        const id = req.params.id;
        const data = await UserModelInstance.findOne({ id });
        const employementDetails = await employementModel.findOne({ user_id: id })
        const educationDetails = await educationModel.findOne({ user_id: id });
        const experienceDetails = await experienceModel.findOne({ user_id: id });
        const experienceRelatedData = await UserModelInstance.buildDynamicQueryJoin(['users', 'skills', 'experience'], ['users.NAME', 'skills.category', 'experience.experience', 'experience.id'], [{ type: "inner", table: "experience", on: 'users.id=experience.user_id' }, { type: 'inner', table: 'skills', on: 'skills.id=experience.skill_id' }], [{ column: 'users.id', value: id }])

        let successMessages = req.flash('success');
        let errorMessages = req.flash('error');
        let code = successMessages.length > 0 ? 'success' : (errorMessages.length > 0 ? 'error' : undefined);
        let message = code === 'success' ? successMessages[0] : (code === 'error' ? errorMessages[0] : undefined);

        const allSkills = await skillsModelInstance.findAll();



        res.render(`${module_path}/edit`, { data: data[0], code, message, page, description, allSkills, EducationType, employementDetails, educationDetails, experienceRelatedData, allSkillsJson: JSON.stringify(allSkills) });
    },
    update: async (req, res) => {
        const id = req.params.id;
        const { NAME, EMAIL, PHONE, RESUME, GITHUB, LINKEDIN, CURRENT_JOB, EXPERIENCE } = req.body;

        try {

            const updateStatus = await UserModelInstance.update({ NAME, EMAIL, PHONE, RESUME: RESUME ?? null, GITHUB: GITHUB ?? null, LINKEDIN: LINKEDIN ?? null, CURRENT_JOB: CURRENT_JOB ?? null, EXPERIENCE: isNaN(EXPERIENCE) ? 0 : EXPERIENCE ?? 0, updated_at: getDatetime() }, `id=${id}`);

            if (updateStatus.affectedRows > 0) {
                req.flash('success', 'updated Successfully');
            } else {
                req.flash('error', 'Updation Failed');
            }
        }
        catch (error) {
            req.flash('error', 'Failed  to add Please Try Again! ' + error.sqlMessage);
        }
        res.redirect(`/${module_path}/${id}/edit`);
    },

    destroy: async (req, res) => {
        const id = req.params.id;

        try {
            const deleteStatus = await UserModelInstance.delete({ id });

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
    Register: async (req, res, next) => {

        try {
            res.render(`${module_path}/register`);
        } catch (err) {

            res.status(404).send('Page not found');
        }

    },
    AddEducation: async (req, res, next) => {

        const { university, course_type, course, education, from_duration, to_duration, user_id } = req.body;
        let created_at = getDatetime();
        try {
            let course_duration = from_duration + "-" + to_duration;
            let dataToSave = {
                university: university ?? null,
                course_type: (isNaN(parseInt(course_type)) ? 0 : course_type) ?? null,
                course: course ?? null,
                education: education ?? null, created_at, course_duration, user_id
            }

            const newEducation = await educationModel.create(dataToSave);

            if (newEducation.affectedRows > 0) {
                let msg = {
                    'message': "SuccessFully Added",
                    'status': 200,
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    'message': "Insertion Failed",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }


        } catch (error) {
            let msg = {
                'message': error.sqlMessage,
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },
    AddEmployement: async (req, res, next) => {


        const { isCurrent, employment_type, company_name, job_title, notice_period, user_id, total_experience, job_profile, joining_date } = req.body;
        let created_at = getDatetime();

        try {

            let dataToSave = {
                is_current_employement: isCurrent ?? null,
                employment_type: employment_type ?? null,
                job_title: job_title ?? null,
                company_name: company_name ?? null,
                total_experience: (isNaN(parseInt(total_experience)) ? 0 : total_experience) ?? null,
                notice_period: (isNaN(parseInt(notice_period)) ? 0 : notice_period) ?? null,
                job_profile: job_profile ?? null,
                joining_date: joining_date ?? null,
                created_at, user_id
            }

            const newEmployementModel = await employementModel.create(dataToSave);

            if (newEmployementModel.affectedRows > 0) {
                let msg = {
                    'message': "SuccessFully Added",
                    'status': 200,
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    'message': "Insertion Failed",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }

        } catch (error) {
            console.log(error);
            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },
    AddUserSkills: async (req, res, next) => {

        const { user_id, skill_id, experience } = req.body;
        let created_at = getDatetime();

        try {

            let dataToSave = {
                user_id: user_id ?? null,
                skill_id: skill_id ?? null,
                experience: experience ?? null,
                created_at
            }

            const newExperience = await experienceModel.create(dataToSave);

            if (newExperience.affectedRows > 0) {
                let msg = {
                    'message': "SuccessFully Added",
                    'status': 200,
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    'message': "Insertion Failed",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }

        } catch (error) {

            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },
    Login: async (req, res, next) => {

        let { EMAIL, password } = req.body;
        try {

            const data = await UserModelInstance.findOne({ EMAIL });

            if (data) {

                const isMatch = await bcrypt.compare(password, data[0].PASSWORD);
                if (!isMatch) {
                    return res.status(401).json({ message: "Invalid credentials" });
                }
                const payload = {
                    id: data[0].id, // User ID
                    EMAIL: data[0].EMAIL, // Email address (if needed)
                    ROLE_ID: data[0].ROLE_ID,
                    NAME: data[0].NAME,
                    PHONE: data[0].PHONE,

                    // Role ID (if needed)
                };

                const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiry });
                res.cookie("authToken", token, cookieOptions);
                let msg = {
                    'message': "SuccessFully logged in",
                    'status': 200,
                    'token': true,
                }
                // req.user = data;
                return res.status(200).json(msg);

            } else {
                let msg = {
                    'message': "User does not exist Please Sign up",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }

        } catch (error) {

            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },
    fetchUserSkill: async (req, res, next) => {
        try {
            const { id } = req.body;

            const newExperience = await experienceModel.findOne({ id });


            let msg = {
                'data': newExperience?.[0],
                'status': 200,
            }
            return res.status(200).json(msg);


        } catch (error) {

            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },
    EditUserSkills: async (req, res, next) => {

        const { experience_id, skill_id, experience } = req.body;
        let updated_at = getDatetime();

        try {

            let dataToSave = {
                skill_id: skill_id ?? null,
                experience: experience ?? null,
                updated_at
            }

            const newExperience = await experienceModel.update(dataToSave, `id=${experience_id}`);

            if (newExperience.affectedRows > 0) {
                let msg = {
                    'message': "SuccessFully Updated",
                    'status': 200,
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    'message': "Insertion Failed",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }

        } catch (error) {

            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },

    FetchUserEmployement: async (req, res, next) => {

        try {
            const { id } = req.body;
            const newExperience = await employementModel.findOne({ id });

            let msg = {
                'data': newExperience?.[0],
                'status': 200,
            }
            return res.status(200).json(msg);


        } catch (error) {

            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },
    FetchUserEducation: async (req, res, next) => {

        try {
            const { id } = req.body;
            const newExperience = await educationModel.findOne({ id });

            let msg = {
                'data': newExperience?.[0],
                'status': 200,
            }
            return res.status(200).json(msg);


        } catch (error) {

            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }
    },

    EditUserEmployement: async (req, res, next) => {


        const { isCurrent, employment_type, company_name, job_title, notice_period, edit_employee_id, total_experience, job_profile, joining_date } = req.body;
        let updated_at = getDatetime();

        try {

            let dataToSave = {
                is_current_employement: isCurrent ?? null,
                employment_type: employment_type ?? null,
                job_title: job_title ?? null,
                company_name: company_name ?? null,
                total_experience: (isNaN(parseInt(total_experience)) ? 0 : total_experience) ?? null,
                notice_period: (isNaN(parseInt(notice_period)) ? 0 : notice_period) ?? null,
                job_profile: job_profile ?? null,
                joining_date: joining_date ?? null,
                updated_at
            }

            const newExperience = await employementModel.update(dataToSave, `id=${edit_employee_id}`);

            if (newExperience.affectedRows > 0) {
                let msg = {
                    'message': "SuccessFully Updated",
                    'status': 200,
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    'message': "Insertion Failed",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }

        } catch (error) {
            console.log(error);
            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }

    },
    editUserEducation: async (req, res, next) => {


        const { university, course_type, course, education, from_duration, to_duration, education_id } = req.body;
        let updated_at = getDatetime();

        try {

            let course_duration = from_duration + "-" + to_duration;
            let dataToSave = {
                university: university ?? null,
                course_type: (isNaN(parseInt(course_type)) ? 0 : course_type) ?? null,
                course: course ?? null,
                education: education ?? null, updated_at, course_duration,
            }

            const newExperience = await educationModel.update(dataToSave, `id=${education_id}`);

            if (newExperience.affectedRows > 0) {
                let msg = {
                    'message': "SuccessFully Updated",
                    'status': 200,
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    'message': "Insertion Failed",
                    'status': 500,
                }
                return res.status(500).json(msg);
            }

        } catch (error) {
            console.log(error);
            let msg = {
                'message': error.sqlMessage || "Something went wrong",
                'status': 500,
            }
            return res.status(500).json(msg);
        }

    },

    UploadProfile:async(req,res)=>{

            if(!req.files){
                return res.status(500).json({'message':"No file Found for Profile"})
            }
    },
    UploadResume:async(req,res,err)=>{
                if(!req.files){
                return res.status(500).json({'message':"No file Found for Resume"});
            }



        try {
              const {user_id}= req.body;
                let filePath = req.files[0].filename;
            const updateStatus = await UserModelInstance.update({ RESUME: filePath ?? null}, `id=${user_id}`);

            if (updateStatus.affectedRows > 0) {
                return res.status(200).json({"message":"Updated Successfully","filePath":filePath});
            } else {
                return res.status(500).json({"message":"Failed Updation"});
            }
        }
        catch (error) {
            return res.status(500).json({"message":'Failed  to add Please Try Again! ' + error.sqlMessage});
        }


    }       


}

module.exports = usersController;
