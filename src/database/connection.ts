import { DynamoDB } from 'aws-sdk'

const isOffline = process.env.IS_OFFLINE

const options = isOffline ? {} : {}

export const database = new DynamoDB.DocumentClient(options)
