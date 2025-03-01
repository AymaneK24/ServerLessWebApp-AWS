import { apiEndpoint } from '../config'
import { Item } from '../types/Item';
import { CreateItemRequest } from '../types/CreateItemRequest';
import Axios from 'axios'
import { UpdateItemRequest } from '../types/UpdateItemRequest';

export async function getItems(): Promise<Item[]> {
  console.log('Fetching items')

  const response = await Axios.get(`${apiEndpoint}/items`, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  console.log('Items:', response.data)
  return response.data.Items
}

export async function createItem(
  newItem: CreateItemRequest
): Promise<Item> {
  const response = await Axios.put(`${apiEndpoint}/items`,  JSON.stringify(newItem), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  return response.data.item
}

export async function patchItem(
  itemId: string,
  updatedItem: UpdateItemRequest
): Promise<void> {
  await Axios.patch(`${apiEndpoint}/items/${itemId}`, JSON.stringify(updatedItem), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export async function deleteItem(
  itemId: string
): Promise<void> {
  await Axios.delete(`${apiEndpoint}/items/${itemId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
