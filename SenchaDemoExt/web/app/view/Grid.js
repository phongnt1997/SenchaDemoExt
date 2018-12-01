/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('SenchaDemoExt.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',
    requires: [
        'SenchaDemoExt.view.GridController',
        'SenchaDemoExt.view.GridModel'
        
    ],
    viewModel: {
        type: 'mygridpanel_model'
    },
    controller: 'mygridpanel_controller',
    title: 'My Grid Panel',
    bind: {
        store: '{user}'
    },
    
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'id',
            text: 'ID'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'first_name',
            text: 'First',
            editor: {
                allowBlank: false,
                xtype: 'textfield',
                action: 'onUpdate2'
            }
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'last_name',
            text: 'Last',
            editor: {
                allowBlank: false,
                xtype: 'textfield',
                action: 'onUpdate2'
            }
        }, {
            xtype: 'actioncolumn',
            width: 50,
            sortable: false,
            menuDisabled: true,
            align: 'center',
            text: 'Delete',
            items: [{
                    icon: 'https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/delete_16x16.gif',
                    tooltip: 'Delete Name',
                    handler: 'onDelete'
                }]
        }, {
            xtype: 'actioncolumn',
            width: 50,
            sortable: false,
            menuDisabled: true,
            align: 'center',
            text: 'Update',
            items: [{
                    icon: 'if_link-external_298812.png',
                    tooltip: 'Delete Name',
                    handler: 'onUpdate'
                }]
        }

    ],
    
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                    xtype: 'form',
                    reference: 'name_form',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        labelWidth: 35
                    },
                    items: [{
                            xtype: 'textfield',
                            fieldLabel: 'First',
                            id: 'first_name',
                            allowBlank: false,
                            name: 'first_name'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Last',
                            id: 'last_name',
                            margin: '0 0 0 10',
                            allowBlank: false,
                            name: 'last_name'
                        }]
                }, {
                    xtype: 'button',
                    text: 'Add Name',
                    handler: 'onAdd'
                }]
        }],
    plugins: [{
            ptype: 'rowediting',
            clicksToEdit: 1
        }]
});


