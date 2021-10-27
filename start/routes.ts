/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// Other Routes...
Route.get('/', async ({ view }: HttpContextContract) => {
  return view.render('index')
}).as('not_found')

Route.get('/minha-casa-minha-vida', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/simulador', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/sobre-casaviva', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/sustentabilidade', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/fale-conosco', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/ficha/casaviva-morumbi', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/lyne-pirituba', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/termos-e-condicoes', async ({ view }: HttpContextContract) => {
  return view.render('index')
})

Route.get('/politica-de-privacidade', async ({ view }: HttpContextContract) => {
  return view.render('index')
})
