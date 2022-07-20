import UUID from 'uuid-js'

export const uuid4 = () => UUID.create().toString()

export const uuid1 = () => UUID.create(1).toString()
