import TokenService from '../services/token-service'
import config from '../config'

const IdeasApiService = {
  getLists() {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getList(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getListIdeas(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}/ideas`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postList(name) {
      return fetch(`${config.API_ENDPOINT}/lists`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            name
        }),
      })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
  },
  postIdea(listId, name, content) {
    return fetch(`${config.API_ENDPOINT}/ideas`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        list_id: listId,
        name,
        content
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  deleteIdea(ideaId) {
      return fetch(`${config.API_ENDPOINT}/ideas/${ideaId}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
      })
        .then(res => 
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))
             : console.log("delete from api service ", ideaId))
  },


  deleteList(listId) {
      return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`,
          }
      })
        .catch(error => (console.log(error)))
  },
//codes for future development
  patchIdea(ideaId, ...params) {
      return fetch(`${config.API_ENDPOINT}/ideas/${ideaId}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
              ...params
          }),
      })
        .then(res=>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
  },
  patchList(listId, ...params) {
      return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
              ...params
          }),
      })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
  }
}

export default IdeasApiService