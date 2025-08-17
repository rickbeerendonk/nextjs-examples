/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2023 Rick Beerendonk     !*/

/* eslint-disable no-console */

const childProcess = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('../node_modules/mime-types');
const ip = require('./ip');

let [, , ...filePath] = process.argv;
// Windows fix:
filePath = filePath.join(' ').replaceAll('\\\\', '\\');

/*** Helper functions ***/

function findFileInPath(directory, file) {
  const filename = path.join(directory, file);
  if (fs.existsSync(filename)) {
    return filename;
  } else {
    const basename = path.dirname(directory);
    return basename && basename !== directory
      ? findFileInPath(basename, file)
      : null;
  }
}

function isDirectory(dirPath) {
  return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
}

function openBrowser(uri) {
  const command =
    process.platform === 'win32' ? `start "" "${uri}"` : `open "${uri}"`;

  childProcess.spawn(command, {
    shell: true,
    stdio: 'inherit'
  });
}

/*** Main functions ***/

/// Is Webpack project? ///

if (filePath && fs.statSync(filePath).isDirectory()) {
  const webpackConfigNames = ['webpack.config.js', 'webpack.dev.js'];
  const webpackConfigPath = webpackConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (webpackConfigPath) {
    // Webpack config exists, so execute webpack
    console.log('webpack');
    console.log('webpack config: ' + webpackConfigPath);
    childProcess.spawnSync(
      'webpack-dev-server',
      ['--config', `"${webpackConfigPath}"`, '--open'],
      {
        cwd: path.dirname(webpackConfigPath),
        shell: true,
        stdio: 'inherit'
      }
    );
    console.log('webpack done');
    process.exit();
  }
}

/// Has package.json? ///

if (filePath && fs.statSync(filePath).isDirectory()) {
  const packageConfigNames = ['package.json'];
  const packageConfigPath = packageConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (packageConfigPath) {
    // Package.json config exists, so execute webpack
    console.log('package.json: ' + packageConfigPath);
    childProcess.spawnSync('npm', ['run', 'dev'], {
      cwd: path.dirname(packageConfigPath),
      shell: true,
      stdio: 'inherit'
    });
    console.log('package.json done');
    process.exit();
  }
}

/// No Webpack ///

const basePath = process.cwd();

// If filePath is given, we'll open that path in the browser
let extraUri = '';
if (filePath && filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  extraUri = filePath.substring(basePath.length).split('\\').join('/');
}

const server = http.createServer(function (request, response) {
  // Log request
  //console.log('Request:', request.url);

  let filePath = path.join(basePath, decodeURI(request.url));
    if (path.normalize(decodeURI(request.url)) !== decodeURI(request.url)) {
        response.statusCode = 403;
        response.end();
        return;
    }
  let isDirPath = isDirectory(filePath);

  if (isDirPath) {
    // Go to parent if it contains 'index.html'
    if (
      !fs.existsSync(path.join(filePath, 'index.html')) &&
      findFileInPath(filePath, 'index.html')
    ) {
      response.writeHead(302, { Location: `${request.url}..` });
      response.end();
      return;
    } else {
      // Get default files in directories:
      if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
        isDirPath = false;
      }
      if (fs.existsSync(path.join(filePath, 'index.js'))) {
        filePath = path.join(filePath, 'index.js');
        isDirPath = false;
      }
    }
  }

  if (isDirPath) {
    // Response with list of directories in this directory
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(
      `<ul>
        ${
          // Link to: Parent
          request.url !== '/'
            ? '<li>...<a href="..">Go to Parent</a>...</li>'
            : ''
        }
        ${
          // Links to: Directories
          fs
            .readdirSync(filePath, { withFileTypes: true })
            .filter(
              dirent =>
                dirent.isDirectory() &&
                ![
                  '.git',
                  '.vscode',
                  'node_modules',
                  'resources',
                  'server'
                ].includes(dirent.name)
            )
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map(
              dirent =>
                `<li><a href="${encodeURI(`./${dirent.name}/`)}">${
                  dirent.name
                }</a></li>`
            )
            .join('')
        }
      </ul>`,
      'utf-8'
    );
  } else {
    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code === 'ENOENT') {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end('<p style="color: red">404 File not Found</p>', 'utf-8');
        } else {
          response.writeHead(500, { 'Content-Type': 'text/html' });
          response.end(
            `<p style="color: red">Internal server error: ${error.code}</p>
               ${content}`,
            'utf-8'
          );
        }
      } else {
        response.writeHead(200, {
          'Content-Type': mime.contentType(mime.lookup(filePath))
        });
        response.end(content, 'utf-8');
      }
    });
  }
});

const port = undefined; //3000;
server.listen(port).on('listening', () => {
  const localServerUri = `http://localhost:${server.address().port}`;
  const serverUri =
    ip['en0']?.[0] && `http://${ip['en0']?.[0]}:${server.address().port}`;

  const totalUri = `${localServerUri}${extraUri}${
    extraUri[extraUri.length - 1] !== '/' && '/'
  }`.replace(/\s+/g, '%20');

  console.log(
    '\x1b[35m' /* Foreground Magenta */,
    'Server listening at',
    '\x1b[1m' /* bold */,
    localServerUri,
    serverUri ? `(${serverUri})` : '',
    '\x1b[0m' /* reset */
  );

  openBrowser(totalUri);
});
