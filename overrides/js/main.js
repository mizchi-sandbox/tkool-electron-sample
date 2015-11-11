//=============================================================================
// main.js
//=============================================================================

Utils.isNwjs = () => false;
PluginManager.setup($plugins);
window.onload = function() {
    SceneManager.run(Scene_Boot);
};
