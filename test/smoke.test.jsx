import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

const at = (path) => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)

test.each(["/","/hakkimizda","/hizmetler","/deneyim","/galeri","/iletisim","/randevu"])('renders %s', (path) => {
  const { container } = at(path)
  expect(container.querySelector('h1, h2, h3')?.textContent).toBeTruthy()
})

test('the form reports success only after the endpoint accepted it', async () => {
  vi.stubEnv('VITE_FORM_ENDPOINT', 'https://forms.example/f/1')
  const fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 })
  vi.stubGlobal('fetch', fetch)
  const { container } = at("/randevu")
  const form = container.querySelector('form')
  const category = form.querySelectorAll('select')[0]
  fireEvent.change(category, { target: { value: category.options[1].value } })
  const service = form.querySelectorAll('select')[1]
  fireEvent.change(service, { target: { value: service.options[1].value } })
  fireEvent.change(form.querySelector('input[type=date]'), { target: { value: '2026-12-24' } })
  fireEvent.change(form.querySelector('input[type=time]'), { target: { value: '14:00' } })
  fireEvent.change(form.querySelector('input[type=text]'), { target: { value: 'Ada' } })
  fireEvent.change(form.querySelector('input[type=tel]'), { target: { value: '05551234567' } })
  fireEvent.submit(form)
  expect(await screen.findByRole('alert')).toBeTruthy()
  expect(screen.queryByText(/Randevunuz Alındı/)).toBeNull()
  fetch.mockResolvedValue({ ok: true })
  fireEvent.submit(form)
  expect(await screen.findByText(/Randevunuz Alındı/)).toBeTruthy()
  expect(fetch).toHaveBeenLastCalledWith('https://forms.example/f/1', expect.objectContaining({ method: 'POST' }))
})
