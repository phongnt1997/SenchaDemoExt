/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('SenchaDemoExt.view.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mygridpanel_model',

    requires: [
        'SenchaDemoExt.model.User',
        'SenchaDemoExt.store.user'
    ],

    stores: {
        user: {
            autoLoad: true,
            type: 'user',
            model: 'SenchaDemoExt.model.User'
        }
    }
});


