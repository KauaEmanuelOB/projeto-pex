import { useState } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])

  const addCarrinho = (produto, quantidade, tamanho) => {
    setCarrinho (prev => {
      const jaTem = prev.find(item => item.id === produto.id && item.tamanho === tamanho)

      if (jaTem) {
        return prev.map(item => 
          item.id === produto.id && item.tamanho === tamanho
            ? { ...item, quantidade: item.quantidade + quantidade } 
            : item
        )
      }
      return [ ...prev, {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.img,
        slug: produto.slug,
        tamanho,
        quantidade
      }]
    })
  }
  
  const removerCarrinho = (id, tamanho) => {
    setCarrinho(prev => prev.filter(item => !(item.id === id && item.tamanho === tamanho)))
  }

  const attQuantidade = (id, tamanho, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerCarrinho(id, tamanho)
      return
    }
    setCarrinho(prev => prev.map(item =>
      item.id === id && item.tamanho === tamanho
        ? { ...item, quantidade: novaQuantidade }
        : item
    ))
  }

  const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0)
  const precoTotal = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0)

  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      addCarrinho,
      removerCarrinho,
      attQuantidade,
      totalItens,
      precoTotal
    }}>
      {children}
    </CarrinhoContext.Provider>
  )
}