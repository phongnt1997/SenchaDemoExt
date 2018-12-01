/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('SenchaDemoExt.view.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mygridpanel_controller',

    onAdd: function () {
        var form = this.lookupReference('name_form'),
                store = this.getViewModel().getStore('user');

        

        if (form.isValid()) {
            var firstname = Ext.getCmp('first_name').getValue();
            var lastname = Ext.getCmp('last_name').getValue();

            Ext.Ajax.request({
                url: './InsertServlet',
                params: {
                    firstname: firstname,
                    lastname: lastname

                },
                method: 'GET'
            });
            
        store.load();
        }


    },

    onUpdate: function (t, rowid, colid, item, evt, rec) {
        var firstname = rec.get('first_name');
        var lastname = rec.get('last_name');
        var id = rec.id;


        Ext.Ajax.request({
            url: './UpdateServlet',
            params: {
                id: id,
                firstname: firstname,
                lastname: lastname

            },
            method: 'GET'
        });
//       edit.store.sync();

    },

//    onUpdate2: function (editor, rec) {
//        var firstname = rec.get('first_name');
//        var lastname = rec.get('last_name');
//        var id = rec.id;
//        
//        
//        Ext.Ajax.request({
//                url: './UpdateServlet',
//                params: {
//                    id: id,
//                    firstname: firstname,
//                    lastname: lastname
//
//                },
//                method: 'GET'
//            });
//        
//    },

    onDelete: function (t, rowid, colid, item, evt, rec) {
        var store = rec.store;
        store.remove(rec);
        store.sync();
        var id = rec.id;
        Ext.Ajax.request({
            url: './DeleteServlet',
            params: {
                id: id
            },
            method: 'GET'
        });

    }
});


