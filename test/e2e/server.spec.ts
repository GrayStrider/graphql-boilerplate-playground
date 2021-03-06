import { ASTNode } from 'graphql'
import main from 'src/server'
import { sleep, supertest, Test, SuperTest } from 'src/utils'

describe('server', () => {
	
	let request: ReturnType<typeof supertest>['request']
	let post: ReturnType<typeof supertest>['post']
	
	beforeAll(async () => {
		({request, post} = supertest(await main(), '/example'))
	})
	
	afterAll(async () => {
		await sleep(500)
	})
	
	it('should start the server and redirect', async () => {
		expect.assertions(1)
		const {status} = await request.get('/foobar')
		expect(status).toBe(302)
	})
	
})
