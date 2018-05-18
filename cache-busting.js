#!/usr/bin/env node

var fs = require('fs'),
        path = require('path'),
        cheerio = require('cheerio'),
        revHash = require('rev-hash');

var revision = require('child_process').execSync('git rev-parse --short HEAD').toString().trim();

/**
 *
 * @param string fileName
 * @returns string
 */
function hashFile(file) {

    // Get file name
    var fileName = file.replace(/\.[^/.]+$/, "");
    // Get file extension
    var re = /(?:\.([^.]+))?$/;
    var fileExtension = re.exec(file)[1];

    var filePath = path.join(buildDir, file);
    if (revision === '') {
        var fileHash = revHash(fs.readFileSync(filePath));
    } else {
        var fileHash = revision;
    }

    var fileNewName = `${fileName}.${fileHash}.${fileExtension}`;
    var fileNewPath = path.join(buildDir, fileNewName);
    var fileNewRelativePath = path.join('build', fileNewName);
    //Rename file
    console.log("cache-busting.js:hashFile:Renaming " + filePath + " to " + fileNewPath);
    fs.renameSync(filePath, fileNewPath);

    return fileNewRelativePath;
}


var rootDir = path.resolve(__dirname, './');
var wwwRootDir = path.resolve(rootDir, 'www');
var buildDir = path.join(wwwRootDir, 'build');
var indexPath = path.join(wwwRootDir, 'index.html');
$ = cheerio.load(fs.readFileSync(indexPath, 'utf-8'));

$('head link[href="build/main.css"]').attr('href', hashFile('main.css'));
$('body script[src="build/main.js"]').attr('src', hashFile('main.js'));
$('body script[src="build/polyfills.js"]').attr('src', hashFile('polyfills.js'));
$('body script[src="build/vendor.js"]').attr('src', hashFile('vendor.js'));

fs.writeFileSync(indexPath, $.html());
