'use strict'

const Device = use('App/Models/Device')

class DeviceController {

    async store({request}){
        console.log(request.body)
        const device = await new Device()
        const aux = request.body

        device.tag = aux.tag
        device.type = aux.type
        device.description = aux.description
        device.comm_status = aux.comm_status
        device.last_valid_comm = aux.last_valid_comm
        device.location = JSON.stringify(aux.location)
        device.specifications = JSON.stringify(aux.specifications)
        device.parameters = JSON.stringify(aux.parammeters)

        await device.save()
        
        return device
    }

    async update({request, params}){
        const device = await Device.find(params.id)
        console.log(request.body.tag)
        const aux = request.body

        if(device != null){
            device.tag = aux.tag
            device.type = aux.type
            device.description = aux.description
            device.comm_status = aux.comm_status
            device.last_valid_comm = aux.last_valid_comm
            device.location = JSON.stringify(aux.location)
            device.specifications = JSON.stringify(aux.specifications)
            device.parameters = JSON.stringify(aux.parammeters)

            await device.save()

            return device
        }

        return {message: null}
    }

    async destroy({params}){
        const device = await Device.find(params.id)
        let result = null

        if(device != null){
            result = await device.delete()
        }

        return {message:result}
    }

    async details({params}){
        const device = await Device.find(params.id)
        
        if(device != null){
            return device
        }

        return {message:null} 
    }

    async index(){
        return 
    }
}

module.exports = DeviceController
