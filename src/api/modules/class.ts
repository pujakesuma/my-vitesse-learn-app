import service from '~/api/http'

const classApi = {
  getAvailableClasses: () => service.get('/available-classes'),
  getDetailClass: (params: object) => service.get('learning-class', params),
}

export default classApi
