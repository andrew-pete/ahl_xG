# AHL XG Script

## Setup

### Getting the Code
On the repository page, click the green "Clone or Download" button and download as a ZIP.

In all likelihood, that will go into your Downloads folder. Feel free to rename or move elsewhere after unzipping it.

### Pulling in the Game Data
For every game you want processed, you need to first "save as" a .CSV file. Save this file as a CSV (comma separated value format) in the `../data/raw/` folder of this project. If you didn't change the name of the folder after downloaded, that'll be under `/ahl_xG-master/data/raw/`.

We need to save as CSV so that they can be read by my code. CSV's are much simpler than excel files, and you can import them into excel files later :) 

### Running the Code
You'll need to open up either "Terminal" (on a mac) or "Command Prompt" if using Windows.

We also need to navigate to the project directory in your terminal window. The easiest way to do that is to right-click the directory and press "get info." The file path should be in there.

![file path](https://github.com/andrew-pete/ahl_xG/tree/master/assets/filepath.png "File Path in Mac")

You can actually copy that directly, or just make note of it.

To navigate there in the terminal, you'll execute `cd path-to-directory`.

For me, that's `cd /Users/andrewpeterson/Downloads/ahl_xG-master`

You can also do it step-by-step:

i.e.
```
cd /
cd Users/
cd andrewpeterson/
cd Downloads/
cd ahl_xG-master
```

It's basically the same as navigating through your file explorer. 

If you ever get stuck, you can list out the files and folders in a directory by doing `ls`. So if I'm in the Downloads folder, and I type in `ls` and press enter, I will see every folder and file in there listed out.

### Once you're there
Once you've navigated into the project folder, you're basically all set!!

You need to first run `npm install`.
If you don't have node on your computer, you can do that here: https://www.npmjs.com/get-npm.

This is going to install all of the dependencies that I use to read/write files, etc...

Once that is done, type in `node start` and it should run!

