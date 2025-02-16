const crypto = require('crypto');

// Encryption settings
const algorithm = 'aes-256-cbc'; // Algorithm for encryption
const secretKey = process.env.CRYPT_KEY; // Must be 32 characters
const iv = crypto.randomBytes(16);
const path = require("path");
const fs = require("fs").promises;
const { exec, spawn } = require('child_process');

function encryptId(id) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
    let encrypted = cipher.update(id.toString(), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

function decryptId(encryptedId) {
    const [ivHex, encrypted] = encryptedId.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
const getDatetime = () => {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = String(currentTime.getMonth() + 1).padStart(2, '0');
    let date = String(currentTime.getDate()).padStart(2, '0');
    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minute = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${date} ${hours}:${minute}:${seconds}`;
}

const getDate = () => {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = String(currentTime.getMonth() + 1).padStart(2, '0');
    let date = String(currentTime.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
}
const EducationType = ['Doctorate/Phd', 'Masters/Post-Graduation', 'Graduation/Diploma', '10th', '12th'];

const isAjax = (req) => {
    return req.headers['x-requested-with'] === 'XMLHttpRequest';
}


const getJsonFile = async () => {
    const jsonFilePath = path.join(__dirname, '../../public/assets/audio/audioFile.json');
    try {
        const jsonData = await fs.readFile(jsonFilePath, 'utf8');

        // Directly await the promise
        const parsedData = jsonData ? JSON.parse(jsonData) : {}; // Parse the JSON data

        return parsedData?.mouthCues;
    } catch (err) {
        console.error("Error reading JSON file:", err);
        throw err;
    }
}



const runRhubarbCommand = async () => {

 return new Promise((resolve, reject) => {
        const shellScript = path.join(__dirname, 'audioScript.sh');
        const process = spawn(shellScript, [], { shell: true });

        process.stdout.on('data', (data) => console.log(`[stdout]: ${data.toString()}`));
        process.stderr.on('data', (data) => console.error(`[stderr]: ${data.toString()}`));

        process.on('close', (code) => {
            if (code === 0) {
                console.log("Shell script executed successfully.");
                resolve(); // Resolve when successful
            } else {
                console.error(`Shell script exited with code: ${code}`);
                reject(new Error(`Shell script failed with code: ${code}`)); // Reject on failure
            }
        });
    });


};

// Run the function


module.exports = { getDatetime, getDate, encryptId, decryptId, EducationType, isAjax, getJsonFile, runRhubarbCommand }