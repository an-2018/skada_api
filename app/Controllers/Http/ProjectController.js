'use strict'
// get model
const Project = use('App/Models/Project')
const {validate} = use('Validator')
class ProjectController {
    async index() {
        const projects = await  Project.all();

        if(projects != null){
            return projects.toJSON()
        }

        return {message:null}
    }

    async details({params}){
        const project = await Project.find(params.id)

        if(project != null)
            return project
        return {message:null}
    }

    async store({request, session}) {
        // validation
        const validation = await validate(request.all(),{
            name: 'required|min:3|max:255',
            description: 'required|min:3'
        })
        
        if(validation.fails()){
            session.withErrors(validation.messages()).flashAll()
            return validation.messages()
        }

        const project = new Project()
        const aux = request.body

        project.name = aux.name
        project.description = aux.description
        project.tag = aux.tag
        
        await project.save();

        return project
    }

    async update({request, session, params}){
        // validation
        const validation = await validate(request.all(),{
            name: 'required|min:3|max:255',
            description: 'required|min:3'
        })
        
        if(validation.fails()){
            session.withErrors(validation.messages()).flashAll()
            return validation.messages()
        }

        const project = await Project.find(params.id)
        const aux = request.body

        project.name = aux.name
        project.description = aux.description
        project.tag = aux.tag

        await project.save()

        return project
    }

    async destroy({params}){
        const project = await Project.find(params.id)
        let result = false
        
        if(project != null)
            result = await project.delete()

        return {message:result}

    }
}

module.exports = ProjectController
