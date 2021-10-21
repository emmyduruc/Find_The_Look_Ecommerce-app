import dbConnect, { MongodHelper } from '../db-helper'
import request, { Response } from 'supertest'
import app from '../../src/app'
import { UserDocument } from '../../src/models/Users'
//integration testing

describe('user controller', () => {
  let dbHelper: MongodHelper
  let createdUserResponse: Response

  beforeAll(async () => {
    dbHelper = await dbConnect()
  })
  afterAll(async () => {
    await dbHelper.closeDatabase()
  })
  beforeEach(async () => {
    await dbHelper.clearDatabase()

    const userPayload = {
      firstName: 'John',
      lastName: 'Doe',
      country: 'germany',
      state: 'hamburg',
      //       houseNumber: 45,
      //       phoneNumber: 987767467876,
      email: 'john@',
    }
    const createdUserResponse = await request(app)
      .post('/api/v1/users')
      .send(userPayload)
    console.log('response', createdUserResponse.body)
  })

  it('should create a user', async () => {
    //for the request body

    //     expect(createdUserResponse.status).toBe(200)
    expect(createdUserResponse.body).toHaveProperty('_id')
    expect(createdUserResponse.body).toHaveProperty('firstName', 'John')
    expect(createdUserResponse.body).toHaveProperty('lastName', 'Doe')
    expect(createdUserResponse.body).toHaveProperty('country', 'germany')
    expect(createdUserResponse.body).toHaveProperty('state', 'hamburg')
    expect(createdUserResponse.body).toHaveProperty('email', 'john@')
  })
  it('should get a list of all users', async () => {
    const response = await request(app).get('/api/v1/users')
    expect(response.body.length).toEqual(1)
    expect(response.body[0]).toHaveProperty('_id')
//     expect(createdUserResponse.body).toHaveProperty('firstName', 'John')
  })
})
//the send() passes the request-body and request()makes req to the DB, res(gets response from the DB)
//     request(app)
//       .post('/api/v1/users')
//       .send(userPayload)
//       .then((response) => {
//         expect(response.status).toBe(200)
//       })

// })
