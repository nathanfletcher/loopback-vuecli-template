/**
 * Created by KobbyFletcher on 10/23/17.
 */
'use strict'

const app = require('../../server/server')
const User = app.models.AppUser
const Note = app.models.Note

//console.log(app.models.AppUser)

function createDefaultUsersAndNotes() {


  if (process.env.NODE_ENV !== 'production') {
    console.log('Dev or staging mode activated, creating seed data')
    User.findOrCreate({where: {id: 0}}, {
        username: 'Admin',
        email: 'admin@admin.com',
        password: 'secret',
        phonenumber: '0209708141',
        name: 'Admin'
      }
      , function (err, users) {
        if (err) return console.log('%j', err)
      })
      
    User.findOrCreate({where: {id: 1}}, {
        username: 'mac_user',
        email: 'mac@user.com',
        password: 'secret',
        phonenumber: '76597869787',
        name: 'Mac'
      }
      , function (err, users) {
        if (err) return console.log('%j', err)
      })
    User.findOrCreate({where: {id: 2}}, {
        username: 'Jane',
        email: 'jane@user.com',
        password: 'secret',
        phonenumber: '08970897087687',
        name: 'jane'
      }
      , function (err, users) {
        if (err) return console.log('%j', err)
      })
    User.findOrCreate({where: {id: 3}}, {
        username: 'Bobusername',
        email: 'bob@projects.com',
        password: 'secret',
        phonenumber: '5465465465',
        name: 'bob'
      }
      , function (err, users) {
        if (err) return console.log('%j', err)
      })


    // Create the admin role
    /* Role.create({
     name: 'admin'
     }, function(err, role) {
     if (err) return debug(err);
     debug(role);

     // Make Bob an admin
     role.principals.create({
     principalType: RoleMapping.USER,
     principalId: users[2].id
     }, function(err, principal) {
     if (err) return debug(err);
     debug(principal);
     });
     }); */
  }

  Note.findOrCreate({where: {'name': 'airtimeHubtel'}}, 
  {
    'title': 'airtimeHubtel',
    'body': 'airtime',
    'jsonpayload': '{   "phone": "string",   "amount": "string","token": "string", "foreignId": "string"}',
    'endpoint': 'https://api.hubtel.com/vend/airtime',
    'queryfield': null,
  }, function (err, stuff) {
    if (err) return console.log('%j', err)
    else {
    }
  })

  Note.findOrCreate({where: {'name': 'surflineHubtel'}}, 
  {
    'title': 'surflineHubtel',
    'body': 'internet data',
    'jsonpayload': '{\n    "device": "string",\n    "amount": 0,\n    "bundle": "string", \n    "token": "string",  \n    "foreignId": "string"\n}',
    'endpoint': 'https://api.hubtel.com/vend/surfline',
    'queryfield': 'device',
  }, function (err, stuff) {
    if (err) return console.log('%j', err)
    else {
    }
  })

  Note.findOrCreate({where: {'name': 'gotvHubtel'}}, 
  {
    'title': 'gotvHubtel',
    'body': 'paidtv',
    'jsonpayload': '{\n    "account": "string",\n    "amount": 0, \n    "token": "string",   \n    "foreignId": "string"  \n}',
    'endpoint': 'https://api.hubtel.com/vend/gotv',
    'queryfield': 'account',
  }, function (err, stuff) {
    if (err) return console.log('%j', err)
    else {
    }
  })

  Note.findOrCreate({where: {'name': 'dstvHubtel'}},
    {
      'title': 'dstvHubtel',
      'body': 'paidtv',
      'jsonpayload': '{\n    "account": "string",\n    "amount": 0, \n    "token": "string",   \n    "foreignId": "string"  \n}',
      'endpoint': 'https://api.hubtel.com/vend/dstvbo',
      'queryfield': 'account',
    }, function (err, stuff) {
      if (err) return console.log('%j', err)
      else {
      }
    })

  Note.findOrCreate({where: {name: 'busyHubtel'}},
    {
      'title': 'busyHubtel',
      'body': 'internet data',
      'jsonpayload': '{\n    "account": "string",\n    "amount": 0,\n    "bundle": "string", \n    "token": "string",  \n    "foreignId": "string"\n}',
      'endpoint': 'https://api.hubtel.com/vend/busy',
      'queryfield': 'account',
    }, function (err, stuff) {
      if (err) return console.log('%j', err)
      else {
      }
    })

  Note.findOrCreate({where: {name: 'tvLicenseHubtel'}},
    {
      'title': 'tvLicenseHubtel',
      'body': 'paidtv',
      'jsonpayload': '{\n    "account": "string",\n    "amount": 0,\n    "token": "string",  \n    "foreignId": "string"\n}',
      'endpoint': 'https://api.hubtel.com/vend/tvlicense',
      'queryfield': null,
    }, function (err, stuff) {
      if (err) return console.log('%j', err)
      else {
      }
    })

  Note.findOrCreate({where: {name: 'mtnBillsHubtel'}},
    {
      'title': 'mtnBillsHubtel',
      'body': 'utility',
      'jsonpayload': '{\n    "phone": "string",\n    "amount": 0,  \n    "token": "string",   \n    "Note": "postpaid"\n    "foreignId": "string"\n}',
      'endpoint': 'https://api.hubtel.com/vend/vodafone',
      'queryfield': null,
    }, function (err, stuff) {
      if (err) return console.log('%j', err)
      else {
      }
    })

  Note.findOrCreate({where: {name: 'aeroHubtel'}},
    {
      'title': 'aeroHubtel',
      'body': 'airline ticket',
      'jsonpayload': '{\n"account": "string",\n"amount": 0,\n"token": "string",   \n"foreignId": "string"\n}',
      'endpoint': 'https://api.hubtel.com/vend/aero',
      'queryfield': null,
    }, function (err, stuff) {
      if (err) return console.log('%j', err)
      else {
      }
    })

  Note.findOrCreate({where: {name: 'momoHubtel'}},
    {
      'name': 'momoHubtel',
      'title': 'aeroHubtel',
      'Notetype': 'airline ticket',
      'jsonpayload': '{\n"account": "string",\n"amount": 0,\n"token": "string",   \n"foreignId": "string"\n}',
      'endpoint': 'https://api.techloftgh.com/payHubtel/sellTransaction',
      'queryfield': null,
    }, function (err, stuff) {
      if (err) return console.log('%j', err)
      else {
      }
    })
}


module.exports = async(app) => {
  await createDefaultUsersAndNotes();
}
