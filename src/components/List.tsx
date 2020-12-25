import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../../interfaces'

type Props = {
  items: Product[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
      </li>
    ))}
  </ul>
)

export default List
