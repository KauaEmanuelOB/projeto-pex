import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext'

export function useCarrinho() {
  return useContext(CarrinhoContext)
}