import {render, screen} from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'


describe('Busqueda de palabras en el DOM', () => {
  test('Buscar la palabra FRONTLINE', async () => {
    render(<App />)
    const boton = screen.getByRole('button')
    userEvent.click(boton)
    const items = await screen.findAllByRole('listitem')
    expect(items).not.toHaveLength(0)
    
  })
})