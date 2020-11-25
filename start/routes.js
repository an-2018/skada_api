'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/', () => {
  return { greeting: 'Hello, wellcome to cloudSkada' }
})

/*
System data
*/

Route.get('/system_data', () => {
  return { projec_id:'String_project_id'}
})

/*
Project
*/

Route.post("/project",'ProjectController.store')

Route.put("/project/:id",'ProjectController.update')

Route.delete("/project/:id",'ProjectController.destroy')

Route.get("/project_info/:id", 'ProjectController.details')

Route.get("/project_all",'ProjectController.index')


/*
Device
*/

Route.post("/device", 'DeviceController.store')

Route.put("/device/:id", 'DeviceController.update')

Route.delete("/device/:id", 'DeviceController.destroy')

Route.get("/device_info/:id",'DeviceController.details')

Route.get("/device_all", 'DeviceController.index')

/*
Sensor
*/

Route.post("/sensor", () => {
  return {sensor: "sensor_object"}
})

Route.get("/sensor_info:id", ({params}) => {
  return {
    id:params.id,
    sensor_info:"sensor_object"
  }
})

Route.get("/sensor_all", () => {
  return {sensor_all:["array_object_list"]}
})

/*
Vizualization
*/

Route.post("/vizualiztion", () => {
  return {vizualization:"vizualisation_object"}
})

Route.get("/vizualisation_info:id", ({params}) => {
  return {
    id:params.id,
    vizualisation_info:"vizualisation_object"
  }
})

Route.get("/vizualisation_all", () => {
  return {vizualisation_all:["array_object_list"]}
})

/*
Dashboard
*/

Route.post("/dashboard", () => {
  return {dashboard:"dashboard_object"}
})

Route.get("/dashboard_info", ({params}) => {
  return {
    id:params.id,
    dashboard_info:"dashboard_object"
  }
})

Route.get("/dashboard_all", () => {
  return {dashboard_all: ["array_object_list"]}
})

/*
Alert
*/

Route.post("/alert", () => {
  return {alert:"alert_object"}
})

Route.get("/alert_info", ({params}) => {
  return {
    id:params.id,
    alert_info:"alert_object"
  }
})

Route.get("/alert_all", () => {
  return {alert_all:["array_object_list"]}
})

/*
User
*/

Route.post("/user", () => {
  return {user:"user_object"}
})

Route.get("/user_info", ({params}) => {
  return {
    id:params.id,
    user_info:"user_object"
  }
})

Route.get("/user_all", () => {
  return {user_all:["array_object_list"]}
})