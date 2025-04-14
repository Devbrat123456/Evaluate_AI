#!/bin/bash

# Navigate to the rhubarb executable's directory
cd /home/admin1/Desktop/java/Nodejs/Rhubarb-Lip-Sync-1.13.0-Linux

# Run the rhubarb command
./rhubarb -f json /home/admin1/Desktop/java/Nodejs/Evalutation/public/assets/audio/ElevenLabsNew.wav -r phonetic -o /home/admin1/Desktop/java/Nodejs/Evalutation/public/assets/audio/audioFile.json 

# Print success message
echo "Rhubarb execution completed."
