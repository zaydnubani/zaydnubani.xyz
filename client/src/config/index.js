

import faunadb from 'faunadb'

const API_KEY = 'fnAEyGpQdyACUGY8N80xm6vEJtw1XVN18sMODIqC'

const client = new faunadb.Client({ secret: API_KEY })
const q = faunadb.query

export { client, q }