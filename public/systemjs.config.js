var map = {
    'app': 'js/app',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'ng2-bootstrap': 'js/vendor/ng2-bootstrap',
    'moment': 'js/vendor/moment/moment.js'
};

var packages = {
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ng2-bootstrap': { defaultExtension: 'js' }
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade'
];

packageNames.forEach(function(pkgName) {
   packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

// ng2-ckeditor
  map['ng2-ckeditor'] = 'https://npmcdn.com/ng2-ckeditor@1.0.4';
  packages['ng2-ckeditor'] = { main: 'lib/CKEditor.js', defaultExtension: 'js' };

var config = {
    map: map,
    packages: packages
};

System.config(config);
