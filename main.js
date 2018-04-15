const { BrowserWindow , Menu , app , shell } = require("electron") , { join } = require("path") , { format } = require("url")

const menu = function () { return process.platform === 'darwin' ? (this.unshift({ label:app.getName() , submenu:[{ role:'about' } , { type:'separator' } , { role:'services' , submenu:[] } , { type:'separator' } , { role:'hide' } , { role:'hideothers' } , { role:'unhide' } , { type:'separator' } , { role:'quit' }] }) , this[1].submenu.push({ type:'separator' } , { label:'Speech' , submenu:[{ role: 'startspeaking' } , { role:'stopspeaking' }]}) , this[3].submenu = [{ role:'close' } , { role:'minimize' } , { role:'zoom' } , { type:'separator' } , { role:'front' }] , this) : this }.call([{ label:'Edit' , submenu:[{ role:'undo' } , { role:'redo' } , { type:'separator' } , { role: 'cut' } , { role:'copy' }, { role:'paste' } , { role:'delete' } , { role:'selectall' }] } , { label:'View' , submenu:[{ role:'reload' } , { role:'forcereload' } , { type:'separator' } , { role:'resetzoom' } , { role:'zoomin' } , { type:'separator' } , { role:'togglefullscreen' }] } , { role:'window' , submenu:[{ role:'minimize' } , { role:'close' }] } , { role:'help' , submenu:[{ label:'Learn More' , click () { shell.openExternal("https://github.com/marrus-sh/writer/") } }] }]) , windowSettings = { fullscreenWindowTitle:true , height:675 , minHeight:162 , minWidth:436 , width:560 , tabbingIdentifier:'xyz.marrus.writer' , title:`${app.getName()}` , titleBarStyle:"" , useContentSize:true , webPreferences:{ defaultEncoding:"UTF-8" , defaultFontFamily:{ standard:"Times New Roman" , serif:"Times New Roman" , sansSerif:"Arial" , monospace:"Courier New" , cursive:"Comic Sans MS" , fantasy:"Papyrus" } , defaultFontSize:20 , defaultMonospaceFontSize:20 , devTools:false , nodeIntegration:false , preload:join(__dirname , "preload.js") , textAreasAreResizable:false , webgl:false } } , windows = []

function createWindow () {
	var win = new BrowserWindow(windowSettings);
	win.loadURL(format({ pathname:join(__dirname , "index.html") , protocol:"file:" , slashes:true })) , windows.push(win) , win.on("closed", function () { windows.splice(windows.indexOf(win), 1) })
}

app.on("ready", function () { Menu.setApplicationMenu(Menu.buildFromTemplate(menu)) , app.dock.setMenu(Menu.buildFromTemplate([{ label:"New Window" , click:createWindow }])) , createWindow() }) , app.on("window-all-closed", function () { app.quit() }) , app.on("activate" , function () { windows.length ? void{} : createWindow() })
