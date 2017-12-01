define(function (require,hbars) {
    'use strict';

    return {
        navbarItemView: require('text!templates/navbar.html'),
        loginPageItemView: require('text!templates/login.html'),
        homeItemView : require('text!templates/home.html'),
        rowItemView : require('text!templates/rowTemplate.html'),
        tableItemView : require('text!templates/tableTemplate.html'),
        addEmpItemView : require('text!templates/addEmployee.html'),
        editEmpItemView : require('text!templates/editEmployee.html'),
        aboutItemView:require('hbars!templates/about'),
        sidePanelView:require('text!templates/sidepanel.html')
    };
});