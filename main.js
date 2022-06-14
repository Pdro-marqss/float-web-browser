const { app, BrowserWindow } = require('electron');

let win; //serve para tornar o controle da window global, assim posso usar em novas funções

function createWindow() {
    //Cria a janela do app
    win = new BrowserWindow({
        width: 800,
        height: 600,
        // titleBarStyle: 'hidden',
        autoHideMenuBar: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //Carrega o index.html do app
    // win.loadFile('index.html');
    win.loadURL('https://www.google.com');

    //Habilita o DevTools
    win.webContents.openDevTools()
}

// Esse metodo vai ser chamado quando o electron finalizar a inicialização e estiver pronto para criar uma janela.
// Algumas API's só podem ser usadas depois dessa ação.
app.whenReady().then(createWindow);

// Sair quando a janela do app for fechada
app.on('window-all-closed', () => {
    // No MAC-OS é comum a aplicação continuar aberta até que o usuario sair usando cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // No MAC-OS é comum reacriar uma janela no app quando clica no icone na dock e nao tem outra janela aberta
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});