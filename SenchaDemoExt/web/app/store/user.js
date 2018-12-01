/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaDemoExt.store.user', {
    extend: 'Ext.data.Store',
    alias: 'store.user',
    
     requires: 'SenchaDemoExt.model.User',
        model: 'SenchaDemoExt.model.User',
    proxy: {
                type: 'ajax',
                url: 'GetAllMemberServlet',
                reader:{
                    type: 'json'
                }
            }
});


