import { afterAll, beforeAll, describe, expect, it, test } from 'vitest'
import request from 'supertest'
import {app} from '../app'
import { a } from 'vitest/dist/suite-CRLAhsm0'


describe('transactionsRoutes', ()=>{

    beforeAll(async ()=>{
        await app.ready()
    })
    
    afterAll(async()=>{
        await app.close()
    })

    it('should be able to create a new transaction', async ()=>{
       const response = await request(app.server).post('/transactions').send({
        title: "test",
        amount: 10000,
        type: "credit"
       }).expect(201)
    })
})