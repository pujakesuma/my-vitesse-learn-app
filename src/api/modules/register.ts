import service from '~/api/http'

const registerApi = {
  // Authenticate login instance
  postVerification: (params: object) => service.post('/register', params),
}

export default registerApi
