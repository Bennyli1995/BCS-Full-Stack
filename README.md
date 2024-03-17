# BCS Hacks-2024

# Setup

1. [Clone](https://github.com/Bennyli1995/BCS-Full-Stack) this repo

   - Open terminal, and `cd` into (go to) the directory (folder) that you want to clone this repo
   - Run `git clone https://github.com/Bennyli1995/BCS-Full-Stack.git`
   - You should see another directory appear, named something like: BCS-Full-Stack
   - Open up the terminal in your VS Code (the shortcut for Mac is control + `key). Make two ports by utilizing "+" button. In the first port, navigate to the frontend directory by`cd frontend`. In the second port, navigate to the backend directory by `cd backend`.
   - Install dependencies in both ports by executing `npm install`. To start the backend, use `npm start`. To start the front end, see step 3.

2. Install [node](https://nodejs.org/en/download)

   - If you're unsure, use `node -v` command to see if you have node installed
     - If you get an error, most likely means you don't have node
   - You should be able to click your OS type (Mac in my case) under the LTS (Long-Term Support) and download the installer
   - Open the installer and follow the instruction to install node
   - Run `node -v` to see if node is correctly installed
     - If you see a series of number like `20.8.1` or `v20.8.1` or something that looks like a version number, you're done!

3. Install BrowserSync

   - In your frontend port, run `npm install -g browser-sync`
   - You might get some sort of permissions error. In this case, try:
     - [macOS/Linux] try `sudo npm install -g browser-sync`
     - [Windows] try to run terminal as administrator. You can right click on the terminal icon to see the option
   - Now, you can run `browser-sync start --server --files "./*"` in the terminal (within repo directory) to run the html file.

4. Create an .env file in the backend directory. Follow the .env.sample for the variables required. I will be providing the actual variable values at the day of the presentation.

5. Create a MongoDB Atlas account using this link [here] (https://www.mongodb.com/cloud/atlas/register)

If you're done all the steps above, you should be good to go!
