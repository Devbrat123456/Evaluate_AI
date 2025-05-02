const crypto = require('crypto');

// Encryption settings
const algorithm = 'aes-256-cbc'; // Algorithm for encryption
const secretKey = process.env.CRYPT_KEY; // Must be 32 characters
const iv = crypto.randomBytes(16);
const path = require("path");
const fs = require("fs").promises;
const fs2 = require("fs");
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
const currentTimeStamp =()=>{
      let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = String(currentTime.getMonth() + 1).padStart(2, '0');
    let date = String(currentTime.getDate()).padStart(2, '0');
    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minute = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    return `${year}${month}${date}${hours}${minute}${seconds}`;
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


const getJsonFile = async (id) => {
    const jsonFilePath = path.join(__dirname, `../../public/assets/audio/audioFile${id}.json`);
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


function getPhonemes(text, callback) {
    const command = `espeak-ng -x -q "${text}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        
        callback(stdout.trim());
    });
}


const inputFilePath = "/home/admin1/Desktop/java/Nodejs/Evalutation/public/assets/audio/ElevenLabsNew.wav";
const phonemeFilePath = "/home/admin1/Desktop/java/Nodejs/Evalutation/public/assets/audio/phonemes.txt";
const jsonFilePath = "/home/admin1/Desktop/java/Nodejs/Evalutation/public/assets/audio/audioFile.json";


const runRhubarbCommand = async () => {

 return new Promise((resolve, reject) => {
    // console.log(text);
        const shellScript = path.join(__dirname, 'audioScript.sh');
        const process = spawn(shellScript, [], { shell: true });
            console.log("running script");
        process.stdout.on('data', (data) => {
            console.log(`[stdout]: ${data.toString()}`);
        });
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




function phonemeToViseme(phoneme) {

    // Mapping phonemes to visemes (Modify as needed)
   const phonemeToVisemeVar = {
    "AA": "A", "AE": "A", "AH": "B", "AO": "B", "AW": "C",
    "AY": "C", "B": "D", "CH": "E", "D": "F", "DH": "F",
    "EH": "G", "ER": "G", "EY": "H", "F": "I", "G": "J",
    "HH": "K", "IH": "L", "IY": "L", "JH": "M", "K": "N",
    "L": "O", "M": "P", "N": "Q", "NG": "Q", "OW": "R",
    "OY": "S", "P": "T", "R": "U", "S": "V", "SH": "W",
    "T": "X", "TH": "X", "UH": "Y", "UW": "Y", "V": "Z",
    "W": "Z", "Y": "A", "Z": "B", "ZH": "C"
};

    return phonemeToVisemeVar[phoneme] || "X"; // Default to "X" if not mapped
}

function processPhonemes(output, duration = 20) {
   let phonemes = output.trim().match(/[^ ]+/g) || [];  // Better phoneme extraction

    if (phonemes.length === 0) {
        console.error("No phonemes found!");
        return null;
    }

    let phonemeDurations = phonemes.map(p => p.length); // Weight based on phoneme length
    let totalWeight = phonemeDurations.reduce((a, b) => a + b, 0);
    
    let elapsedTime = 0;
    let mouthCues = phonemes.map((phoneme, index) => {
        let phonemeDuration = (phonemeDurations[index] / totalWeight) * duration;
        let start = elapsedTime.toFixed(2);
        let end = (phonemeDuration).toFixed(2);
        elapsedTime += phonemeDuration;

        return {
            start,
            end,
            value: phonemeToViseme(phoneme)
        };
    });

    return {
        metadata: {
            soundFile: "/path/to/audio.wav",
            duration
        },
        mouthCues
    };
}


// Run the function


module.exports = { getDatetime, getDate, encryptId, decryptId, EducationType, isAjax, getJsonFile, runRhubarbCommand,getPhonemes ,currentTimeStamp}