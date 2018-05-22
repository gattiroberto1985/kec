const {app, BrowserWindow, shell} = require('electron');
const path = require('path');
const url = require('url');


function createWindow () {
    // Create the browser window.
    win = new BrowserWindow( 
        { 
            icon:  "./img/kec-icon.png",
            title: "KEC - Keep Electron Client"
     }
        /* {width: 800, height: 600} */ 
    )

    // Bypassing the title change event
    win.on( "page-title-updated", function( event ) {
        event.preventDefault();
    });

    // and load the index.html of the app.
    win.loadURL( "https://keep.google.com" 
    /*    url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    */
    );

    //win.on("will-navigate", function( event ) {
    //    console.log(" --> Navigating to '" + event.url + '" . . .');
    //    //shell.openExternal(link);
    //});
}

app.on('ready', createWindow);
